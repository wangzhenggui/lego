import { useEffect,forwardRef } from 'react';
import { Image as AImage } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC } from "../../common/constant";
import { margin, padding, border, cursor } from '../../common/schema';

const ApaasImage = forwardRef((props, ref) => {
  const { widthAuto, heightAuto, width, height } = props
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
    <AImage
      {...props}
      width={widthAuto ? 'auto' : width}
      height={heightAuto ? 'auto' : height}
      onClick={handleClick}
      ref={ref}
    />
  );
});

ApaasImage.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      src: {
        title: "图片地址",
        type: "string",
        required: false,
        default: "",
      },
      widthAuto: {
        "title": "宽度自适应",
        "type": "boolean",
        "default": false
      },
      width: {
        "title": "宽度",
        "type": "number",
        "default": 56,
        "min": 0,
        "hidden": "{{formData.widthAuto}}",
      },
      heightAuto: {
        "title": "高度自适应",
        "type": "boolean",
        "default": false
      },
      height: {
        "title": "高度",
        "type": "number",
        "default": 56,
        "min": 0,
        "hidden": "{{formData.heightAuto}}",
      },
      alt: {
        "title": "替代文本",
        "type": "string",
        "default": ""
      },
      fallback: {
        "default": "https://i.postimg.cc/QdVQ7sQN/image.png",
        hidden: true
      },
      preview: {
        title: '支持预览',
        "type": "boolean",
        "default": false
      }
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      border,
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
  type: "ApaasImage",
  name: "图片",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasImage;
