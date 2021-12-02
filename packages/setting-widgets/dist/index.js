'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MonacoEditor = require('react-monaco-editor');
var antd = require('antd');
var icons = require('@ant-design/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MonacoEditor__default = /*#__PURE__*/_interopDefaultLegacy(MonacoEditor);

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

var CodeEditor = function CodeEditor(props) {
  var value = props.value,
      onChange = props.onChange,
      _props$schema = props.schema,
      schema = _props$schema === void 0 ? {} : _props$schema;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/React__default['default'].createElement(MonacoEditor__default['default'], _extends({
    value: value,
    onChange: onChange
  }, schema === null || schema === void 0 ? void 0 : schema.props)));
};
//   constructor() {
//     super();
//     this.state = {
//       code: "// type your code... \n function test() {  }",
//       theme: "vs-light",
//     };
//   }
//   onChange = (newValue) => {
//     console.log("onChange", newValue); // eslint-disable-line no-console
//   };
//   editorDidMount = (editor) => {
//     // eslint-disable-next-line no-console
//     console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
//     this.editor = editor;
//   };
//   changeEditorValue = () => {
//     if (this.editor) {
//       this.editor.setValue("// code changed! \n");
//     }
//   };
//   changeBySetState = () => {
//     this.setState({ code: "// code changed by setState! \n" });
//   };
//   setDarkTheme = () => {
//     this.setState({ theme: "vs-dark" });
//   };
//   setLightTheme = () => {
//     this.setState({ theme: "vs-light" });
//   };
//   render() {
//     const { code, theme } = this.state;
//     const options = {
//       selectOnLineNumbers: true,
//       roundedSelection: false,
//       readOnly: false,
//       cursorStyle: "line",
//       automaticLayout: false,
//     };
//     return (
//       <div>
//         <div>
//           <button onClick={this.changeEditorValue} type="button">
//             Change value
//           </button>
//           <button onClick={this.changeBySetState} type="button">
//             Change by setState
//           </button>
//           <button onClick={this.setDarkTheme} type="button">
//             Set dark theme
//           </button>
//           <button onClick={this.setLightTheme} type="button">
//             Set light theme
//           </button>
//         </div>
//         <hr />
//         <MonacoEditor
//           height="400"
//           language="javascript"
//           value={code}
//           options={options}
//           onChange={this.onChange}
//           editorDidMount={this.editorDidMount}
//           theme={theme}
//         />
//       </div>
//     );
//   }
// }

var dealValues = function dealValues(values) {
  return Object.keys(values).map(function (v) {
    return {
      actionName: v,
      cb: values[v]
    };
  });
};

var dealValueOutput = function dealValueOutput(values) {
  var newValue = {};
  values.filter(function (value) {
    return value.actionName && value.cb;
  }).map(function (v) {
    return newValue[v.actionName] = v.cb;
  });
  return newValue;
};

var CodeEditor$1 = function CodeEditor(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      onChange = props.onChange,
      _props$schema = props.schema,
      schema = _props$schema === void 0 ? {} : _props$schema;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    console.log('Received values of form:', values.actions);
    var outPutValue = dealValueOutput(values.actions);
    console.log('outPutValue', outPutValue);

    if (typeof onChange === 'function') {
      onChange(outPutValue);
    }
  };

  React.useEffect(function () {
    var newValue = dealValues(value);
    form.setFieldsValue({
      actions: newValue
    });
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    form: form,
    onFinish: onFinish,
    autoComplete: "off"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Form.List, {
    name: "actions"
  }, function (fields, _ref) {
    var add = _ref.add,
        remove = _ref.remove;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, fields.map(function (field) {
      var _schema$props;

      return /*#__PURE__*/React__default['default'].createElement(antd.Row, {
        key: field.key
      }, /*#__PURE__*/React__default['default'].createElement(antd.Col, {
        span: 21
      }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, _extends({}, field, {
        label: "\u4E8B\u4EF6\u540D\u79F0",
        name: [field.name, 'actionName'],
        fieldKey: [field.fieldKey, 'actionName']
      }), /*#__PURE__*/React__default['default'].createElement(antd.Select, null, schema === null || schema === void 0 ? void 0 : (_schema$props = schema.props) === null || _schema$props === void 0 ? void 0 : _schema$props.actions.map(function (item) {
        return /*#__PURE__*/React__default['default'].createElement(antd.Select.Option, {
          key: item,
          value: item
        }, item);
      })))), /*#__PURE__*/React__default['default'].createElement(antd.Col, {
        span: 21
      }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, _extends({}, field, {
        label: "\u4E8B\u4EF6\u56DE\u8C03",
        name: [field.name, 'cb']
      }), /*#__PURE__*/React__default['default'].createElement(antd.Input, null))), /*#__PURE__*/React__default['default'].createElement(antd.Col, {
        span: 2,
        offset: 1
      }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, null, /*#__PURE__*/React__default['default'].createElement(icons.MinusCircleOutlined, {
        onClick: function onClick() {
          return remove(field.name);
        }
      }))));
    }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, null, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      },
      block: true,
      icon: /*#__PURE__*/React__default['default'].createElement(icons.PlusOutlined, null)
    }, "\u6DFB\u52A0\u52A8\u4F5C")));
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, null, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    type: "primary",
    htmlType: "submit"
  }, "\u7ED1\u5B9A")));
};

