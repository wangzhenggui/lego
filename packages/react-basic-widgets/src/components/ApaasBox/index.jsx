import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";
import { styleSchema } from '../../common/schema';

const ApaasBox = (props) => {
  const { children, styles } = props;
  return <div style={styles}>{children}</div>;
};

ApaasBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      ...styleSchema
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
  type: "ApaasBox", // 组件类型, 需要和导出名称一致
  name: "Box", // 组件名称，组件展示时使用
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasBox;
