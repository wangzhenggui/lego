import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { Input, InputNumber, Form, Radio, Select, Checkbox, DatePicker, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

var CURRENT_PACKAGE_NAME = '@apaas-lego/react-form-widgets'; // FIXME: ????????????  [?????????????????????????????????????????????????????????????????????]

var COMPONENT_TYPE_FORM = 'form'; // form??????

var COMPONENT_TYPE_CONTAINER = 'container'; // ????????????
 // ????????????

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
      title: '??????',
      type: 'string',
      default: label
    },
    colon: {
      title: '???????????????',
      type: 'boolean',
      default: colon
    },
    initialValue: {
      title: '?????????',
      type: 'string',
      default: initialValue
    },
    extra: {
      title: '????????????',
      type: 'string',
      default: extra
    },
    name: {
      title: '?????????',
      type: 'string',
      default: name
    },
    rules: {
      title: '??????',
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
  title: '??????',
  type: 'string',
  required: false
};
var height = {
  title: '??????',
  type: 'string',
  required: false
};
var margin = {
  type: 'object',
  title: '?????????',
  properties: {
    marginTop: {
      title: '?????????',
      type: 'string'
    },
    marginRight: {
      title: '?????????',
      type: 'string'
    },
    marginBottom: {
      title: '?????????',
      type: 'string'
    },
    marginLeft: {
      title: '?????????',
      type: 'string'
    }
  }
};
var padding = {
  type: 'object',
  title: '?????????',
  properties: {
    paddingTop: {
      title: '?????????',
      type: 'string'
    },
    paddingRight: {
      title: '?????????',
      type: 'string'
    },
    paddingBottom: {
      title: '?????????',
      type: 'string'
    },
    paddingLeft: {
      title: '?????????',
      type: 'string'
    }
  }
};
var cursor = {
  title: '????????????',
  type: 'string',
  enum: ['default', 'pointer'],
  enumNames: ['default', 'pointer'],
  widget: 'select',
  default: 'default'
};

