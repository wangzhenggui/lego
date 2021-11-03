import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";

const ApaasBox = (props) => {
  const { children, styles } = props;
  console.log('BOX', styles)
  return <div style={styles}>{children}</div>;
};

ApaasBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
    },
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
  type: "ApaasBox",
  name: "Box",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
};

export default ApaasBox;
