import React from 'react';
import { Spin, Form } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import uiRender from './core/uiRender.js';
import { funcParser, ApaasReg } from '@apaas-lego/parser';
import request from './common/request';
import { getParams } from './common/common';
import * as util from './common/util';
import { sortBy, groupBy, find, isPlainObject, get, trim, set, isString } from 'lodash';
const { regHasExp, regCksplit } = ApaasReg;
let priorityQueue = []; // 优先级队列
class UIRender extends React.Component {
  constructor(props) {
    super(props);
    // data 应该在这个阶段通过加载内置到 state 里
    // 同时 state 里的一些内容，应该和render 的内容，产生对应关系。
    // table 可以在这期间加入进来。
    this.state = {
      widgets: this.props.widgets,

      global: {
        loading: false
      },
      uiSchema: this.props.uiSchema,
      ...this.initData(this.props.uiSchema),
      ...props.context,
    }
    this.registered = [];
    this.$util = util;
    this.request = request;
    this.funcParser = funcParser(this);
    this.$refs = {};
  }

  priorityQueueQuery = () => {
    //  队列不为空，我们需要处理异步请求
    if (priorityQueue.length > 0) {
      const { state } = this;
      const currentAsyncQueue = priorityQueue.shift();
      const promises = currentAsyncQueue.map(req => {
        let defaultParams = {}
        if (req.requestHooks) {
          defaultParams = this.funcParser(req.requestHooks).call(this, state)
        }
        const currentAPIService = find(this.registered, { name: req.serverName })
        defaultParams = defaultParams || currentAPIService.params; // requestHooks需要字符串翻译成function
        const { path, method, params, ...otherConfig } = currentAPIService?.api
        return request(path,
          { method: method || 'get', ...getParams(method, defaultParams), ...otherConfig })
      })
      this.setState({
        global: {
          loading: true,
        }
      })
      Promise.all(promises).then(response => {
        let finalState = {};
        response.map((res, index) => {
          let newState = {};
          if (currentAsyncQueue[index]['responseHooks']) {
            newState = this.funcParser(currentAsyncQueue[index]['responseHooks']).call(this, res)
          }
          newState = newState || res;  // responseHooks需要字符串翻译成function
          finalState = { ...finalState, ...newState }
        });
        this.setState({
          ...finalState
        })
      }).finally(() => {
        this.setState({
          global: {
            loading: false,
          }
        })
      })
    }
  }

  componentDidMount () {
    const { uiSchema = {} } = this.props;
    const { didMount = {}, registered = [] } = uiSchema;
    this.registered = registered;
    if (didMount.requests?.length > 0) {
      // 先对request进行排序
      const groupObject = groupBy(sortBy(didMount.requests, item => item.priority), item => item.priority);
      Object.values(groupObject).map(value => priorityQueue.push(value));
      this.priorityQueueQuery();
    }

    if (didMount?.customizeFunction) {
      this.funcParser(didMount.customizeFunction).call(this)
    }
  }

  componentDidUpdate () {
    this.priorityQueueQuery();
  }

  getStateName (name) {
    let newName = trim(name)
    let firstIndex = newName.indexOf('.')
    return newName.slice(firstIndex + 1, newName.length);
  }

  initData (value) {
    let newData = {};
    const typeValue = {
      'Object': {},
      'Array': [],
      'String': '',
      'Boolean': false,
      'Number': ''
    }
    let that = this;
    const transform = function (schema) {
      // console.log(schema);
      Object.keys(schema).forEach((key) => {
        //display字段判断
        if (key === 'display' && isString(schema[key])) {
          let arr = schema[key].split(regHasExp)
          let arr1 = arr[1].split(regCksplit)
          arr1.forEach(item => {
            if (item.indexOf('state') > -1) {
              !get(newData, that.getStateName(item)) && set(newData, that.getStateName(item), schema['initialValue'])
            }
          })
        } else if (regHasExp.test(schema[key])) { //普通字段

          let arr = schema[key].split(regHasExp)
          if (arr[1].indexOf('SysFunc') > -1 || arr[1].indexOf('WinFunc') > -1 || arr[1].indexOf('state') < 0) {
            return;
          }
          !get(newData, that.getStateName(arr[1])) && set(newData, that.getStateName(arr[1]), schema['initialValue'])
        } else if ((key !== 'events' && key !== 'styleProps') && isPlainObject(schema[key])) { //如果是对象 递归
          transform(schema[key])
        }
      })

    }
    transform(value)
    return newData
  }


  render () {
    return (
      <Spin spinning={this.state?.global?.loading}>
        {
          uiRender(this)
        }
      </Spin>
    )
  }
}



export default UIRender;