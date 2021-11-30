import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Checkbox, Form, InputNumber, Input } from 'antd';
import MonacoEditor from "react-monaco-editor";

const Rule = ({ type, label, handleChange, checked, handleChangeProps, currentValue }) => {
  const [edit, setEdit] = useState(false)
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', width: '200px', border: '1px slide grey'}}>
        <div style={{flex: '1'}}>{label}</div>
        <div>
          <EditOutlined onClick={() => setEdit(!edit)}/>
          <Checkbox style={{marginLeft: '8px'}} checked={checked} onChange={(e) => handleChange(e.target.checked, type)}/>
        </div>
      </div>
      {
        edit && checked && (<div>
          {
            type !== 'required' && (
              <Form.Item label={label}>
                {
                  type === 'validator' ?
                    <MonacoEditor
                      language='javascript'
                      width='250'
                      height='200'
                      value={currentValue[type]}
                      onChange={(val) => handleChangeProps(currentValue, type, val)}
                    />: <InputNumber placeholder="请输入" value={currentValue[type]} onChange={(num) => handleChangeProps(currentValue, type, num)} />
                }
              </Form.Item>
            )
          }
          <Form.Item label="错误提示">
            <Input placeholder="请输入" value={currentValue['message']} onChange={(e) => handleChangeProps(currentValue, 'message', e.target.value)}/>
          </Form.Item>
        </div>)
      }
    </>
  )
}

export default Rule;
