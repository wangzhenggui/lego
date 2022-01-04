import { useEffect, forwardRef } from 'react';
import { CURRENT_PACKAGE_NAME, COMPONENT_TYPE_BASIC, COMPONENT_LAYOUT_INLINE } from "../../common/constant";
import { width, height, background, layout, font, margin, padding, border, cursor } from '../../common/schema';

const ApaasText = forwardRef((props, ref) => {
  const { content, ...otherProps } = props;
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
  return <span {...otherProps} ref={ref}>{content}</span>;
});

ApaasText.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      content: {
        title: "文本内容",
        type: "string",
        required: true,
        default: "文本"
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
  type: "ApaasText",
  name: "文本",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __componentLayout__: COMPONENT_LAYOUT_INLINE,
  __isNeedCommonStyleConfig__: true, // 扩展字段，是否需要通用样式
  __canDelete__: true, // 是否支持在IDE中删除
  __canCopy__: true, // 是否支持被复制
  __canMove__: true // 是否支持被移动
};

export default ApaasText;
