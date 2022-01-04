import { forwardRef } from 'react';
import { Modal } from 'antd';
import DevModal from './DevModal';
import RenderFooter from './RenderFooter';
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_CONTAINER, COMPONENT_MODE_EDIT, COMPONENT_MODE_PREVIEW } from "../../common/constant";
import useLifeCycle from '../../hooks/useLifeCycle';

const ApaasModal = forwardRef((props, ref) => {
  const { children, events, mode = COMPONENT_MODE_PREVIEW, footer = {}, ...basicProps } = props
  useLifeCycle(props)
  return (
    mode === COMPONENT_MODE_EDIT ?
      <DevModal {...props} footer={<RenderFooter {...footer} {...events} />} /> :
      <Modal
        {...basicProps}
        {...events}
        ref={ref}
        footer={<RenderFooter {...footer} {...events} />}
      >
        { children }
      </Modal>
  )
});

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
      width: {
        title: '宽度',
        type: 'number',
        default: 520,
        min: 0
      },
      closable: {
        title: '是否显示关闭按钮',
        type: 'boolean',
        default: true
      },
      visible: {
        title: '显示',
        type: 'boolean',
        default: true,
      },
      footer: {
        title: '底部按钮配置',
        type: "object",
        displayType: "column",
        properties: {
          show: {
            title: '是否显示底部按钮',
            type: 'boolean',
            default: true,
          },
          align: {
            "title": "对齐方式",
            "type": "string",
            "enum": [
              "flex-start",
              "center",
              "flex-end",
            ],
            "enumNames": [
              "左",
              "中",
              "右",
            ],
            "widget": "select",
            "default": "flex-end"
          },
          permutation: {
            "title": "排列方式",
            "type": "string",
            "enum": [
              'sure,cancel',
              'cancel,sure',
              'sure',
              'cancel'
            ],
            "enumNames": [
              "确定，取消",
              "取消，确定",
              "确定",
              "取消"
            ],
            "widget": "select",
            "default": 'sure,cancel'
          },
          okText: {
            title: '确认按钮文案',
            type: 'string',
            default: '确认',
          },
          cancelText: {
            title: '取消按钮文案',
            type: 'string',
            default: '取消',
          }
        }
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
      events: {
        title: "绑定动作",
        type: "object",
        widget: "BindAction",
        required: false,
        default: {},
        props: {
          actions: ['onOk', 'onCancel'],
        },
        hidden: true
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
  type: "ApaasModal",
  name: "对话框",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __showModal__: true, // 弹框组件
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: false, // 是否支持被复制
  __canMove__: false // 是否支持被移动
};

export default ApaasModal;
