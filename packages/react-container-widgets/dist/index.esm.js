import React from 'react';
import { Tabs, Row, Col } from 'antd';

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-container-widgets'; // FIXME: 组件类型  [关于这部分我们需要抽出去，每个组件库其实都需要]

var COMPONENT_TYPE_CONTAINER = 'container'; // 容器类型

var COMPONENT_TYPE_BASIC = 'basic'; // 基础类型
 // 行类元素

var width = {
  title: '宽度',
  type: 'string',
  required: false
};
var height = {
  title: '高度',
  type: 'string',
  required: false
};
var background = {
  title: '背景色',
  type: 'string'
};
var layout = {
  type: 'object',
  title: '布局',
  properties: {
    display: {
      "title": "布局",
      "type": "string",
      "enum": ["flex", "block", "inline-block"],
      "enumNames": ["flex", "block", "inline-block"],
      "widget": "select",
      "default": "block"
    },
    flexDirection: {
      "title": "弹性布局方向",
      "type": "string",
      "enum": ["row", "column"],
      "enumNames": ["横向", "纵向"],
      "default": "row",
      "hidden": "{{formData.layout.display !== 'flex'}}"
    },
    justifyContent: {
      "title": "主轴方向",
      "type": "string",
      "enum": ["flex-start", "flex-end", "center", "space-around", "space-between"],
      "enumNames": ["flex-start", "flex-end", "center", "space-around", "space-between"],
      "default": "center",
      "hidden": "{{formData.layout.display !== 'flex'}}"
    },
    alignItems: {
      "title": "侧轴方向",
      "type": "string",
      "enum": ["flex-start", "flex-end", "center", "space-around", "space-between"],
      "enumNames": ["flex-start", "flex-end", "center", "space-around", "space-between"],
      "default": "center",
      "hidden": "{{formData.layout.display !== 'flex'}}"
    }
  }
};
var font = {
  type: 'object',
  title: '文字',
  properties: {
    fontFamily: {
      title: '字体',
      description: 'font-family',
      type: 'string',
      required: false
    },
    fontWidget: {
      type: 'string',
      description: 'font-widget',
      title: '字重',
      default: 'normal',
      widget: 'select',
      enum: ['lighter', 'normal', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold', 'bolder'],
      enumNames: ['lighter', 'normal', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold', 'bolder']
    },
    fontStyle: {
      type: 'string',
      title: '样式',
      description: 'font-style',
      default: 'normal',
      widget: 'select',
      enum: ['normal', 'italic'],
      enumNames: ['正常', '斜体']
    },
    fontSize: {
      title: '字体大小',
      description: 'font-size',
      type: 'number',
      required: false,
      default: 14
    },
    lineHeight: {
      title: '行高',
      description: 'line-height',
      type: 'string',
      required: false,
      default: '21px'
    },
    color: {
      title: '字体颜色',
      description: 'color',
      type: 'string',
      format: 'color',
      default: '#000'
    },
    textAlign: {
      type: 'string',
      description: 'text-align',
      title: '对齐方式',
      default: 'left',
      enum: ['left', 'center', 'right', 'justify'],
      enumNames: ['left', 'center', 'right', 'justify']
    },
    textDecorationLine: {
      type: 'string',
      description: 'text-decoration-line',
      title: '装饰线',
      default: 'none',
      enum: ['none', 'underline', 'line-through'],
      enumNames: ['none', '下划线', '横划线']
    }
  }
};
var margin = {
  type: 'object',
  title: '外边距',
  properties: {
    marginTop: {
      title: '上边距',
      type: 'string'
    },
    marginRight: {
      title: '右边距',
      type: 'string'
    },
    marginBottom: {
      title: '下边距',
      type: 'string'
    },
    marginLeft: {
      title: '左边距',
      type: 'string'
    }
  }
};
var padding = {
  type: 'object',
  title: '内边距',
  properties: {
    paddingTop: {
      title: '上边距',
      type: 'string'
    },
    paddingRight: {
      title: '右边距',
      type: 'string'
    },
    paddingBottom: {
      title: '下边距',
      type: 'string'
    },
    paddingLeft: {
      title: '左边距',
      type: 'string'
    }
  }
};
var border = {
  type: 'object',
  title: '边框',
  properties: {
    borderStyle: {
      type: 'string',
      title: '线形',
      default: 'none',
      widget: 'select',
      enum: ['none', 'solid', 'dashed', 'dotted'],
      enumNames: ['无', '实线', '虚线', '点线']
    },
    borderWidth: {
      type: 'string',
      title: '线宽'
    },
    borderColor: {
      type: 'string',
      title: '颜色',
      widget: 'color'
    },
    borderRadius: {
      type: 'string',
      title: '圆角'
    }
  }
};
var cursor = {
  title: '鼠标手势',
  type: 'string',
  enum: ['default', 'pointer'],
  enumNames: ['default', 'pointer'],
  widget: 'select',
  default: 'default'
};

var TabPane = Tabs.TabPane;
var COMPONENT_NAME = '选项卡';

var ApaasTabs = function ApaasTabs(_ref) {
  var items = _ref.items,
      children = _ref.children;
  var childrenList = Array.isArray(children) ? children : [children];
  return /*#__PURE__*/React.createElement(Tabs, null, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item,
      key: index
    }, childrenList[index]);
  }));
};

