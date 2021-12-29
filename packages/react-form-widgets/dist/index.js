'use strict';

var React = require('react');
var antd = require('antd');
var icons = require('@ant-design/icons');

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-form-widgets'; // FIXME: 组件类型  [关于这部分我们需要抽出去，每个组件库其实都需要]

var COMPONENT_TYPE_FORM = 'form'; // form类型

var COMPONENT_TYPE_CONTAINER = 'container'; // 容器类型
 // 行类元素

var formItemProperties = function formItemProperties(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$colon = _ref.colon,
      colon = _ref$colon === void 0 ? true : _ref$colon,
      initialValue = _ref.initialValue,
      extra = _ref.extra,
      name = _ref.name,
      _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? [] : _ref$rules;
  return {
    label: {
      title: '标题',
      type: 'string',
      default: label
    },
    colon: {
      title: '是否有冒号',
      type: 'boolean',
      default: colon
    },
    initialValue: {
      title: '初始值',
      type: 'string',
      default: initialValue
    },
    extra: {
      title: '提示信息',
      type: 'string',
      default: extra
    },
    name: {
      title: '字段名',
      type: 'string',
      default: name
    },
    rules: {
      title: '校验',
      type: 'array',
      default: [],
      widget: "Rules",
      props: {
        rules: rules
      }
    }
  };
};
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
var cursor = {
  title: '鼠标手势',
  type: 'string',
  enum: ['default', 'pointer'],
  enumNames: ['default', 'pointer'],
  widget: 'select',
  default: 'default'
};

var COMPONENT_NAME = '输入框';
var ApaasInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var handleChange = function handleChange(e) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(e.target.value);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(e.target.value);
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Input, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }));
});
ApaasInput.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      allowClear: {
        title: "清除图标",
        type: "boolean",
        required: false
      },
      bordered: {
        title: "是否有边框",
        type: "boolean",
        required: false,
        default: true
      },
      maxLength: {
        title: "最大长度",
        type: "number",
        required: false
      },
      formItemProps: {
        type: "object",
        title: "表单字段配置",
        displayType: "column",
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            max: {
              label: '最大长度',
              message: '',
              type: 'string'
            },
            min: {
              label: '最小长度',
              message: '',
              type: 'string'
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
          actions: ['onChange']
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
  type: "ApaasInput",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$1 = '数字输入框';
var ApaasInputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var handleChange = function handleChange(valve) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(valve);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(valve);
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
  return /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }));
});
ApaasInputNumber.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      max: {
        title: "最大值",
        type: "number",
        required: false
      },
      min: {
        title: "最小值",
        type: "number",
        required: false
      },
      reg: {
        title: "校验规则",
        type: "string",
        description: '正则表达式组件'
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$1,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            max: {
              label: '最大值',
              message: '',
              type: 'number'
            },
            min: {
              label: '最小值',
              message: '',
              type: 'number'
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasInputNumber",
  name: COMPONENT_NAME$1,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$2 = '多行输入框';
var ApaasTextArea = /*#__PURE__*/React.forwardRef(function (props, ref) {
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

  var handleChange = function handleChange(e) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(e.target.value);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(e.target.value);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Input.TextArea, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }));
});
ApaasTextArea.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      allowClear: {
        title: "清除图标",
        type: "boolean",
        required: false
      },
      maxLength: {
        title: "最大长度",
        type: "number",
        required: false
      },
      rows: {
        title: "行数",
        type: "number",
        default: 4
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$2,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            max: {
              label: '最大长度',
              message: '',
              type: 'string'
            },
            min: {
              label: '最小长度',
              message: '',
              type: 'string'
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasTextArea",
  name: COMPONENT_NAME$2,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var ApaasForm = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, _extends({}, props, {
    ref: ref
  }));
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
        "enum": ["horizontal", "vertical", "inline"],
        "enumNames": ["水平", "垂直", "内联"],
        default: 'horizontal'
      },
      labelAlign: {
        title: "对齐方式",
        type: "string",
        required: false,
        "enum": ["left", "right"],
        "enumNames": ["左", "右"],
        default: 'right'
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
            automaticLayout: false
          },
          language: 'javascript',
          width: '300',
          height: '200',
          theme: 'vs-dark' // vs-light

        }
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
      padding: padding
    }
  },
  // 样式属性Schema
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
  type: "ApaasForm",
  name: "表单容器",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$3 = '单选框';
