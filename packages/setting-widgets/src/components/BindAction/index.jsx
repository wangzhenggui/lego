import { useEffect } from 'react';
import { Form, Select, Row, Col, Input, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const dealValues = (values) => {
  return Object.keys(values).map((v) => ({
    actionName: v,
    cb: values[v],
  }));
};

const dealValueOutput = (values) => {
  const newValue = {};
  values
    .filter((value) => value.actionName && value.cb)
    .map((v) => (newValue[v.actionName] = v.cb));
  return newValue;
};

const CodeEditor = (props) => {
  const { value = {}, onChange, schema = {} } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form:', values.actions);
    const outPutValue = dealValueOutput(values.actions);
    console.log('outPutValue', outPutValue)
    if (typeof onChange === 'function') {
      onChange(outPutValue);
    }
  };
  useEffect(() => {
    const newValue = dealValues(value);
    form.setFieldsValue({
      actions: newValue,
    });
  }, [value]);
  return (
    <Form form={form} onFinish={onFinish} autoComplete="off">
      <Form.List name="actions">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Row key={field.key}>
                <Col span={21}>
                  <Form.Item
                    {...field}
                    label="事件名称"
                    name={[field.name, 'actionName']}
                    fieldKey={[field.fieldKey, 'actionName']}
                  >
                    <Select>
                      {schema?.props?.actions.map((item) => (
                        <Select.Option key={item} value={item}>
                          {item}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={21}>
                  <Form.Item
                    {...field}
                    label="事件回调"
                    name={[field.name, 'cb']}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={2} offset={1}>
                  <Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Form.Item>
                </Col>
              </Row>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                添加动作
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          绑定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CodeEditor;
