import React, { useState } from 'react';
import { Input, InputNumber, Form, Radio, Select, Checkbox, DatePicker, Upload, Modal, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

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

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-basic-widgets'; // FIXME: 组件类型  [关于这部分我们需要抽出去，每个组件库其实都需要]

var COMPONENT_TYPE_FORM = 'form'; // form类型

var COMPONENT_TYPE_CONTAINER = 'container'; // 容器类型

var COMPONENT_TYPE_BASIC = 'basic'; // 基础类型

var COMPONENT_LAYOUT_INLINE = 'inline'; // 行类元素

var formItemProperties = function formItemProperties(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$colon = _ref.colon,
      colon = _ref$colon === void 0 ? true : _ref$colon,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      placeholder = _ref.placeholder,
      initialValue = _ref.initialValue,
      extra = _ref.extra,
      name = _ref.name;
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
    required: {
      title: '必填',
      type: 'boolean',
      default: required
    },
    placeholder: {
      title: '占位符',
      type: 'string',
      default: placeholder
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
    }
  };
};
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

var COMPONENT_NAME = '输入框';

var ApaasInput = function ApaasInput(props) {
  return /*#__PURE__*/React.createElement(Input, props);
};

ApaasInput.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME
    }))
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
  type: "ApaasInput",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$1 = '数字输入框';

var ApaasInputNumber = function ApaasInputNumber(props) {
  return /*#__PURE__*/React.createElement(InputNumber, props);
};

ApaasInputNumber.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$1
    }))
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
  type: "ApaasInputNumber",
  name: COMPONENT_NAME$1,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$2 = '多行输入框';

var ApaasTextArea = function ApaasTextArea(props) {
  return /*#__PURE__*/React.createElement(Input.TextArea, props);
};

ApaasTextArea.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$2
    }))
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
  type: "ApaasTextArea",
  name: COMPONENT_NAME$2,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var ApaasForm = function ApaasForm(props) {
  return /*#__PURE__*/React.createElement(Form, props);
};

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
            default: 3
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
            default: 9
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
        widget: "CodeEditor",
        required: false,
        description: "函数表达式组件"
      }
    }
  },
  // 扩展属性Schema,用于写函数这些功能
  type: "ApaasForm",
  name: "表单容器",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER
};

var COMPONENT_NAME$3 = '单选框';

var ApaasRadio = function ApaasRadio(props) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      isButton = props.isButton;
  console.log('names', names, 'values', values, 'props', props);
  return /*#__PURE__*/React.createElement(Radio.Group, props, values.map(function (value, index) {
    return isButton ? /*#__PURE__*/React.createElement(Radio.Button, {
      value: value,
      key: value
    }, names[index]) : /*#__PURE__*/React.createElement(Radio, {
      value: value,
      key: value
    }, names[index]);
  }));
};

ApaasRadio.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$3
    }))
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
  type: "ApaasRadio",
  name: COMPONENT_NAME$3,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$4 = '下拉选择';

var ApaasSingleSelect = function ApaasSingleSelect(props) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      showSearch = props.showSearch,
      filterItem = props.filterItem;
  return /*#__PURE__*/React.createElement(Select, _extends({}, props, {
    optionFilterProp: "text",
    filterOption: showSearch ? function (input, option) {
      console.log('input', input, 'option', option);
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    } : function () {}
  }), values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: value,
      key: value
    }, names[index]);
  }));
};

ApaasSingleSelect.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$4
    }))
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
  type: "ApaasSingleSelect",
  name: COMPONENT_NAME$4,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$5 = '多选框';

var ApaasCheckBox = function ApaasCheckBox(props) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values;
  return /*#__PURE__*/React.createElement(Checkbox.Group, props, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: value,
      key: value
    }, names[index]);
  }));
};

ApaasCheckBox.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$5
    }))
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
  type: "ApaasCheckBox",
  name: COMPONENT_NAME$5,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$6 = '下拉多选';

var ApaasMultSelect = function ApaasMultSelect(props) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      filterItem = props.filterItem;
  return /*#__PURE__*/React.createElement(Select, {
    mode: "multiple",
    optionFilterProp: "text",
    filterOption: function filterOption(input, option) {
      console.log('input', input, 'option', option);
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: value,
      key: value
    }, names[index]);
  }));
};

ApaasMultSelect.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      }
    }, formItemProperties({
      label: COMPONENT_NAME$6
    }))
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
  type: "ApaasMultSelect",
  name: COMPONENT_NAME$6,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var COMPONENT_NAME$7 = '日期';

var ApaasDatePicker = function ApaasDatePicker(props) {
  var range = props.range;
  return range === 'DatePicker' ? /*#__PURE__*/React.createElement(DatePicker, props) : /*#__PURE__*/React.createElement(DatePicker.RangePicker, props);
};

ApaasDatePicker.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
      picker: {
        "title": "选择器类型",
        "type": "string",
        "default": "date",
        "enum": ["date", "week", "month", "quarter", "year"],
        "enumNames": ["日", "周", "月", "季度", "年"],
        "widget": "select"
      },
      range: {
        "title": "日期选择类型",
        "type": "string",
        "default": "DatePicker",
        "enum": ["DatePicker", "RangePicker"],
        "enumNames": ["日期", "日期范围"],
        "widget": "select"
      },
      allowClear: {
        title: "清除图标",
        type: "boolean",
        required: true
      },
      showTime: {
        title: "显示时间",
        type: "boolean",
        required: false
      }
    }, formItemProperties({
      label: COMPONENT_NAME$7
    }))
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
  type: "ApaasDatePicker",
  name: COMPONENT_NAME$7,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
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


