import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import './index.css';
// import 'antd/dist/antd.css'; // TODO: 为什么这里要引入这个样式，因为打包之后弹框的样式会被丢掉
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";

const ApaasModal = (props) => {
  const { children, styles, title, cancelText, okText } = props;
  return (
    <div style={styles}>
      <div className="titleWrap">
        <span className="titleName">{title}</span>
        <CloseOutlined />
      </div>
      {children ? children : <div className="container">拖拽组件或者模版到这里</div>}
      <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
        <Button type="default">{cancelText}</Button>
        <Button type="primary" style={{marginLeft: '16px'}}>{okText}</Button>
      </div>
    </div>
  )
};

ApaasModal.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      title: {
        title: '标题',
        type: 'string',
        default: '标题'
      },
      visible: {
        title: '展示',
        type: 'string',
      },
      cancelText: {
        title: '取消文案',
        type: 'string',
        default: '取消'
      },
      okText: {
        title: '确定文案',
        type: 'string',
        default: '确定'
      }
    },
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
  type: "ApaasModal",
  name: "对话框",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
};

export default ApaasModal;
