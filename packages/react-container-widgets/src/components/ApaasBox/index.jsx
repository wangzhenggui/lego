import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";
import { width, height, background, layout, font, margin, padding, border, cursor } from '../../common/schema';
import './index.css';

const COMPONENT_NAME = "普通容器"

const ApaasBox = ({ children, style }) => {
  return <div style={style}>
    {
      children ? children : <div className="container">拖拽组件或者模版到这里</div>
    }
  </div>
};

export default ApaasBox;


ApaasBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {},
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width, height, background, layout, font, margin, padding, border, cursor
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
  },  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasBox",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};
