import { InputNumber } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";

const ApaasInputNumber = (props) => {
  return <InputNumber {...props}/>;
};

ApaasInputNumber.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      max: {
        title: "最大值",
        type: "number",
        required: false,
      },
      min: {
        title: "最小值",
        type: "number",
        required: false,
      },
      reg: {
        title: "校验规则",
        type: "string",
        description: '正则表达式组件'
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
  type: "ApaasInputNumber",
  name: "数字输入框",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
};

export default ApaasInputNumber;
