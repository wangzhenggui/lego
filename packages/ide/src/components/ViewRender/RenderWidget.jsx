import React from 'react';
import { Form } from 'antd';
import { get, set } from 'lodash';
import { isFormType, isContainerType, calcNewStylesByProps } from '@/common/tools';
import { ROOT_NODE_FLAG } from '@/common/constant';

const RenderWidget = ({ componentName, schemas, id, props, styleProps, children }) => {
  // 根节点
  if (id === ROOT_NODE_FLAG) {
    return <div>{children}</div>;
  }
  let Component = () => null;
  if (schemas?.__source__) {
    // FIXME: 这里不能将包的名字通过变量的方式导入，只能静态导入，编译时就需要确定,需要想想办法怎么样将自定义组件导入
    Component = get(
      require(`@apaas-lego/react-basic-widgets/dist/index`),
      `${componentName}`,
    );
  }
  // const styles = calcNewStylesByProps(styleProps); // 处理样式
  const styles = styleProps;
  if (isContainerType(schemas.__componentType__)) {
    return (
      <Component {...props} style={styles}>
        {children}
      </Component>
    );
  }
  if (isFormType(schemas?.__componentType__)) {
    return (
      <Form.Item {...props} style={styles}>
        <Component {...props} />
      </Form.Item>
    );
  }
  return children ? (
    <Component {...props} styles={styles}>{children}</Component>
  ) : (
      <Component {...props} styles={styles}/>
  );
};

export default RenderWidget;
