import { Tabs } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC } from "../../common/constant";
import { width, height, background, layout, font, margin, padding, border, cursor } from '../../common/schema';

const { TabPane } = Tabs

const COMPONENT_NAME = '选项卡';

const ApaasTabs = ({ items, children }) => {
  const childrenList = Array.isArray(children) ? children : [children]
  return (
    <Tabs>
      {
        items.map((item, index) => <TabPane tab={item} key={index}>{childrenList[index]}</TabPane>)
      }
    </Tabs>
  )
}

ApaasTabs.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      "items": {
        "title": "标签项",
        "type": "array",
        "enum": [
          "选项一",
          "选项二",
        ],
        "enumNames": [
          "选项一",
          "选项二",
        ],
        "widget": "select",
        "props": {
           "mode": "tags"
        },
        "default": ["选项一", "选项二"]
      }
    },
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
  }, // 扩展属性Schema,用于写函数这些功能
  type: "ApaasTabs",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true, // 是否支持被移动
  __subContainer__: { // 子容器属性配置
    packageName: CURRENT_PACKAGE_NAME,
    slotContainerName: "ApaasContainer",
    lengthDependencies: (props) => props?.items?.length, // data 是当前schema的值，items是上面schema的字段
  }
};

export default ApaasTabs;
