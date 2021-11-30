const regHasExp = /^\{\{(.*)\}\}$/, //匹配 {{xxxx}}
  reg3Exp = /(.*)\?(.*)\:(.*)/,  //匹配 三目 xx ? xx :xx
  regIsDefaultFunc = /^(WinFunc|SysFunc)\.([^(]*)\((.*)\)$/, // 是否函数  含外挂函数 与 系统函数
  // regISRequestFunc = /^(request)([^(]*)\((.*)\)$/,
  regIsParam = /^\{(.*)\}$/, // 是否参数
  regPreKey = /^\!?(state|root|parent|item|this)\.(.*)$/, // 目前支持 state、root、parent、item 等关键字作为属性名
  regSetKey = /^(state|root|parent|item|this)\.([^\s\b]*)\s?\=\s?(.+)$/,
  regIncludeFunc = /\s*?\([^)]*\)\s*?\{?/,
  regCksplit = /(\=\=\=|\=\=|>=|<=|\!\=\=|\!\=|>|<)/,
  regIsNum = /^\-?\d+(\.\d+)?$/,
  regIsString = /^('[^']*'|"[^"]*")$/;

const splitKey2 = ";;"; // 用于在 json 式的data 对象里（object） 里去做分割，因为 “，” 的分割容易出现误判，而且做左右对称校验会有资源消耗
const splitKey3 = ";;;"; // 用于在第一层里做多个任务间的分割。

/**
 *
 * @param {string} str
 * @returns {string}
 */
function removeFEBlock(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 *
 * @param {string} strParams
 * @param {object} data
 * @param {object} handler
 * @param {object} state
 * @returns {*}
 *
 * 目前支持这样的参数处理形式
 * 1. 纯字符串的，比如 alert（“234234”） 这样里面的 234234 这样的参数
 * 2. 纯变量的，比如 state.xxx, item.xxx, root.zzz 这样的
 * 3. 函数式的，比如 WinFunc.alert(WinFunc.getId(item.id)) 这个里面的 WinFunc.getId(item.id)
 *            函数式里的参数，也支持其他的嵌套，但是仅限一层嵌套。
 * 4. 对象式的参数，如:
 *      {
 *          a: '123123‘,
 *          b: stae.xxzx,
 *          c() {
 *          }
 *      }
 *      对象式的，里面又可以混合其他的各种模式，但是目前只支持1层嵌套，不支持多层嵌套
 * 5. 混合式的，如：
 *      "123234234", item.xxxx, state.xxx, (a, b, c) => {alert("21")}, {a: "123", b: state.xxxx, c() {}}
 * 由于这个里面会有比较复杂的拆分，所以需要尽量减少嵌套层次。
 */
function covertParams(strParams, data, handler, state) {
  if (regIsString.test(strParams)) {
    // 纯字符串，类似 “123”， ‘345345’ 这样参数
    return strParams;
  } else if (/\;\;\;/g.test(strParams)) {
    // 混合表达式的，以数组的形式传递回去
    return strParams.split(splitKey3).map((str) => {
      return covertParams(str, data, handler, state);
    });
  } else if (regPreKey.test(strParams)) {
    // params 是一个来自数据的参数
    return getKeyValue(strParams, data, handler, state);
  } else if (regIsDefaultFunc.test(strParams)) {
    // 如果是一个函数的内容
    let funcType = RegExp.$1,
      funcKey = RegExp.$2,
      params = covertParams(RegExp.$3, data, handler, state);
    let func = getKeyFunc(funcType, funcKey);
    return func ? func(params) : null;
  } else if (regIsParam.test(strParams)) {
    // 说明params 是一个object 对象
    let strData = RegExp.$1,
      param = {};
    // 然后按分割符来操作
    strData.split(splitKey2).forEach((str) => {
      str = removeFEBlock(str);
      if (/^([a-zA-Z0-9_]+)\s?\(([^\)]*)\)\s?\{([^\}]*)\}$/.test(str)) {
        // 类似  a3123() {...} 这样的表达式
        param[RegExp.$1] = new Function(
          "return function(" + RegExp.$2 + ") {" + RegExp.$3 + "}"
        )();
      } else {
        let p = str.split(":"),
          k = removeFEBlock(p[0]),
          v = removeFEBlock(p[1]);
        param[k] = regIncludeFunc.test(v)
          ? new Function("return " + v)()
          : covertParams(v, data, handler, state);
      }
    });
    return param;
  }
  return strParams;
}

/**
 *
 * @param {string} funcType
 * @param {string} funcKey
 * @returns {function | null}
 */
