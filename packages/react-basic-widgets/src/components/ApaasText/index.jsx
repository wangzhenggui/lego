import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC, COMPONENT_LAYOUT_INLINE } from "../../common/constant";

const ApaasText = (props) => {
  const { content, styles } = props;
  return <span style={styles}>{content}</span>;
};

ApaasText.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      content: {
        title: "文本内容",
        type: "string",
        required: true,
        default: "文本"
      }
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
  type: "ApaasText",
  name: "文本",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __componentLayout__: COMPONENT_LAYOUT_INLINE,
  __isNeedCommonStyleConfig__: true, // 扩展字段，是否需要通用样式
};

export default ApaasText;
