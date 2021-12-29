import { useEffect, forwardRef } from 'react';
import { Radio as ARadio } from 'antd';
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

const COMPONENT_NAME = '单选框'
const ApaasRadio = forwardRef((props, ref) => {
  const { names = [], values = [], isButton } = props;
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

    <ARadio.Group {...props} onChange={handleChange} ref={ref}>
      {values.map((value, index) =>
        isButton ? (
          <ARadio.Button value={value} key={value}>
            {names[index]}
          </ARadio.Button>
        ) : (
          <ARadio value={value} key={value}>
            {names[index]}
          </ARadio>
        ),
      )}
    </ARadio.Group>
  );
});

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
    type: 'object',
    displayType: 'column',
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
  type: "ApaasRadio",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasRadio;