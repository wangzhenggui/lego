import { CloseOutlined } from '@ant-design/icons'
import './index.css'

const DevModal = (props) => {
  const { children, title, width, closable, footer } = props;
  return (
    <div style={{ width, background: '#fff'}}>
      <div className="titleWrap">
        <span className="titleName">{title}</span>
        { closable && <CloseOutlined /> }
      </div>
      {children ? children : <div className="container">拖拽组件或者模版到这里</div>}
      <div className="footer-wrap">
        { footer }
      </div>
    </div>
  )
};

export default DevModal;
