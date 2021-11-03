import { Input } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import { formItemProperties, styleSchema } from '../../common/schema';

const COMPONENT_NAME = '输入框';

const ApaasInput = (props) => {
  return <Input {...props}/>;
};

ApaasInput.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      allowClear: {
        title: "清除图标",
        type: "boolean",
        required: false,
      },
      bordered: {
        title: "是否有边框",
        type: "boolean",
        required: false,
        default: true,
      },
      maxLength: {
        title: "最大长度",
        type: "number",
        required: false,
      },
      ...formItemProperties({label: COMPONENT_NAME})
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      ...styleSchema
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
  type: "ApaasInput",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
};

export default ApaasInput;
