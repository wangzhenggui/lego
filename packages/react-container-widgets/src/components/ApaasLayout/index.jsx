import { Row, Col } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC } from "../../common/constant";

const COMPONENT_NAME = '布局容器';

const ApaasLayout = ({ items, children }) => {
  const childrenList = Array.isArray(children) ? children : [children]
  return (
    <Row>
      {
        items.map((item, index) => <Col span={item || '1'} key={index}>{childrenList[index]}</Col>)
      }
    </Row>
  )
}

ApaasLayout.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      "items": {
        "title": "列比例",
        "type": "array",
        "widget": "ColProportion",
        "default": ["24", "12", "12"]
      }
    }
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
  type: "ApaasLayout",
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

export default ApaasLayout;
