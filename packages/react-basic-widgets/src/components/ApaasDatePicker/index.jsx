import { DatePicker } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import { formItemProperties, styleSchema } from '../../common/schema';

const COMPONENT_NAME = '日期'
const ApaasDatePicker = (props) => {
  const { range } = props
  return range === 'DatePicker' ? <DatePicker {...props}/> : <DatePicker.RangePicker {...props}/>;
};

ApaasDatePicker.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      picker: {
        "title": "选择器类型",
        "type": "string",
        "default": "date",
        "enum": [
          "date",
          "week",
          "month",
          "quarter",
          "year",
        ],
        "enumNames": [
          "日",
          "周",
          "月",
          "季度",
          "年"
        ],
        "widget": "select"
      },
      range: {
        "title": "日期选择类型",
        "type": "string",
        "default": "DatePicker",
        "enum": [
          "DatePicker",
          "RangePicker",
        ],
        "enumNames": [
          "日期",
          "日期范围",
        ],
        "widget": "select"
      },
      allowClear: {
        title: "清除图标",
        type: "boolean",
        required: true,
      },
      showTime: {
        title: "显示时间",
        type: "boolean",
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
  type: "ApaasDatePicker",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
};

export default ApaasDatePicker;