function getKeyFunc(funcType, funcKey) {
  var func = funcType === "WinFunc" ? window.WinFunc : window.SysFunc,
    funcExist = true;
  funcKey.split(".").forEach((k) => {
    k = removeFEBlock(k);
    if (func[k]) {
      func = func[k];
    } else {
      funcExist = false;
      return false;
    }
  });
  if (!funcExist) {
    return null;
  }
  return func;
}

/**
 *
 * @param {string} str
 * @param {object} data
 * @param {object} handler
 * @param {object} state
 * @returns {*}
 */
function getKeyValue(str, data, handler, state) {
  regPreKey.test(str);
  var preKey = RegExp.$1,
    keyChain = RegExp.$2;
  var param =
      preKey === "this" ? handler : preKey === "state" ? state : data[preKey],
    find = true;
  keyChain.split(".").forEach((s, i) => {
    if (s === "length" && i) {
      param = param.length;
      return;
    }
    if (param[s] && find) {
      param = param[s];
    } else {
      find = false;
    }
  });
  return find ? param : null;
}

/**
 *
 * @param {string} str
 * @param {object} data
 * @param {object} handler
 * @param {object} state
 * @param {object} react
 * @param {object} args
 * @param {boolean} isSetValue
 * @returns {*}
 */
function actExpValue(str, data, handler, state, react, args, isSetValue) {
  // 如果是函数式的话
  if (regIsDefaultFunc.test(str)) {
    let funcType = RegExp.$1,
      funcKey = RegExp.$2,
      params = RegExp.$3;
    let func = getKeyFunc(funcType, funcKey);
    if (!func) {
      return false;
    }
    params = covertParams(params, data, handler, state);
    return params instanceof Array
      ? func.apply(handler, params)
      : func({ params, args }, { $root: react, $request: react?.request });
  } else {
    return !isSetValue
      ? getKeyValue(str, data, handler, state)
      : setKeyValue(str, data, handler, state, react, args);
  }
}

/**
 *
 * @param {string} val
 * @returns {*}
 */
function covertValue(val, data, handler, state) {
  if (regPreKey.test(val)) {
    let value = getKeyValue(val, data, handler, state);
    return /^\!/.test(val) ? !value : value;
  } else {
    try {
      return JSON.parse(val);
    } catch (e) {
      return regIsNum.test(val)
        ? +val
        : /^true|false$/.test(val)
        ? /true/.test(val)
        : /^null$/.test(val)
        ? null
        : /^undefined$/.test(val)
        ? undefined
        : val;
    }
  }
}


// async function asyncCoverValue({ preKey, keyChain, valueKey, data, handler, state, react, args }) {
//   let params = covertParams(valueKey, data, handler, state);
//   try {
//     params = typeof params === 'string' ? JSON.parse(params) : params;
//   } catch (e) {
//     params = []
//     console.error('params', params)
//   }
//   const value = await dealBindService(react.registered, params, react, args);
//   console.log('value', value)
//   autoSetState({ preKey, keyChain, value, data, handler, state, react }); //  直接更新
// }

/**
 *
 * @param {string} str
 * @param {object} data
 * @param {object} handler
 * @param {object} state
 * @param {object} react
 * @returns {object}
 * @description 设置类的一般都有一个值，目前我们允许 数字，字符串，布尔，或者某个对象。当值是某个对象是，我们将会用JSON parse 转译一下。
 */
function setKeyValue(str, data, handler, state, react) {

  if (!regSetKey.test(str)) {
    return false;
  }
    var preKey = RegExp.$1,
        keyChain = RegExp.$2;
    
  // if (regISRequestFunc.test(RegExp.$3)) {
  //   return asyncCoverValue({ preKey, keyChain, valueKey: RegExp.$3, data, handler, state, react, args }); // 异步更新state
  // }
  const value = covertValue(RegExp.$3, data, handler, state);
  autoSetState({ preKey, keyChain, value, data, handler, state, react }); //  直接更新
}


/**
 * 表达式处理完之后自动setState
 * @param {*} preKey 
 * @param {*} keyChain 
 * @param {*} value 
 * @param {*} data 
 * @param {*} handler 
 * @param {*} state 
 * @param {*} react 
 */
function autoSetState({ preKey, keyChain, value, data, handler, state, react }) {
  var isState = preKey === "state";
  var odata = preKey === "this" ? handler : isState ? state : data; // 原始数据
  var setData = (obj, keys, d) => {
    var key = keys.shift();
    if (obj[key] === undefined) {
      if (!keys.length) {
        // 已经到了最后一位
        obj[key] = d;
      } else {
        obj[key] = {};
        setData(obj[key], keys, d);
      }
    } else {
      if (!keys.length) {
        obj[key] = d;
      } else {
        setData(obj[key], keys, d);
      }
    }
  };
  
  setData(odata, keyChain.split("."), value);
  if (isState) {
    let key = keyChain.split(".")[0];
    let ndata = {};
    for (let i in odata) {
      if (i === key) {
        ndata[i] = odata[i];
      }
    }
    react.setState(ndata);
  }
}

