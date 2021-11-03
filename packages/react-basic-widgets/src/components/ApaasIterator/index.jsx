import {
  CURRENT_PACKAGE_NAME,
  COMPONENT_TYPE_CONTAINER,
} from '../../common/constant';

/**
 * TODO:  这里配置了dataSource为什么没有用？
 * 1、这里的dataSource是一个数组结构，但是我们搭建平台可能会配置一个表达式来表示，所以这里类型会有问题
 * 2、这里和Box不就是一个组件了吗？ 还是有区别的，这个组件明确表示是一个迭代器组件，表示的功能和含义是不一致的
 * @param {*} props 
 * @returns 
 */

const ApaasIterator = (props) => {
  const { children, styles } = props;
  return <div style={styles}>{children}</div>;
};

ApaasIterator.schema = {
  basicSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      dataSource: {
        title: '数据源',
        type: 'string'
      }
    },
  }, // 基础属性Schema
  styleSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
    },
  }, // 样式属性Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      didMount: {
        title: '组件加载后',
        type: 'string',
        default: '',
      },
    },
  }, // 扩展属性Schema,用于写函数这些功能
  type: 'ApaasIterator',
  name: '迭代器组件',
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
};

export default ApaasIterator;