var ColProportion = function ColProportion(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange;

  var handlePaste = function handlePaste(e) {
    console.debug('阻止用户粘贴；防止布局错乱');
    e.preventDefault();
  };

  var handleChange = function handleChange(e) {
    var inputValue = e.target.value;
    var reg = /^[\d:]*$/;

    if (reg.test(inputValue)) {
      var finalValue = inputValue.split(':');
      onChange(finalValue);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    value: value.join(':'),
    onChange: handleChange,
    onPaste: handlePaste
  });
};

var Rule = function Rule(_ref) {
  var type = _ref.type,
      label = _ref.label,
      handleChange = _ref.handleChange,
      checked = _ref.checked,
      handleChangeProps = _ref.handleChangeProps,
      currentValue = _ref.currentValue;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '200px',
      border: '1px slide grey'
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      flex: '1'
    }
  }, label), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(icons.EditOutlined, {
    onClick: function onClick() {
      return setEdit(!edit);
    }
  }), /*#__PURE__*/React__default['default'].createElement(antd.Checkbox, {
    style: {
      marginLeft: '8px'
    },
    checked: checked,
    onChange: function onChange(e) {
      return handleChange(e.target.checked, type);
    }
  }))), edit && checked && /*#__PURE__*/React__default['default'].createElement("div", null, type !== 'required' && /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: label
  }, type === 'validator' ? /*#__PURE__*/React__default['default'].createElement(MonacoEditor__default['default'], {
    language: "javascript",
    width: "250",
    height: "200",
    value: currentValue[type],
    onChange: function onChange(val) {
      return handleChangeProps(currentValue, type, val);
    }
  }) : /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
    placeholder: "\u8BF7\u8F93\u5165",
    value: currentValue[type],
    onChange: function onChange(num) {
      return handleChangeProps(currentValue, type, num);
    }
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u9519\u8BEF\u63D0\u793A"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    placeholder: "\u8BF7\u8F93\u5165",
    value: currentValue['message'],
    onChange: function onChange(e) {
      return handleChangeProps(currentValue, 'message', e.target.value);
    }
  }))));
};

//   if (Array.isArray(array) && array.length > 0) {
//     const filterArr = array.filter(a => a.name === type)
//     if (filterArr.length > 0) {
//       return true
//     }
//   }
//   return false
// }

var Rules = function Rules(props) {
  var _schema$props3;

  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      onChange = props.onChange,
      schema = props.schema;

  var handleChange = function handleChange(checked, type) {
    if (checked) {
      if (type === 'required') {
        onChange([].concat(_toConsumableArray(value), [{
          required: true,
          message: ''
        }]));
      } else if (type !== 'validator') {
        var _schema$props, _ref;

        onChange([].concat(_toConsumableArray(value), [(_ref = {}, _defineProperty(_ref, type, null), _defineProperty(_ref, "message", ''), _defineProperty(_ref, "type", schema === null || schema === void 0 ? void 0 : (_schema$props = schema.props) === null || _schema$props === void 0 ? void 0 : _schema$props.rules[type]['type']), _ref)]));
      } else {
        var _schema$props2, _ref2;

        // 关于表达式
        onChange([].concat(_toConsumableArray(value), [(_ref2 = {}, _defineProperty(_ref2, type, null), _defineProperty(_ref2, "message", ''), _defineProperty(_ref2, "type", schema === null || schema === void 0 ? void 0 : (_schema$props2 = schema.props) === null || _schema$props2 === void 0 ? void 0 : _schema$props2.rules[type]['type']), _ref2)]));
      }
    } else {
      var newValue = value.filter(function (v) {
        return !v.hasOwnProperty(type);
      });
      onChange(newValue);
    }
  };

  var handleChangeProps = function handleChangeProps(currentValue, key, val) {
    var newValue = value.filter(function (v) {
      return v.type !== currentValue.type;
    });
    newValue.push(_objectSpread2(_objectSpread2({}, currentValue), {}, _defineProperty({}, key, val)));
    onChange(newValue);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", null, Object.keys(schema === null || schema === void 0 ? void 0 : (_schema$props3 = schema.props) === null || _schema$props3 === void 0 ? void 0 : _schema$props3.rules).map(function (rule) {
    var _schema$props4;

    var currentValue = value.filter(function (v) {
      return v.hasOwnProperty(rule);
    });
    return /*#__PURE__*/React__default['default'].createElement(Rule, {
      type: rule,
      label: schema === null || schema === void 0 ? void 0 : (_schema$props4 = schema.props) === null || _schema$props4 === void 0 ? void 0 : _schema$props4.rules[rule]['label'],
      handleChange: handleChange,
      handleChangeProps: handleChangeProps,
      checked: currentValue.length > 0,
      currentValue: currentValue.length > 0 ? currentValue[0] : {}
    });
  }));
};

exports.BindAction = CodeEditor$1;
exports.CodeEditor = CodeEditor;
exports.ColProportion = ColProportion;
exports.Rules = Rules;
