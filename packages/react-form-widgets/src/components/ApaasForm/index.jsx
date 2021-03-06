import { useEffect, forwardRef } from 'react';
import { Form as AForm } from "antd";
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER } from "../../common/constant";
import { width, height, margin, padding } from '../../common/schema';

const ApaasForm = forwardRef((props, ref) => {
  useEffect(() => {
    if (typeof props?.lifeCycle?.didMount === 'function') {
      props?.lifeCycle?.didMount()
    }
    return () => {
      if (typeof props?.lifeCycle?.unMount === 'function') {
        props?.lifeCycle?.unMount()
      }
    }
  }, [])

  return <AForm {...props} ref={ref} />;
});

ApaasForm.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      labelCol: {
        type: "object",
        displayType: "column",
        title: "label设置",
        properties: {
          span: {
            title: "span",
            type: "number",
            required: false,
            default: 0
          },
          offset: {
            title: "offset",
            type: "number",
            required: false,
            default: 0
          }
        }
      },
      wrapperCol: {
        type: "object",
        displayType: "column",
        title: "设置",
        properties: {
          span: {
            title: "span",
            type: "number",
            required: false,
            default: 0
          },
          offset: {
            title: "offset",
            type: "number",
            required: false,
            default: 0
          }
        }
      },
      initialValues: {
        title: "初始值",
        type: "string",
        required: false,
        description: "表达式组件"
      },
      layout: {
        title: "布局方式",
        type: "string",
        required: false,
        "enum": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "enumNames": [
          "水平",
          "垂直",
          "内联"
        ],
        default: 'horizontal',
      },
      labelAlign: {
        title: "对齐方式",
        type: "string",
        required: false,
        "enum": [
          "left",
          "right"
        ],
        "enumNames": [
          "左",
          "右"
        ],
        default: 'right',
      },
      onFinish: {
        title: "提交函数",
        type: "string",
        widget: "CodeEditor",
        required: false,
        description: "函数表达式组件",
        default: "// 请填写提交函数 \n function submit() {}",
        props: {
          options: {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: "line",
            automaticLayout: false,
          },
          language: 'javascript',
          width: '300',
          height: '200',
          theme: 'vs-dark', // vs-light
        }
      }
    },
  }, // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width, height, margin, padding
    }
  }, // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
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
  type: "ApaasForm",
  name: "表单容器",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasForm;
