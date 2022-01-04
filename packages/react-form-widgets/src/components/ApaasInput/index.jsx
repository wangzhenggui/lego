import { useEffect, forwardRef } from 'react';
import { Input as AInput } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_FORM } from "../../common/constant";
import { formItemProperties, width, height, layout, margin, padding, cursor } from '../../common/schema';

const COMPONENT_NAME = '输入框';

const ApaasInput = forwardRef((props, ref) => {
  const handleChange = (e) => {
    // 双向绑定的onChange事件
    if (typeof props?.onChange === 'function') {
      props.onChange(e.target.value);
    }
    // 用户自定义onChange事件
    if (typeof props?.events?.onChange === 'function') {
      props.events.onChange(e.target.value)
    }
  }
  useEffect(() => {
    if (typeof props?.lifeCycle?.didMount === 'function') {
      props?.lifeCycle?.didMount()
    }
    return () => {
      if (typeof props?.lifeCycle?.unMount === 'function') {
        props?.lifeCycle?.unMount()
      }
    }
  }, [])

  return <AInput {...props} onChange={handleChange} ref={ref} />;
});

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
      formItemProps: {
        type: "object",
        title: "表单字段配置",
        displayType: "column",
        properties: {
          ...formItemProperties({
            label: COMPONENT_NAME,
            rules: {
              required: {
                label: '必填',
                message: '',
              },
              max: {
                label: '最大长度',
                message: '',
                type: 'string',
              },
              min: {
                label: '最小长度',
                message: '',
                type: 'string',
              },
              validator: {
                label: '自定义函数',
                message: '',
              }
            }
          })
        }
      },
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width, height, margin, padding, cursor
    }
  }, // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      events: {
        title: "绑定动作",
        type: "object",
        widget: "BindAction",
        required: false,
        default: {},
        props: {
          actions: ['onChange'],
        }
      },
      lifeCycle: {
        title: "生命周期",
        type: "object",
        properties: {
          didMount: {
            title: "组件加载完成时",
            description: 'didMount',
            type: "string",
            required: false,
          },
          unMount: {
            title: "组件销毁时",
            description: 'unMount',
            type: "string",
            required: false,
          },
        },
        default: {},
      }
    }
  }, // 扩展属性Schema,用于写函数这些功能
  type: "ApaasInput",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasInput;
