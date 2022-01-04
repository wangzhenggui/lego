'use strict';

var React = require('react');
var antd = require('antd');
var icons = require('@ant-design/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-basic-widgets'; // FIXME: 组件类型  [关于这部分我们需要抽出去，每个组件库其实都需要]

var COMPONENT_TYPE_CONTAINER = 'container'; // 容器类型

var COMPONENT_TYPE_BASIC = 'basic'; // 基础类型

var COMPONENT_LAYOUT_INLINE = 'inline'; // 行类元素

var COMPONENT_MODE_PREVIEW = 'preview'; // 组件预览模式

var COMPONENT_MODE_EDIT = 'edit'; // 组件在IDE模式

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

var _excluded = ["content"];
var ApaasText = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      otherProps = _objectWithoutProperties(props, _excluded);

  React.useEffect(function () {
    var _props$lifeCycle;

    if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle = props.lifeCycle) === null || _props$lifeCycle === void 0 ? void 0 : _props$lifeCycle.didMount) === 'function') {
      var _props$lifeCycle2;

      props === null || props === void 0 ? void 0 : (_props$lifeCycle2 = props.lifeCycle) === null || _props$lifeCycle2 === void 0 ? void 0 : _props$lifeCycle2.didMount();
    }

    return function () {
      var _props$lifeCycle3;

      if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle3 = props.lifeCycle) === null || _props$lifeCycle3 === void 0 ? void 0 : _props$lifeCycle3.unMount) === 'function') {
        var _props$lifeCycle4;

        props === null || props === void 0 ? void 0 : (_props$lifeCycle4 = props.lifeCycle) === null || _props$lifeCycle4 === void 0 ? void 0 : _props$lifeCycle4.unMount();
      }
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, otherProps, {
    ref: ref
  }), content);
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
  type: "ApaasText",
  name: "文本",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __componentLayout__: COMPONENT_LAYOUT_INLINE,
  __isNeedCommonStyleConfig__: true,
  // 扩展字段，是否需要通用样式
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var useLifeCycle = function useLifeCycle(props) {
  React.useEffect(function () {
    var _props$lifeCycle;

    if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle = props.lifeCycle) === null || _props$lifeCycle === void 0 ? void 0 : _props$lifeCycle.didMount) === 'function') {
      var _props$lifeCycle2;

      props === null || props === void 0 ? void 0 : (_props$lifeCycle2 = props.lifeCycle) === null || _props$lifeCycle2 === void 0 ? void 0 : _props$lifeCycle2.didMount();
    }

    return function () {
      var _props$lifeCycle3;

      if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle3 = props.lifeCycle) === null || _props$lifeCycle3 === void 0 ? void 0 : _props$lifeCycle3.unMount) === 'function') {
        var _props$lifeCycle4;

        props === null || props === void 0 ? void 0 : (_props$lifeCycle4 = props.lifeCycle) === null || _props$lifeCycle4 === void 0 ? void 0 : _props$lifeCycle4.unMount();
      }
    };
  }, []);
};

var ApaasButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var handleClick = function handleClick(e) {
    var _props$events;

    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onClick) === 'function') {
      props.events.onClick(e);
    }
  };

  useLifeCycle(props);
  return /*#__PURE__*/React__default['default'].createElement(antd.Button, _extends({}, props, {
    onClick: handleClick,
    ref: ref
  }));
});
ApaasButton.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      loading: {
        title: "loading功能",
        type: "boolean",
        required: false,
        default: false
      },
      type: {
        "title": "按钮类型",
        "type": "string",
        "enum": ["primary", "ghost", "dashed", "link", "text", "default"],
        "enumNames": ["primary", "ghost", "dashed", "link", "text", "default"],
        "widget": "select",
        "default": "default"
      },
      href: {
        title: '链接地址',
        type: 'string',
        default: '',
        hidden: "{{formData.type !== 'link'}}"
      },
      target: {
        title: '跳转方式',
        type: 'string',
        "enum": ["_blank", "_self"],
        "enumNames": ["新开页面", "当前页面跳转"],
        "widget": "select"
      },
      children: {
        title: "按钮内容",
        type: "string",
        required: true,
        default: '按钮'
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
      margin: margin,
      padding: padding,
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
  type: "ApaasButton",
  name: "按钮",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var ApaasImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var widthAuto = props.widthAuto,
      heightAuto = props.heightAuto,
      width = props.width,
      height = props.height;

  var handleClick = function handleClick(e) {
    var _props$events;

    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onClick) === 'function') {
      props.events.onClick(e);
    }
  };

  React.useEffect(function () {
    var _props$lifeCycle;

    if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle = props.lifeCycle) === null || _props$lifeCycle === void 0 ? void 0 : _props$lifeCycle.didMount) === 'function') {
      var _props$lifeCycle2;

      props === null || props === void 0 ? void 0 : (_props$lifeCycle2 = props.lifeCycle) === null || _props$lifeCycle2 === void 0 ? void 0 : _props$lifeCycle2.didMount();
    }

    return function () {
      var _props$lifeCycle3;

      if (typeof (props === null || props === void 0 ? void 0 : (_props$lifeCycle3 = props.lifeCycle) === null || _props$lifeCycle3 === void 0 ? void 0 : _props$lifeCycle3.unMount) === 'function') {
        var _props$lifeCycle4;

        props === null || props === void 0 ? void 0 : (_props$lifeCycle4 = props.lifeCycle) === null || _props$lifeCycle4 === void 0 ? void 0 : _props$lifeCycle4.unMount();
      }
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(antd.Image, _extends({}, props, {
    width: widthAuto ? 'auto' : width,
    height: heightAuto ? 'auto' : height,
    onClick: handleClick,
    ref: ref
  }));
});
ApaasImage.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      src: {
        title: "图片地址",
        type: "string",
        required: false,
        default: ""
      },
      widthAuto: {
        "title": "宽度自适应",
        "type": "boolean",
        "default": false
      },
      width: {
        "title": "宽度",
        "type": "number",
        "default": 56,
        "min": 0,
        "hidden": "{{formData.widthAuto}}"
      },
      heightAuto: {
        "title": "高度自适应",
        "type": "boolean",
        "default": false
      },
      height: {
        "title": "高度",
        "type": "number",
        "default": 56,
        "min": 0,
        "hidden": "{{formData.heightAuto}}"
      },
      alt: {
        "title": "替代文本",
        "type": "string",
        "default": ""
      },
      fallback: {
        "default": "https://i.postimg.cc/QdVQ7sQN/image.png",
        hidden: true
      },
      preview: {
        title: '支持预览',
        "type": "boolean",
        "default": false
      }
    }
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {
      border: border,
      margin: margin,
      padding: padding,
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
  type: "ApaasImage",
  name: "图片",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

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

var COMPONENT_NAME = "链接块";
var ApaasLinkDiv = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      style = props.style,
      url = props.url,
      openOther = props.openOther;
  return /*#__PURE__*/React__default['default'].createElement("a", {
    style: style,
    href: url,
    target: openOther ? '_blank' : '_self',
    ref: ref
  }, children ? children : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC"));
});
ApaasLinkDiv.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      // TODO: 后面区分应用内页面跳转还是外部链接跳转
      // type: {
      //   "title": "按钮类型",
      //   "type": "string",
      //   "enum": [
      //     "page",
      //     "url",
      //   ],
      //   "enumNames": [
      //     "内部页面",
      //     "外部链接",
      //   ],
      //   "widget": "select",
      //   "default": ""
      // },
      url: {
        "title": "链接地址",
        "type": "string",
        "default": ""
      },
      openOther: {
        "title": "新开页面",
        "type": "boolean",
        "default": false
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
      font: font,
      margin: margin,
      padding: padding,
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
  type: "ApaasLinkDiv",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var css_248z$1 = ".footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n\n.container {\n  background-color: #f0f0f0;\n  border: 1px dotted;\n  color: rgb(167, 177, 189);\n  max-height: 572px;\n  padding: 20px;\n  overflow: auto;\n  margin-top: 16px;\n}\n\n.titleWrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 10px 16px;\n}\n\n.titleName {\n  color: #333;\n  font-size: 16px;\n}\n\n.footer-wrap {\n  margin-top: 4px;\n  padding: 10px 16px;\n  text-align: right;\n  background: 0 0;\n  border-top: 1px solid #f0f0f0;\n  border-radius: 0 0 2px 2px;\n}\n\n.button-list :not(:first-child) {\n  margin-left:8px\n}";
styleInject(css_248z$1);

var DevModal = function DevModal(props) {
  var children = props.children,
      title = props.title,
      width = props.width,
      closable = props.closable,
      footer = props.footer;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      width: width,
      background: '#fff'
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "titleWrap"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "titleName"
  }, title), closable && /*#__PURE__*/React__default['default'].createElement(icons.CloseOutlined, null)), children ? children : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer-wrap"
  }, footer));
};

