import { Radio } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import { formItemProperties, styleSchema } from '../../common/schema';

const COMPONENT_NAME = '单选框'
const ApaasRadio = (props) => {
  const { names = [], values = [], isButton } = props
  console.log('names', names, 'values', values, 'props', props);
  return (
    <Radio.Group {...props}>
      {
        values.map((value, index) => isButton ? <Radio.Button value={value} key={value}>{names[index]}</Radio.Button> : <Radio value={value} key={value}>{names[index]}</Radio>)
      }
    </Radio.Group>
  );
};

ApaasRadio.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      values: {
        "title": "选项字段",
        "type": "array",
        "enum": [
          "A",
          "B",
          "C"
        ],
        "enumNames": [
          "A",
          "B",
          "C"
        ],
        "widget": "select",
        "props": {
           "mode": "tags"
        },
        "default": ["A", "B", "C"]
      },
      names: {
        "title": "选项名称",
        "type": "array",
        "enum": [
          "选项1",
          "选项2",
          "选项3"
        ],
        "enumNames": [
          "选项1",
          "选项2",
          "选项3"
        ],
        "widget": "select",
        "props": {
           "mode": "tags"
        },
        "default": ["选项1", "选项2", "选项3"]
      },
      isButton: {
        "title": "是否是按钮",
        "type": "boolean",
        "default": false
      },
      buttonStyle: {
        "title": "风格样式",
        "type": "string",
        "default": "solid",
        "enum": [
          "outline",
          "solid",
        ],
        "enumNames": [
          "描边",
          "填色"
        ],
        "widget": "select"
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
  type: "ApaasRadio",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasRadio;