var ApaasImageUpload = function ApaasImageUpload(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      onChange = props.onChange,
      crop = props.crop,
      maxCount = props.maxCount,
      beforeUpload = props.beforeUpload,
      action = props.action;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      previewImageDetail = _useState4[0],
      setPreviewImageDetail = _useState4[1];

  var handleChange = function handleChange(_ref) {
    var newFileList = _ref.fileList;
    setFileList(newFileList);

    if (typeof onChange === 'function') {
      onChange(_toConsumableArray(newFileList));
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

  var uploadButton = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusOutlined, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"));

  var UploadChild = function UploadChild() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Upload, {
      action: action,
      listType: "picture-card",
      fileList: fileList,
      onChange: handleChange,
      onPreview: handlePreview,
      beforeUpload: beforeUpload || defaultBeforeUpload
    }, fileList.length >= 8 ? null : uploadButton), /*#__PURE__*/React.createElement(Modal, {
      visible: previewImageDetail.previewVisible,
      title: previewImageDetail.previewTitle,
      footer: null,
      onCancel: handleCancel
    }, /*#__PURE__*/React.createElement("img", {
      alt: "example",
      style: {
        width: '100%'
      },
      src: previewImageDetail.previewImage
    })));
  };

  if (crop) {
    return /*#__PURE__*/React.createElement(ImgCrop, {
      rotate: true
    }, /*#__PURE__*/React.createElement(UploadChild, null));
  }

  return /*#__PURE__*/React.createElement(UploadChild, null);
};

ApaasImageUpload.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: _objectSpread2({
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
      crop: {
        title: "开启裁剪功能",
        type: "boolean",
        required: false,
        widget: "switch"
      },
      maxCount: {
        title: "最大上传个数",
        type: "number",
        min: 1,
        default: 1,
        widget: "slider"
      }
    }, formItemProperties({
      label: COMPONENT_NAME$8
    }))
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
  type: "ApaasImageUpload",
  name: COMPONENT_NAME$8,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM
};

var ApaasText = function ApaasText(props) {
  var content = props.content,
      styles = props.styles;
  return /*#__PURE__*/React.createElement("span", {
    style: styles
  }, content);
};

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
  type: "ApaasText",
  name: "文本",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_BASIC,
  __componentLayout__: COMPONENT_LAYOUT_INLINE,
  __isNeedCommonStyleConfig__: true // 扩展字段，是否需要通用样式

};

var ApaasBox = function ApaasBox(props) {
  var children = props.children,
      styles = props.styles;
  console.log('BOX', styles);
  return /*#__PURE__*/React.createElement("div", {
    style: styles
  }, children);
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
  type: "ApaasBox",
  // 组件类型, 需要和导出名称一致
  name: "Box",
  // 组件名称，组件展示时使用
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER
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

var css_248z = ".container {\n  background-color: #f0f0f0;\n  border: 1px dotted;\n  color: rgb(167, 177, 189);\n  /* width: 520px; */\n  max-height: 572px;\n  padding: 20px;\n  overflow: auto;\n  margin-top: 16px;\n}\n\n.titleWrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.titleName {\n  color: #333;\n  font-size: 16px;\n}";
styleInject(css_248z);

var ApaasModal = function ApaasModal(props) {
  var children = props.children,
      styles = props.styles,
      title = props.title,
      cancelText = props.cancelText,
      okText = props.okText;
  return /*#__PURE__*/React.createElement("div", {
    style: styles
  }, /*#__PURE__*/React.createElement("div", {
    className: "titleWrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "titleName"
  }, title), /*#__PURE__*/React.createElement(CloseOutlined, null)), children ? children : /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, "\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u6A21\u7248\u5230\u8FD9\u91CC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "default"
  }, cancelText), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginLeft: '16px'
    }
  }, okText)));
};

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
      visible: {
        title: '展示',
        type: 'string'
      },
      cancelText: {
        title: '取消文案',
        type: 'string',
        default: '取消'
      },
      okText: {
        title: '确定文案',
        type: 'string',
        default: '确定'
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
  type: "ApaasModal",
  name: "对话框",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER
};

var ApaasButton = function ApaasButton(props) {
  return /*#__PURE__*/React.createElement(Button, props);
};

ApaasButton.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      // TODO: 增加这俩个属性的时候，在搭建的时候触发会发生跳转
      // href: {
      //   title: "跳转地址",
      //   type: "string",
      //   required: false,
      //   default: '',
      // },
      // target: {
      //   "title": "跳转方式",
      //   "type": "string",
      //   "enum": [
      //     "_blank",
      //     "_self",
      //   ],
      //   "enumNames": [
      //     "新打开窗口",
      //     "当前窗口"
      //   ],
      //   "widget": "select",
      //   "hidden": "{{formData.href ===  ''}}",
      //   "default": ""
      // },
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
    properties: _objectSpread2({}, styleSchema)
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
  __componentType__: COMPONENT_TYPE_BASIC
};

var index = {
  ApaasText: ApaasText,
  ApaasBox: ApaasBox,
  ApaasInput: ApaasInput,
  ApaasInputNumber: ApaasInputNumber,
  ApaasTextArea: ApaasTextArea,
  ApaasRadio: ApaasRadio,
  ApaasCheckBox: ApaasCheckBox,
  ApaasSingleSelect: ApaasSingleSelect,
  ApaasMultSelect: ApaasMultSelect,
  ApaasDatePicker: ApaasDatePicker,
  ApaasImageUpload: ApaasImageUpload,
  // ApaasIterator,
  ApaasModal: ApaasModal,
  ApaasForm: ApaasForm,
  ApaasButton: ApaasButton
};

export default index;
