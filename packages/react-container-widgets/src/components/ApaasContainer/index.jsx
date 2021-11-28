import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";
import './index.css';

const COMPONENT_NAME = "容器"

const ApaasContainer = ({ children }) => {
  return children ? children : <div className="container">拖拽组件或者模版到这里</div>
};

export default ApaasContainer;


ApaasContainer.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {},
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
    }
  }, // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      didMount: {
        title: "组件加载后",
        type: "string",
        default: "",
      },
    }
  }, // 扩展属性Schema,用于写函数这些功能
  type: "ApaasContainer",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: false, // 是否支持在IDE中删除
  __canCopy__: false, // 是否支持被复制
  __canMove__: false // 是否支持被移动
};