ApaasTabs.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      "items": {
        "title": "标签项",
        "type": "array",
        "enum": ["选项一", "选项二"],
        "enumNames": ["选项一", "选项二"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["选项一", "选项二"]
      }
    }
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width: width,
      height: height,
      background: background,
      layout: layout,
      font: font,
      margin: margin,
      padding: padding,
      border: border,
      cursor: cursor
    }
  },
  // 样式属性Schema
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
          actions: ['onClick']
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
            required: false
          },
          unMount: {
            title: "组件销毁时",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasTabs",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true,
  // 是否支持被移动
  __subContainer__: {
    // 子容器属性配置
    packageName: CURRENT_PACKAGE_NAME,
    slotContainerName: "ApaasContainer",
    lengthDependencies: function lengthDependencies(props) {
      var _props$items;

      return props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.length;
    } // data 是当前schema的值，items是上面schema的字段

  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container {\n  background-color: #f0f0f0;\n  border: 1px dotted;\n  color: rgb(167, 177, 189);\n  max-height: 572px;\n  padding: 20px;\n  overflow: auto;\n  margin-top: 16px;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}";
styleInject(css_248z);

var COMPONENT_NAME$1 = "容器";

var ApaasContainer = function ApaasContainer(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children ? children : /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC"));
};
ApaasContainer.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {}
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width: width,
      height: height,
      background: background,
      layout: layout,
      font: font,
      margin: margin,
      padding: padding,
      border: border,
      cursor: cursor
    }
  },
  // 样式属性Schema
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
          actions: ['onClick']
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
            required: false
          },
          unMount: {
            title: "组件销毁时",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasContainer",
  name: COMPONENT_NAME$1,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: false,
  // 是否支持在IDE中删除
  __canCopy__: false,
  // 是否支持被复制
  __canMove__: false // 是否支持被移动

};

var COMPONENT_NAME$2 = '布局容器';

var ApaasLayout = function ApaasLayout(props) {
  var items = props.items,
      gutter = props.gutter,
      children = props.children,
      style = props.style;
  var childrenList = Array.isArray(children) ? children : [children];
  return /*#__PURE__*/React.createElement(Row, {
    style: style,
    gutter: gutter
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Col, {
      span: item || '1',
      key: index
    }, childrenList[index]);
  }));
};

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
      },
      "gutter": {
        "title": "间距",
        "description": "第一个行间距，第二个列间距",
        "type": "array",
        "widget": "Gutter",
        "default": [0, 0]
      }
    }
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width: width,
      height: height,
      background: background,
      font: font,
      margin: margin,
      padding: padding,
      border: border,
      cursor: cursor
    }
  },
  // 样式属性Schema
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
          actions: ['onClick']
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
            required: false
          },
          unMount: {
            title: "组件销毁时",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasLayout",
  name: COMPONENT_NAME$2,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true,
  // 是否支持被移动
  __subContainer__: {
    // 子容器属性配置
    packageName: CURRENT_PACKAGE_NAME,
    slotContainerName: "ApaasContainer",
    lengthDependencies: function lengthDependencies(props) {
      var _props$items;

      return props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.length;
    } // data 是当前schema的值，items是上面schema的字段

  }
};

var css_248z$1 = ".container {\n  background-color: #f0f0f0;\n  border: 1px dotted;\n  color: rgb(167, 177, 189);\n  max-height: 572px;\n  padding: 20px;\n  overflow: auto;\n  margin-top: 16px;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}";
styleInject(css_248z$1);

var COMPONENT_NAME$3 = "普通容器";

var ApaasBox = function ApaasBox(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children ? children : /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC"));
};
ApaasBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {}
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      width: width,
      height: height,
      background: background,
      layout: layout,
      font: font,
      margin: margin,
      padding: padding,
      border: border,
      cursor: cursor
    }
  },
  // 样式属性Schema
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
          actions: ['onClick']
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
            required: false
          },
          unMount: {
            title: "组件销毁时",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasBox",
  name: COMPONENT_NAME$3,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var index = {
  ApaasTabs: ApaasTabs,
  ApaasContainer: ApaasContainer,
  ApaasLayout: ApaasLayout,
  ApaasBox: ApaasBox,
  showComponentList: [ApaasTabs, ApaasLayout, ApaasBox]
};

export default index;