var COMPONENT_NAME = '?????????';
var ApaasInput = /*#__PURE__*/forwardRef(function (props, ref) {
  var handleChange = function handleChange(e) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(e.target.value);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(e.target.value);
    }
  };

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
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
        title: "????????????",
        type: "boolean",
        required: false
      },
      bordered: {
        title: "???????????????",
        type: "boolean",
        required: false,
        default: true
      },
      maxLength: {
        title: "????????????",
        type: "number",
        required: false
      },
      formItemProps: {
        type: "object",
        title: "??????????????????",
        displayType: "column",
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            max: {
              label: '????????????',
              message: '',
              type: 'string'
            },
            min: {
              label: '????????????',
              message: '',
              type: 'string'
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      events: {
        title: "????????????",
        type: "object",
        widget: "BindAction",
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: "????????????",
        type: "object",
        properties: {
          didMount: {
            title: "?????????????????????",
            description: 'didMount',
            type: "string",
            required: false
          },
          unMount: {
            title: "???????????????",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasInput",
  name: COMPONENT_NAME,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$1 = '???????????????';
var ApaasInputNumber = /*#__PURE__*/forwardRef(function (props, ref) {
  var handleChange = function handleChange(valve) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(valve);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(valve);
    }
  };

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(InputNumber, _extends({}, props, {
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
        title: '?????????',
        type: 'string',
        default: ''
      },
      max: {
        title: "?????????",
        type: "number",
        required: false
      },
      min: {
        title: "?????????",
        type: "number",
        required: false
      },
      reg: {
        title: "????????????",
        type: "string",
        description: '?????????????????????'
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$1,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            max: {
              label: '?????????',
              message: '',
              type: 'number'
            },
            min: {
              label: '?????????',
              message: '',
              type: 'number'
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasInputNumber",
  name: COMPONENT_NAME$1,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$2 = '???????????????';
var ApaasTextArea = /*#__PURE__*/forwardRef(function (props, ref) {
  useEffect(function () {
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

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(e.target.value);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(e.target.value);
    }
  };

  return /*#__PURE__*/React.createElement(Input.TextArea, _extends({}, props, {
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
        title: '?????????',
        type: 'string',
        default: ''
      },
      allowClear: {
        title: "????????????",
        type: "boolean",
        required: false
      },
      maxLength: {
        title: "????????????",
        type: "number",
        required: false
      },
      rows: {
        title: "??????",
        type: "number",
        default: 4
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$2,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            max: {
              label: '????????????',
              message: '',
              type: 'string'
            },
            min: {
              label: '????????????',
              message: '',
              type: 'string'
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasTextArea",
  name: COMPONENT_NAME$2,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var ApaasForm = /*#__PURE__*/forwardRef(function (props, ref) {
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Form, _extends({}, props, {
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
        title: "label??????",
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
        title: "??????",
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
        title: "?????????",
        type: "string",
        required: false,
        description: "???????????????"
      },
      layout: {
        title: "????????????",
        type: "string",
        required: false,
        "enum": ["horizontal", "vertical", "inline"],
        "enumNames": ["??????", "??????", "??????"],
        default: 'horizontal'
      },
      labelAlign: {
        title: "????????????",
        type: "string",
        required: false,
        "enum": ["left", "right"],
        "enumNames": ["???", "???"],
        default: 'right'
      },
      onFinish: {
        title: "????????????",
        type: "string",
        widget: "CodeEditor",
        required: false,
        description: "?????????????????????",
        default: "// ????????????????????? \n function submit() {}",
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
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      lifeCycle: {
        title: "????????????",
        type: "object",
        properties: {
          didMount: {
            title: "?????????????????????",
            description: 'didMount',
            type: "string",
            required: false
          },
          unMount: {
            title: "???????????????",
            description: 'unMount',
            type: "string",
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasForm",
  name: "????????????",
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_CONTAINER,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$3 = '?????????';
var ApaasRadio = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      isButton = props.isButton;

  var handleChange = function handleChange(value) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
    }
  };

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Radio.Group, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  }), values.map(function (value, index) {
    return isButton ? /*#__PURE__*/React.createElement(Radio.Button, {
      value: value,
      key: value
    }, names[index]) : /*#__PURE__*/React.createElement(Radio, {
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
        "title": "????????????",
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
        "title": "????????????",
        "type": "array",
        "enum": ["??????1", "??????2", "??????3"],
        "enumNames": ["??????1", "??????2", "??????3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["??????1", "??????2", "??????3"]
      },
      isButton: {
        "title": "???????????????",
        "type": "boolean",
        "default": false
      },
      buttonStyle: {
        "title": "????????????",
        "type": "string",
        "default": "solid",
        "enum": ["outline", "solid"],
        "enumNames": ["??????", "??????"],
        "widget": "select"
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$3,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasRadio",
  name: COMPONENT_NAME$3,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$4 = '????????????';
var ApaasSingleSelect = /*#__PURE__*/forwardRef(function (props, ref) {
  var options = props.options,
      showSearch = props.showSearch,
      filterItem = props.filterItem;

  var handleChange = function handleChange(value) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
    }
  };

  useEffect(function () {
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
  var finalOptions = useMemo(function () {
    try {
      return JSON.parse(options);
    } catch (e) {
      return [];
    }
  }, [options]);
  return /*#__PURE__*/React.createElement(Select, _extends({}, props, {
    options: finalOptions,
    onChange: handleChange,
    optionFilterProp: "text",
    ref: ref,
    filterOption: showSearch ? function (input, option) {
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    } : function () {}
  }), finalOptions.map(function (item) {
    return /*#__PURE__*/React.createElement(Select.Option, {
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
        title: '?????????',
        type: 'string',
        default: ''
      },
      options: {
        title: '????????????',
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
        "title": "??????????????????",
        "type": "boolean",
        "default": true
      },
      filterItem: {
        "title": "????????????",
        "type": "string",
        "enumNames": ["????????????", "???????????????"],
        "enum": ["value", "children"],
        "widget": "select",
        "default": "children"
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$4,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasSingleSelect",
  name: COMPONENT_NAME$4,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var _excluded = ["names", "values"];
var COMPONENT_NAME$5 = '?????????';
var ApaasCheckBox = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      otherProps = _objectWithoutProperties(props, _excluded);

  var handleChange = function handleChange(checkedValue) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(checkedValue);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(checkedValue);
    }
  };

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Checkbox.Group, _extends({}, otherProps, {
    onChange: handleChange,
    ref: ref
  }), values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Checkbox, {
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
        "title": "????????????",
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
        "title": "????????????",
        "type": "array",
        "enum": ["??????1", "??????2", "??????3"],
        "enumNames": ["??????1", "??????2", "??????3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["??????1", "??????2", "??????3"]
      },
      placeholder: {
        title: '?????????',
        type: 'string',
        default: ''
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$5,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            len: {
              label: '??????',
              message: '',
              type: 'array'
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasCheckBox",
  name: COMPONENT_NAME$5,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$6 = '????????????';
var ApaasMultSelect = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$names = props.names,
      names = _props$names === void 0 ? [] : _props$names,
      _props$values = props.values,
      values = _props$values === void 0 ? [] : _props$values,
      filterItem = props.filterItem,
      style = props.style;

  var handleChange = function handleChange(value) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(value);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(value);
    }
  };

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Select, _extends({}, props, {
    style: style,
    mode: "multiple",
    optionFilterProp: "text",
    onChange: handleChange,
    filterOption: function filterOption(input, option) {
      return option[filterItem].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    ref: ref
  }), values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(Select.Option, {
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
        title: '?????????',
        type: 'string',
        default: ''
      },
      values: {
        "title": "????????????",
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
        "title": "????????????",
        "type": "array",
        "enum": ["??????1", "??????2", "??????3"],
        "enumNames": ["??????1", "??????2", "??????3"],
        "widget": "select",
        "props": {
          "mode": "tags"
        },
        "default": ["??????1", "??????2", "??????3"]
      },
      filterItem: {
        "title": "????????????",
        "type": "string",
        "enumNames": ["????????????", "???????????????"],
        "enum": ["value", "children"],
        "widget": "select",
        "default": "children"
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$6,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            len: {
              label: '??????',
              message: '',
              type: 'array'
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasMultSelect",
  name: COMPONENT_NAME$6,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$7 = '??????';
var ApaasDatePicker = /*#__PURE__*/forwardRef(function (props, ref) {
  var range = props.range;

  var handleChange = function handleChange(date, dataString) {
    var _props$events;

    // ???????????????onChange??????
    if (typeof (props === null || props === void 0 ? void 0 : props.onChange) === 'function') {
      props.onChange(date);
    } // ???????????????onChange??????


    if (typeof (props === null || props === void 0 ? void 0 : (_props$events = props.events) === null || _props$events === void 0 ? void 0 : _props$events.onChange) === 'function') {
      props.events.onChange(date, dataString);
    }
  };

  useEffect(function () {
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
  return range === 'DatePicker' ? /*#__PURE__*/React.createElement(DatePicker, _extends({}, props, {
    onChange: handleChange,
    ref: ref
  })) : /*#__PURE__*/React.createElement(DatePicker.RangePicker, _extends({}, props, {
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
        title: '???????????????',
        type: 'string',
        default: 'date',
        enum: ['date', 'week', 'month', 'quarter', 'year'],
        enumNames: ['???', '???', '???', '??????', '???'],
        widget: 'select'
      },
      range: {
        title: '??????????????????',
        type: 'string',
        default: 'DatePicker',
        enum: ['DatePicker', 'RangePicker'],
        enumNames: ['??????', '????????????'],
        widget: 'select'
      },
      allowClear: {
        title: '????????????',
        type: 'boolean',
        required: true
      },
      placeholder: {
        title: '?????????',
        type: 'string',
        default: ''
      },
      showTime: {
        title: '????????????',
        type: 'boolean',
        required: false
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$7,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: "object",
    displayType: "column",
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasDatePicker",
  name: COMPONENT_NAME$7,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

};

var COMPONENT_NAME$8 = '????????????';

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
 * 1???accept ????????????
 * 2???action ????????????
 * 3???beforeUpload ??????????????????
 * 4???crop ????????????????????????
 * 5???maxCount ???????????????
 * 6???????????????????????????
 */


var ApaasImageUpload = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      onChange = props.onChange,
      maxCount = props.maxCount,
      beforeUpload = props.beforeUpload,
      action = props.action,
      style = props.style;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      previewImageDetail = _useState4[0],
      setPreviewImageDetail = _useState4[1];

  useEffect(function () {
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
    } // ???????????????onChange??????


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
      maxCount: maxCount,
      onChange: handleChange,
      onPreview: handlePreview,
      beforeUpload: beforeUpload || defaultBeforeUpload,
      style: style,
      ref: ref
    }, fileList.length >= maxCount ? null : uploadButton), /*#__PURE__*/React.createElement(Modal, {
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
  }; // if (crop) {
  //   return (
  //     <ImgCrop rotate>
  //       <UploadChild />
  //     </ImgCrop>
  //   )
  // }


  return /*#__PURE__*/React.createElement(UploadChild, null);
});
ApaasImageUpload.schema = {
  basicSchema: {
    type: "object",
    displayType: "column",
    properties: {
      accept: {
        title: "????????????",
        type: "string",
        required: false,
        default: "",
        description: "?????????.png, .jpeg, .gif????????????,??????,??????"
      },
      action: {
        title: "????????????",
        type: "string",
        required: false
      },
      beforeUpload: {
        title: "??????????????????",
        type: "string",
        required: false,
        description: "???????????????????????????????????????"
      },
      // crop: {
      //   title: "??????????????????",
      //   type: "boolean",
      //   required: false,
      //   widget: "switch"
      // },
      maxCount: {
        title: "??????????????????",
        type: "number",
        min: 1,
        default: 1,
        widget: "slider"
      },
      formItemProps: {
        type: 'object',
        title: '??????????????????',
        displayType: 'column',
        properties: _objectSpread2({}, formItemProperties({
          label: COMPONENT_NAME$8,
          rules: {
            required: {
              label: '??????',
              message: ''
            },
            validator: {
              label: '???????????????',
              message: ''
            }
          }
        }))
      }
    }
  },
  // ????????????Schema
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
  // ????????????Schema
  expandSchema: {
    type: 'object',
    displayType: 'column',
    properties: {
      events: {
        title: '????????????',
        type: 'object',
        widget: 'BindAction',
        required: false,
        default: {},
        props: {
          actions: ['onChange']
        }
      },
      lifeCycle: {
        title: '????????????',
        type: 'object',
        properties: {
          didMount: {
            title: '?????????????????????',
            description: 'didMount',
            type: 'string',
            required: false
          },
          unMount: {
            title: '???????????????',
            description: 'unMount',
            type: 'string',
            required: false
          }
        },
        default: {}
      }
    }
  },
  // ????????????Schema,???????????????????????????
  type: "ApaasImageUpload",
  name: COMPONENT_NAME$8,
  __source__: CURRENT_PACKAGE_NAME,
  __componentType__: COMPONENT_TYPE_FORM,
  __canDelete__: true,
  // ???????????????IDE?????????
  __canCopy__: true,
  // ?????????????????????
  __canMove__: true // ?????????????????????

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

export default index;
