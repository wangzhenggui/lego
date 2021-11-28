import React, { useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Form, Row, Col, Select, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var CodeEditor = function CodeEditor(props) {
  var value = props.value,
      onChange = props.onChange,
      _props$schema = props.schema,
      schema = _props$schema === void 0 ? {} : _props$schema;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/React.createElement(MonacoEditor, _extends({
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

  var _Form$useForm = Form.useForm(),
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

  useEffect(function () {
    var newValue = dealValues(value);
    form.setFieldsValue({
      actions: newValue
    });
  }, [value]);
  return /*#__PURE__*/React.createElement(Form, {
    form: form,
    onFinish: onFinish,
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement(Form.List, {
    name: "actions"
  }, function (fields, _ref) {
    var add = _ref.add,
        remove = _ref.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (field) {
      var _schema$props;

      return /*#__PURE__*/React.createElement(Row, {
        key: field.key
      }, /*#__PURE__*/React.createElement(Col, {
        span: 21
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, field, {
        label: "\u4E8B\u4EF6\u540D\u79F0",
        name: [field.name, 'actionName'],
        fieldKey: [field.fieldKey, 'actionName']
      }), /*#__PURE__*/React.createElement(Select, null, schema === null || schema === void 0 ? void 0 : (_schema$props = schema.props) === null || _schema$props === void 0 ? void 0 : _schema$props.actions.map(function (item) {
        return /*#__PURE__*/React.createElement(Select.Option, {
          key: item,
          value: item
        }, item);
      })))), /*#__PURE__*/React.createElement(Col, {
        span: 21
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, field, {
        label: "\u4E8B\u4EF6\u56DE\u8C03",
        name: [field.name, 'cb']
      }), /*#__PURE__*/React.createElement(Input, null))), /*#__PURE__*/React.createElement(Col, {
        span: 2,
        offset: 1
      }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(MinusCircleOutlined, {
        onClick: function onClick() {
          return remove(field.name);
        }
      }))));
    }), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      },
      block: true,
      icon: /*#__PURE__*/React.createElement(PlusOutlined, null)
    }, "\u6DFB\u52A0\u52A8\u4F5C")));
  }), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    htmlType: "submit"
  }, "\u7ED1\u5B9A")));
};

var ColProportion = function ColProportion(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange;
  console.log('value', value);

  var handleChange = function handleChange(e) {
    var inputValue = e.target.value;
    var reg = /^[\d:]+$/;

    if (reg.test(inputValue)) {
      var finalValue = inputValue.split(':'); // .map(item => {
      //   const newItem = Number(item);
      //   if (isNaN(newItem) || newItem === 0) return 1;
      //   return newItem
      // })

      onChange(finalValue);
    }
  };

  return /*#__PURE__*/React.createElement(Input, {
    value: value.join(':'),
    onChange: handleChange
  });
};

export { CodeEditor$1 as BindAction, CodeEditor, ColProportion };
