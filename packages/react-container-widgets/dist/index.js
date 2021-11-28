'use strict';

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-container-widgets'; // FIXME: 组件类型  [关于这部分我们需要抽出去，每个组件库其实都需要]

var COMPONENT_TYPE_CONTAINER = 'container'; // 容器类型

var COMPONENT_TYPE_BASIC = 'basic'; // 基础类型
 // 行类元素

var styleSchema = {
  width: {
    title: '宽度',
    type: 'string',
    required: false
  },
  height: {
    title: '高度',
    type: 'string',
    required: false
  },
  background: {
    title: '背景色',
    type: 'string'
  },
  layout: {
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
  },
  font: {
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
  },
  margin: {
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
  },
  padding: {
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
  },
  border: {
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
  },
  cursor: {
    title: '鼠标手势',
    type: 'string',
    enum: ['default', 'pointer'],
    enumNames: ['default', 'pointer'],
    widget: 'select',
    default: 'default'
  }
};

var TabPane = antd.Tabs.TabPane;
var COMPONENT_NAME = '选项卡';

var ApaasTabs = function ApaasTabs(_ref) {
  var items = _ref.items,
      children = _ref.children;
  var childrenList = Array.isArray(children) ? children : [children];
  return /*#__PURE__*/React__default['default'].createElement(antd.Tabs, null, items.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(TabPane, {
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
    properties: _objectSpread2({}, styleSchema)
  },
  // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      didMount: {
        title: "组件加载后",
        type: "string",
        default: ""
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
  var children = _ref.children;
  return children ? children : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC");
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
    properties: {}
  },
  // 样式属性Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      didMount: {
        title: "组件加载后",
        type: "string",
        default: ""
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

var ApaasLayout = function ApaasLayout(_ref) {
  var items = _ref.items,
      children = _ref.children;
  var childrenList = Array.isArray(children) ? children : [children];
  return /*#__PURE__*/React__default['default'].createElement(antd.Row, null, items.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Col, {
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
      didMount: {
        title: "组件加载后",
        type: "string",
        default: ""
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

var index = {
  ApaasTabs: ApaasTabs,
  ApaasContainer: ApaasContainer,
  ApaasLayout: ApaasLayout,
  showComponentList: [ApaasTabs, ApaasLayout]
};

module.exports = index;
