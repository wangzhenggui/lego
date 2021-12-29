import { useEffect,forwardRef } from 'react';
import { Button as AButton } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC } from "../../common/constant";
import { width, height, margin, padding, cursor } from '../../common/schema';

const ApaasButton = forwardRef((props, ref) => {
  const handleClick = (e) => {
    if (typeof props?.events?.onClick === 'function') {
      props.events.onClick(e)
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
  return (
    <AButton {...props} onClick={handleClick} ref={ref}/>
  );
});

ApaasButton.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      loading: {
        title: "loading功能",
        type: "boolean",
        required: false,
        default: false,
      },
      type: {
        "title": "按钮类型",
        "type": "string",
        "enum": [
          "primary",
          "ghost",
          "dashed",
          "link",
          "text",
          "default"
        ],
        "enumNames": [
          "primary",
          "ghost",
          "dashed",
          "link",
          "text",
          "default"
        ],
        "widget": "select",
        "default": "default"
      },
      children: {
        title: "按钮内容",
        type: "string",
        required: true,
        default: '按钮',
      }
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
      cursor
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
          actions: ['onClick'],
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
  type: "ApaasButton",
  name: "按钮",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasButton;