/**
 *
 * @param {string | number} key0  参数1
 * @param {string | number} key1  参数2
 * @param {string} arithmetic     对比符号
 * @returns {boolean}
 */
function getCalcValue(key0, key1, arithmetic) {
  var tk0 = typeof key0,
    tk1 = typeof key1;
  if (tk0 !== tk1) {
    // 两者类型不一样，不相等
    return false;
  }

  // == 和  ！= 都支持字符串 和数字，其余的都是数字支持
  switch (removeFEBlock(arithmetic)) {
    case "==":
    case "===":
      return key0 === key1;
    case "!=":
    case "!==":
      return key0 !== key1;
    case ">":
      return key0 > key1;
    case ">=":
      return key0 >= key1;
    case "<":
      return key0 < key1;
    case "<=":
      return key0 <= key1;
  }
}

/**
 *
 * 函数会引用来自外部的集成方法
 * 函数式处理这样几种解决方案：
 * 1. 不需要调用函数的，只需要更改自身或者某个节点变化的(直接赋值类的操作)，如
 *      {{state.zzzz = false}},  {{item.status = 'abc‘ }}, {{item.xxx = 'bcd' ;;; item.zz = 'zxfds'}}  this 会指代当前的元素，而item 则是当前元素的数据对象，需要区别对待。
 *      {{parent.xx.status = 'def'}} {{root[id].xxx.status = 'zz'}}
 *      {{a.b.c.display = false}}
 *      {{a.b.c.xRender = this.xform}}
 *      // 删除操作
 *      {{delete root}}
 *      上面都需要将 key 的值往下去传递，方便寻找key
 * 2. 需要调用函数的, 直接就是函数式的，如 {{WinFunc.alert("32131")}}
 * 3. 在函数里混杂了函数式 以及 赋值式的操作的。
 * 4. 三元表达式的 （一层）可以混合赋值式或者函数式
 *
 * 优先级的处理上是：
 * 三元表达式
 *      函数式 & 赋值式
 * 纯函数式
 * 混合形式
 *      函数式 && 赋值式
 *
 *
 * 在合并关系上，还需要有一个 depence 的关系，可以把一些需要一起计算的内容合并起来。
 */

/**
 *
 * @param {object} react
 * @returns {function}
 */
function funcParser(react) {
  /**
   *
   * @param {string} str 来自表达式的内容
   * @param {object} data 来自当前的数据对象 （源头来自 state，但是有可能来自循环中的对象）
   * @param {object} schema schema 的内容
   * @param {string} elmChain 当前元素下面的节点
   * @returns {function}
   */
  const { state } = react;
  var func = function (str, data) {
    return function () {
      // 这里的 this 将指向节点元素本身
      if (!regHasExp.test(str)) {
        return null;
      }
      var content = RegExp.$1,
        handler = this,
        args = Array.prototype.slice.call(arguments);
      if (reg3Exp.test(content)) {
        // 三元表达式
        let exp = RegExp.$1,
          res1 = RegExp.$2,
          res2 = RegExp.$3;
        exp = removeFEBlock(exp);
        res1 = removeFEBlock(res1);
        res2 = removeFEBlock(res2);
        let result = true;
        if (regIsDefaultFunc.test(exp)) {
          // 判断问句是函数式的, 如 WinFunc.checkUser() 这样的，允许在里面在传值，值可以被替换。
          result = actExpValue(exp, data, handler, state, react, args);
        } else {
          // 是单一判断的， 分3种情况， 一种变量 与 变量的对比，一种变量 与 函数的对比， 一种函数与函数的对比
          regCksplit.test(exp);
          let e1 = RegExp.$1,
            ns = exp.split(regCksplit);
          result = getCalcValue(
            actExpValue(removeFEBlock(ns[0])),
            actExpValue(removeFEBlock(ns[2])),
            e1
          );
        }
        // 解析判断式，且执行下面的操作。  res1 或者 res2，都可以支持多组运算一起
        let ress = result ? res1 : res2;
        ress.split(splitKey3).forEach((res) => {
          // 判断 res 的类型，是函数式 还是赋值式的
          actExpValue(
            removeFEBlock(res),
            data,
            handler,
            state,
            react,
            args,
            true
          );
        });
      } else if (regIsDefaultFunc.test(content)) {
        // 纯函数式
        return actExpValue(content, data, handler, state, react, args);
      } else {
        // 混合形式的
        return content.split(splitKey3).map((res) => {
          actExpValue(
            removeFEBlock(res),
            data,
            handler,
            state,
            react,
            args,
            true
          );
        });
      }
    };
  };
  return func;
}

export default funcParser;