var ApaasRadio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      isButton = props.isButton;

  var handleChange = function handleChange(value) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Radio.Group, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }), values.map(function (value, index) {
    return isButton ? /*#__PURE__*/React__default['default'].createElement(antd.Radio.Button, {
      value: value,
      key: value
    }, names[index]) : /*#__PURE__*/React__default['default'].createElement(antd.Radio, {
      value: value,
      key: value
    }, names[index]);
  }));
});
ApaasRadio.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      values: {
        "title": "选项字段",
        "type": "array",
        "enum": ["A", "B", "C"],
        "enumNames": ["A", "B", "C"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["A", "B", "C"]
      },
      names: {
        "title": "选项名称",
        "type": "array",
        "enum": ["选项1", "选项2", "选项3"],
        "enumNames": ["选项1", "选项2", "选项3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["选项1", "选项2", "选项3"]
      },
      isButton: {
        "title": "是否是按钮",
        "type": "boolean",
        "default": false
      },
      buttonStyle: {
        "title": "风格样式",
        "type": "string",
        "default": "solid",
        "enum": ["outline", "solid"],
        "enumNames": ["描边", "填色"],
        "widget": "select"
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$3,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
      }
    }
  },
  // 基础属性Schema
  styleSchema: {
    type: 'object',
    displayType: 'column',
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasRadio",
  name: COMPONENT_NAME$3,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$4 = '下拉选择';
var ApaasSingleSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var options = props.options,
      showSearch = props.showSearch,
      filterItem = props.filterItem;

  var handleChange = function handleChange(value) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
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
  var finalOptions = React.useMemo(function () {
    try {
      return JSON.parse(options);
    } catch (e) {
      return [];
    }
  }, [options]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, props, {
    options: finalOptions,
    onChange: handleChange,
    optionFilterProp: "text",
    ref: ref,
    filterOption: showSearch ? function (input, option) {
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    } : function () {}
  }), finalOptions.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Select.Option, {
      value: item.value,
      key: item.value
    }, item.label);
  }));
});
ApaasSingleSelect.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      options: {
        title: '数据配置',
        type: 'string',
        default: '[]',
        widget: 'CodeEditor',
        props: {
          options: {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false
          },
          language: 'json',
          width: '250',
          height: '200'
        }
      },
      showSearch: {
        "title": "是否支持搜索",
        "type": "boolean",
        "default": true
      },
      filterItem: {
        "title": "过滤选项",
        "type": "string",
        "enumNames": ["按值过滤", "按文本过滤"],
        "enum": ["value", "children"],
        "widget": "select",
        "default": "children"
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$4,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasSingleSelect",
  name: COMPONENT_NAME$4,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var _excluded = ["names", "values"];
var COMPONENT_NAME$5 = '多选框';
var ApaasCheckBox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      otherProps = _objectWithoutProperties(props, _excluded);

  var handleChange = function handleChange(checkedValue) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(checkedValue);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(checkedValue);
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Checkbox.Group, _extends({}, otherProps, {
    onChange: handleChange,
    ref: ref
  }), values.map(function (value, index) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Checkbox, {
      value: value,
      key: value
    }, names[index]);
  }));
});
ApaasCheckBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      values: {
        "title": "选项字段",
        "type": "array",
        "enum": ["A", "B", "C"],
        "enumNames": ["A", "B", "C"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["A", "B", "C"]
      },
      names: {
        "title": "选项名称",
        "type": "array",
        "enum": ["选项1", "选项2", "选项3"],
        "enumNames": ["选项1", "选项2", "选项3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["选项1", "选项2", "选项3"]
      },
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$5,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            len: {
              label: '长度',
              message: '',
              type: 'array'
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasCheckBox",
  name: COMPONENT_NAME$5,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$6 = '下拉多选';
var ApaasMultSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      filterItem = props.filterItem,
      style = props.style;

  var handleChange = function handleChange(value) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, props, {
    style: style,
    mode: "multiple",
    optionFilterProp: "text",
    onChange: handleChange,
    filterOption: function filterOption(input, option) {
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    ref: ref
  }), values.map(function (value, index) {
    return /*#__PURE__*/React__default['default'].createElement(antd.Select.Option, {
      value: value,
      key: value
    }, names[index]);
  }));
});
ApaasMultSelect.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      values: {
        "title": "选项字段",
        "type": "array",
        "enum": ["A", "B", "C"],
        "enumNames": ["A", "B", "C"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["A", "B", "C"]
      },
      names: {
        "title": "选项名称",
        "type": "array",
        "enum": ["选项1", "选项2", "选项3"],
        "enumNames": ["选项1", "选项2", "选项3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["选项1", "选项2", "选项3"]
      },
      filterItem: {
        "title": "过滤选项",
        "type": "string",
        "enumNames": ["按值过滤", "按文本过滤"],
        "enum": ["value", "children"],
        "widget": "select",
        "default": "children"
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$6,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            len: {
              label: '长度',
              message: '',
              type: 'array'
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasMultSelect",
  name: COMPONENT_NAME$6,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$7 = '日期';
var ApaasDatePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var range = props.range;

  var handleChange = function handleChange(date, dataString) {
    var _props$events;

    // 双向绑定的onChange事件
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(date);
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(date, dataString);
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
  return range === 'DatePicker' ? /*#__PURE__*/React__default['default'].createElement(antd.DatePicker, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  })) : /*#__PURE__*/React__default['default'].createElement(antd.DatePicker.RangePicker, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }));
});
ApaasDatePicker.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      picker: {
        title: '选择器类型',
        type: 'string',
        default: 'date',
        enum: ['date', 'week', 'month', 'quarter', 'year'],
        enumNames: ['日', '周', '月', '季度', '年'],
        widget: 'select'
      },
      range: {
        title: '日期选择类型',
        type: 'string',
        default: 'DatePicker',
        enum: ['DatePicker', 'RangePicker'],
        enumNames: ['日期', '日期范围'],
        widget: 'select'
      },
      allowClear: {
        title: '清除图标',
        type: 'boolean',
        required: true
      },
      placeholder: {
        title: '占位符',
        type: 'string',
        default: ''
      },
      showTime: {
        title: '显示时间',
        type: 'boolean',
        required: false
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$7,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasDatePicker",
  name: COMPONENT_NAME$7,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var COMPONENT_NAME$8 = '图片上传';

var defaultBeforeUpload = function defaultBeforeUpload() {};

var getBase64 = function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};
/**
 * 1、accept 接受类型
 * 2、action 上传地址
 * 3、beforeUpload 上传之前处理
 * 4、crop 是否需要裁剪功能
 * 5、maxCount 最大上传数
 * 6、自己实现双向绑定
 */