var fn = function fn() {};

var RenderFooter = function RenderFooter(props) {
  var show = props.show,
      align = props.align,
      permutation = props.permutation,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确认' : _props$okText,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$onOk = props.onOk,
      onOk = _props$onOk === void 0 ? fn : _props$onOk,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? fn : _props$onCancel;
  if (!show) return null;

  var handleClick = function handleClick(item, e) {
    return item === 'sure' ? onOk(e) : onCancel(e);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: align
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "button-list"
  }, permutation.split(',').map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      type: item === 'sure' ? 'primary' : 'default',
      onClick: function onClick(e) {
        return handleClick(item, e);
      }
    }, item === 'sure' ? okText : cancelText);
  })));
};

var _excluded$1 = ["children", "events", "mode", "footer"];
var ApaasModal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      events = props.events,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? COMPONENT_MODE_PREVIEW : _props$mode,
      _props$footer = props.footer,
      footer = _props$footer === void 0 ? {} : _props$footer,
      basicProps = _objectWithoutProperties(props, _excluded$1);

  useLifeCycle(props);
  return mode === COMPONENT_MODE_EDIT ? /*#__PURE__*/React__default['default'].createElement(DevModal, _extends({}, props, {
    footer: /*#__PURE__*/React__default['default'].createElement(RenderFooter, _extends({}, footer, events))
  })) : /*#__PURE__*/React__default['default'].createElement(antd.Modal, _extends({}, basicProps, events, {
    ref: ref,
    footer: /*#__PURE__*/React__default['default'].createElement(RenderFooter, _extends({}, footer, events))
  }), children);
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
        default: true
      },
      footer: {
        title: '底部按钮配置',
        type: "object",
        displayType: "column",
        properties: {
          show: {
            title: '是否显示底部按钮',
            type: 'boolean',
            default: true
          },
          align: {
            "title": "对齐方式",
            "type": "string",
            "enum": ["flex-start", "center", "flex-end"],
            "enumNames": ["左", "中", "右"],
            "widget": "select",
            "default": "flex-end"
          },
          permutation: {
            "title": "排列方式",
            "type": "string",
            "enum": ['sure,cancel', 'cancel,sure', 'sure', 'cancel'],
            "enumNames": ["确定，取消", "取消，确定", "确定", "取消"],
            "widget": "select",
            "default": 'sure,cancel'
          },
          okText: {
            title: '确认按钮文案',
            type: 'string',
            default: '确认'
          },
          cancelText: {
            title: '取消按钮文案',
            type: 'string',
            default: '取消'
          }
        }
      }
    }
  },
  // 基础属性Schema
  styleSchema: {
    type: "object",
    displayType: "column",
    properties: {}
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
          actions: ['onOk', 'onCancel']
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
  type: "ApaasModal",
  name: "对话框",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __showModal__: true,
  // 弹框组件
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: false,
  // 是否支持被复制
  __canMove__: false // 是否支持被移动

};

var index = {
  ApaasText: ApaasText,
  ApaasButton: ApaasButton,
  ApaasImage: ApaasImage,
  ApaasLinkDiv: ApaasLinkDiv,
  ApaasModal: ApaasModal,
  showComponentList: [ApaasText, ApaasButton, ApaasImage, ApaasLinkDiv, ApaasModal]
};

module.exports = index;
