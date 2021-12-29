import { useEffect, forwardRef } from 'react';
import { Select as ASelect } from 'antd';
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import {
  formItemProperties,
  width,
  height,
  layout,
  margin,
  padding,
  cursor,
} from '../../common/schema';

const COMPONENT_NAME = '下拉多选'
const ApaasMultSelect = forwardRef((props, ref) => {
  const { names = [], values = [], filterItem, style } = props;
  const handleChange = (value) => {
    // 双向绑定的onChange事件
    if (typeof props?.onChange === 'function') {
      props.onChange(value);
    }
    // 用户自定义onChange事件
    if (typeof props?.events?.onChange === 'function') {
      props.events.onChange(value);
    }
  };
  useEffect(() => {
    if (typeof props?.lifeCycle?.didMount === 'function') {
      props?.lifeCycle?.didMount();
    }
    return () => {
      if (typeof props?.lifeCycle?.unMount === 'function') {
        props?.lifeCycle?.unMount();
      }
    };
  }, []);
  return (
    <ASelect
      {...props}
      style={style}
      mode="multiple"
      optionFilterProp="text"
      onChange={handleChange}
      filterOption={(input, option) => {
        return (
          option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      }}
      ref={ref}
    >
      {values.map((value, index) => (
        <ASelect.Option value={value} key={value}>
          {names[index]}
        </ASelect.Option>
      ))}
    </ASelect>
  );
});

ApaasMultSelect.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      placeholder: {
        title: '占位符',
        type: 'string',
        default: '',
      },
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
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: {
          ...formItemProperties({
            label: COMPONENT_NAME,
            rules: {
              required: {
                label: '必填',
                message: '',
              },
              len: {
                label: '长度',
                message: '',
                type: 'array',
              },
              validator: {
                label: '自定义函数',
                message: '',
              }
            }
          }),
        },
      },
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width,
      height,
      margin,
      padding,
      cursor,
    },
  }, // 样式属性Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange'],
        },
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false,
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false,
          },
        },
        default: {},
      },
    },
  }, // 扩展属性Schema,用于写函数这些功能
  type: "ApaasMultSelect",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasMultSelect;
