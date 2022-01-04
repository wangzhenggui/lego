import { forwardRef } from 'react';
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";
import { width, height, font, margin, padding, cursor } from '../../common/schema';
import './index.css';

const COMPONENT_NAME = "链接块"

const ApaasLinkDiv = forwardRef((props, ref) => {
  const { children, style, url, openOther } = props
  return <a style={style} href={url} target={openOther ? '_blank' : '_self'} ref={ref}>
    {
      children ? children : <div className="container">拖拽组件或者模版到这里</div>
    }
  </a>
});

export default ApaasLinkDiv;


ApaasLinkDiv.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      // TODO: 后面区分应用内页面跳转还是外部链接跳转
      // type: {
      //   "title": "按钮类型",
      //   "type": "string",
      //   "enum": [
      //     "page",
      //     "url",
      //   ],
      //   "enumNames": [
      //     "内部页面",
      //     "外部链接",
      //   ],
      //   "widget": "select",
      //   "default": ""
      // },
      url: {
        "title": "链接地址",
        "type": "string",
        "default": ""
      },
      openOther: {
        "title": "新开页面",
        "type": "boolean",
        "default": false
      }
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width, height, font, margin, padding, cursor
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
        },
        hidden: true
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
  },  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasLinkDiv",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};
