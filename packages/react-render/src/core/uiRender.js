import React, { forwardRef } from "react";
import {
  checkDisplayStatus,
  getDataValue,
  explanContent,
  checkStyle,
  analysisClass,
  ApaasReg,
} from "@apaas-lego/parser";
import { isObjectLike, get } from "lodash";

import { Form } from 'antd';
const { regPreKey, regHasExp, regFunKey } = ApaasReg;
let self = null;

function getRefs (id) {
  if (self.$refs[id]) {
    return self.$refs[id]
  }
  const newRef = React.createRef()
  self.$refs[id] = newRef
  return newRef
}

/**
 *
 * @param {object} schema schema 对象
 * @param {object} data 来自上一级的 state 或者数据对象
 * @param {function} func
 * @returns {reactElement Array}
 */
function getRenderNodes (schema, data, func) {
  return getRenderNode(schema, data, func)
}

/**
 *
 * @param {object} schema
 * @param {object} data 来自上一级的 state 或者数据对象
 * @param {function} func
 * @returns {reactElement || string}
 */
function getNodeContent (schema, data, func) {
  if (schema.children) {
    let arr = []
    Object.keys(schema.children).forEach(key => {
      arr.push(getRenderNodes(schema.children[key], data, func))
    })
    return arr
  } else if (schema.content) {
    return explanContent(schema.content, data, func)
  } else {
    return ""
  }
}

function parseObjectData (obj, data, func, schema) {
  if (isObjectLike(obj) && Object.keys(obj)?.length > 0) {
    return Object.keys(obj).reduce((prev, next) => {
      //判断是否是'{{xxxx}}' 这种类型的
      if (regHasExp.test(obj[next])) {
        let arr = obj[next].split(regHasExp)
        //是否是函数
        if (regFunKey.test(arr[1])) {
          const handleFunc = func(obj[next], data, schema)
          prev[next] = function () {
            handleFunc.apply(this, [schema, ...arguments])
          }
        } else {
          prev[next] = getDataValue(obj[next].replace(regHasExp, "$1"), data)
        }
      } else {
        prev[next] = parseObjectData(obj[next], data, func, schema);
      }
      return prev;
    }, Array.isArray(obj) ? [] : {});
  } else {
    return obj;
  }
}

/**
 *
 * @param {object} schema
 * @param {reactElement} nodeContent
 * @param {object} data
 * @param {function} func
 * @returns {reactElement}
 */
function getElement (schema, data, nodeContent, func) {
  let params = arguments;
  let {
    componentName,
    sourcePackage,
    styleProps,
    props = {},
    expandProps = {},
    className,
    id,
    __componentType__
  } = schema;
  let { events = {}, lifeCycle = {} } = expandProps;
  const ref = getRefs(id)
  const MyComponent = get(window, `${sourcePackage}.${componentName}`, React.Fragment)
  console.debug('sourcePackage', sourcePackage, 'componentName', componentName, MyComponent)
  const style = styleProps ? checkStyle(styleProps, data) : null;
  className = className ? analysisClass(className, data) : null;

  props = parseObjectData(props, data, func, schema);
  if (isObjectLike(events) && Object.keys(events)?.length > 0) {
    events = Object.keys(events).reduce((prev, next) => {
      const handleFunc = func(events[next], data, schema)
      prev[next] = function () {
        handleFunc.apply(MyComponent, [...arguments, ...params])
      }
      return prev;
    }, {});
  }
  if (isObjectLike(lifeCycle) && Object.keys(lifeCycle)?.length > 0) {
    lifeCycle = Object.keys(lifeCycle).reduce((prev, next) => {
      const handleFunc = func(lifeCycle[next], data, schema)
      prev[next] = function () {
        handleFunc.apply(MyComponent, [...arguments, ...params])
      }
      return prev;
    }, {});
  }

  let ChildComponent = null;
  if (nodeContent) {
    ChildComponent = <MyComponent ref={ref} key={id} style={style} {...props} events={events} lifeCycle={lifeCycle} className={className} id={id}>
      {nodeContent}
    </MyComponent>
  } else if (schema.innerHTML) {
    function createHtml () {
      return explanContent(schema.innerHTML, data, func)
    }
    ChildComponent = <MyComponent ref={ref} key={id} style={style} {...props} events={events} lifeCycle={lifeCycle} className={className} id={id} dangerouslySetInnerHTML={{ __html: createHtml() }}>
    </MyComponent>
  } else {
    ChildComponent = <MyComponent ref={ref} key={id} style={style} {...props} events={events} lifeCycle={lifeCycle} className={className} id={id} />
  }
  return __componentType__ === 'form' ? (
    <Form.Item {...props?.formItemProps}>
      {ChildComponent}
    </Form.Item>
  ) : ChildComponent;
}

/**
 *
 * @param {object} schema
 * @param {object} data
 * @param {function} func
 * @returns {reactElement}
 */
function getRenderNode (schema, data, func) {
  if (!schema) {
    return;
  }
  /**
   * 几个需要去处理的事件：
   * 1. display
   * 2. repeat
   * 3. dataInit
   * 4.
   */
  var elm;

  // 如果有display 状态，且符合当前的显示状态的话
  if (
    (schema.display &&
      checkDisplayStatus(schema.display.replace(regHasExp, "$1"), data)) ||
    schema.display === undefined
  ) {
    let arr, nds;
    if (
      schema.isRepeat &&
      schema.dataSource &&
      Array.isArray(schema.dataSource)
    ) {
      let newData = {};
      // 在这里需要组装数据，识别 state，root，parent，item 等情况
      newData.root = schema.dataSource
      if (data.item !== undefined) {
        newData.parent = data.item;
        newData.parentIdx = data.itemIdx;
      }
      elm = [];
      schema.dataSource.forEach((item, idx) => {
        let nd = Object.assign({ item, itemIdx: idx }, newData);
        elm.push(
          getElement(schema, nd, getNodeContent(schema, nd, func, createElement), func, createElement, slotValue)
        );
      });
    } else if (
      schema.isRepeat &&
      schema.dataSource &&
      ((nds = schema.dataSource.replace(regHasExp, "$1")),
        (arr = getDataValue(nds, data, true)),
        arr.length)
    ) {
      // 如果有遍历的情况，且遍历的数据长度不为0 的话
      let newData = {};
      // 在这里需要组装数据，识别 state，root，parent，item 等情况
      regPreKey.test(nds);
      if (RegExp.$1 === "state") {
        newData.root = arr;
      }
      if (data.item !== undefined) {
        newData.parent = data.item;
        newData.parentIdx = data.itemIdx;
      }
      elm = [];
      arr.forEach((item, idx) => {
        let nd = Object.assign({ item, itemIdx: idx }, newData);
        elm.push(
          getElement(schema, nd, getNodeContent(schema, nd, func), func)
        );
      });
    } else {
      // 非遍历的默认情况
      elm = getElement(schema, data, getNodeContent(schema, data, func), func);
    }
  }
  return elm || null;
}

/**
 *
 * @param {object} schema
 * @param {object} data
 * @param {function} func
 * @description 用于完成ui的渲染，以及相关数据的绑定
 * @returns {ReactElement} 返回一整个react element 对象
 */
function uiRender (instance) {
  const { state: data, funcParser: func } = instance;
  const { uiSchema: schema } = data;
  if (!schema || !data) {
    return;
  }
  self = instance;
  // data 来自 外部reactElement 里的 state
  return getRenderNodes(schema, data, func);
}

export default uiRender;
