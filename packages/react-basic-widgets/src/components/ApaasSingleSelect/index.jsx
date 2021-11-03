import { Select } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";

const ApaasSingleSelect = (props) => {
  const { names = [], values = [], showSearch, filterItem } = props
  return (
    <Select
      {...props}
      optionFilterProp="text"
      filterOption={showSearch ? (input, option) => {
        console.log('input', input, 'option', option);
        return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0
      } : () => { }}
    >
      {
        values.map((value, index) => <Option value={value} key={value}>{names[index]}</Option>)
      }
    </Select>
  );
};

ApaasSingleSelect.schema = {
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
      showSearch: {
        "title": "是否支持搜索",
        "type": "boolean",
        "default": true
      },
      filterItem: {
        "title": "过滤选项",
        "type": "string",
        "enumNames": [
          "按值过滤",
          "按文本过滤"
        ],
        "enum": [
          "value",
          "children"
        ],
        "widget": "select",
        "default": "children"
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
  type: "ApaasSingleSelect",
  name: "下拉选择",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
};

export default ApaasSingleSelect;
