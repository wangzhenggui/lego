import { Button } from 'antd';
import './index.css'

const fn = () => { }

const RenderFooter = (props) => {
  const { show, align, permutation, okText = '确认', cancelText = '取消', onOk = fn, onCancel = fn } = props
  if (!show) return null;

  const handleClick = (item, e) => item === 'sure' ? onOk(e) : onCancel(e)

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: align }}>
      <div className="button-list">
        {
          permutation.split(',').map(item => {
            return (
              <Button
                type={item === 'sure' ? 'primary' : 'default'}
                onClick={(e) => handleClick(item, e)}
              >{
                item === 'sure' ? okText : cancelText
              }</Button>
            )
          })
        }
      </div>
    </div>
  )
};

export default RenderFooter;