var ApaasImageUpload = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      onChange = props.onChange,
      maxCount = props.maxCount,
      beforeUpload = props.beforeUpload,
      action = props.action,
      style = props.style;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      previewImageDetail = _useState4[0],
      setPreviewImageDetail = _useState4[1];

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

  var handleChange = function handleChange(_ref) {
    var _props$events;

    var newFileList = _ref.fileList;
    setFileList(newFileList);

    if (typeof onChange === 'function') {
      onChange(_toConsumableArray(newFileList));
    } // 用户自定义onChange事件


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(_toConsumableArray(newFileList));
    }
  };

  var handlePreview = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!file.url && !file.preview)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return getBase64(file.originFileObj);

            case 3:
              file.preview = _context.sent;

            case 4:
              setPreviewImageDetail({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleCancel = function handleCancel() {
    setPreviewImageDetail(_objectSpread2(_objectSpread2({}, previewImageDetail), {}, {
      previewVisible: false
    }));
  };

  var uploadButton = /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(icons.PlusOutlined, null), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"));

  var UploadChild = function UploadChild() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Upload, {
      action: action,
      listType: "picture-card",
      fileList: fileList,
      maxCount: maxCount,
      onChange: handleChange,
      onPreview: handlePreview,
      beforeUpload: beforeUpload || defaultBeforeUpload,
      style: style,
      ref: ref
    }, fileList.length >= maxCount ? null : uploadButton), /*#__PURE__*/React__default['default'].createElement(antd.Modal, {
      visible: previewImageDetail.previewVisible,
      title: previewImageDetail.previewTitle,
      footer: null,
      onCancel: handleCancel
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: "example",
      style: {
        width: '100%'
      },
      src: previewImageDetail.previewImage
    })));
  }; // if (crop) {
  //   return (
  //     <ImgCrop rotate>
  //       <UploadChild />
  //     </ImgCrop>
  //   )
  // }


  return /*#__PURE__*/React__default['default'].createElement(UploadChild, null);
});
ApaasImageUpload.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      accept: {
        title: "接受类型",
        type: "string",
        required: false,
        default: "",
        description: "请按照.png, .jpeg, .gif格式添写,中间,隔开"
      },
      action: {
        title: "上传地址",
        type: "string",
        required: false
      },
      beforeUpload: {
        title: "上传之前处理",
        type: "string",
        required: false,
        description: "后面使用函数表达式组件替换"
      },
      // crop: {
      //   title: "开启裁剪功能",
      //   type: "boolean",
      //   required: false,
      //   widget: "switch"
      // },
      maxCount: {
        title: "最大上传个数",
        type: "number",
        min: 1,
        default: 1,
        widget: "slider"
      },
      formItemProps: {
        type: 'object',
        title: '表单字段配置',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$8,
          rules: {
            required: {
              label: '必填',
              message: ''
            },
            validator: {
              label: '自定义函数',
              message: ''
            }
          }
        }))
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
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '绑定动作',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '生命周期',
        type: 'object',
        properties: {
          didMount: {
            title: '组件加载完成时',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '组件销毁时',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasImageUpload",
  name: COMPONENT_NAME$8,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // 是否支持在IDE中删除
  __canCopy__: true,
  // 是否支持被复制
  __canMove__: true // 是否支持被移动

};

var index = {
  ApaasInput: ApaasInput,
  ApaasInputNumber: ApaasInputNumber,
  ApaasTextArea: ApaasTextArea,
  ApaasRadio: ApaasRadio,
  ApaasCheckBox: ApaasCheckBox,
  ApaasSingleSelect: ApaasSingleSelect,
  ApaasMultSelect: ApaasMultSelect,
  ApaasDatePicker: ApaasDatePicker,
  ApaasImageUpload: ApaasImageUpload,
  ApaasForm: ApaasForm,
  showComponentList: [ApaasInput, ApaasInputNumber, ApaasTextArea, ApaasRadio, ApaasCheckBox, ApaasSingleSelect, ApaasMultSelect, ApaasDatePicker, ApaasImageUpload, ApaasForm]
};

module.exports = index;
