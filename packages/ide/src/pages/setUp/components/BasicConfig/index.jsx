import React, { useEffect } from 'react';
import { Result } from 'antd';
import FormRender, { useForm } from 'form-render';
import { connect } from 'dva';
import { isEmpty, cloneDeep } from 'lodash';
import { findNodeById, isRootNode } from '@/common/tools';
import { CodeEditor } from 'apaas-editor-setting-widgets';

const RenderForm = ({ currentNode, dispatch, renderTree }) => {
  const form = useForm();
  useEffect(() => {
    if (!isRootNode(currentNode?.id)) {
      // 每次当组件Id发生变化时，即表示切换组件了，我们更新我们右侧表单值
      form.setValues(currentNode?.props);
    }
  }, [currentNode?.id]);
  if (isEmpty(currentNode)) {
    return <Result status="404" title="请选中组件" />;
  }
  const { schemas, id } = currentNode;
  const copyRenderTree = cloneDeep(renderTree);
  let subTree = findNodeById([copyRenderTree], id);
  const watch = {
    // # 为全局
    '#': (val) => {
      console.log('基础配置的实时数据为：', val);
      const value = cloneDeep(val); // 此处必须要将值深拷贝一份，之前表单中的值是只读的。
      const newCurrentNode = {
        ...currentNode,
        props: { ...currentNode.props, ...value },
      };
      subTree.props = { ...currentNode.props, ...value }; // 通过索引赋值
      dispatch({
        type: 'editModal/componentsPropsChange',
        payload: {
          renderTree: copyRenderTree,
          currentNode: newCurrentNode,
        },
      });
    },
  };
  return (
    <FormRender
      form={form}
      schema={JSON.parse(JSON.stringify(schemas?.basicSchema || {}))}
      watch={watch}
      widgets={{ CodeEditor }}
    />
  );
};

export default connect((state) => ({
  currentNode: state?.editModal?.currentNode,
  renderTree: state?.editModal?.renderTree,
}))(RenderForm);
