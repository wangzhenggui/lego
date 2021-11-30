import { regCksplit, regRmFEblock, regIsNum, regIsState, regPreKey, regHasExp, regSplitE0, reg3Exp, regOr ,regStyle} from './regular';


const defaultStateStr = '加载中...';
/**
 * 判断表达式是否成立 
 * @param {string} display  ‘xxx ||’
 * @param {object} data 
 * @returns {boolean}
 */
export function checkDisplayStatus(display, data) {
  if (regSplitE0.test(display)) { // 有多层表达式
      let isOr = regOr.test(display); // 如果是 或 的话
      let expArr = display.split(regSplitE0), cA = 0;
      expArr.forEach(e => { // 按 异或 或者 且的条件去拆分
          // 如果该表达式含有 regCk 表达式的情况下
          cA += compireCalcValue(removeFEBlock(e), data, true) ? 1 : 0;
      });
      
      // 如果是 ｜｜ 的情况，几个情况只要一个满足就可以
      // 如果是 &&  的情况，必须所有的情况都满足才可以。
      return isOr ? cA >= 1 : cA === expArr.length;
  } else { // 有判断表达式的情况下
      return compireCalcValue(removeFEBlock(display), data, true);
  }
}
/**
 * 
 * @param {string} str 参数路径
 * @param {object} data state内容
 * @param {boolean} noStateStr 类似lodash的get方法未找到值
 * @returns {string} 
 */
export function getDataValue(str, data, noStateStr) {
  var exist = true, arr = str.split('.'), newData = arr[0] === 'state' || arr[0] === 'scope' ? data :data[arr[0]];
  arr.shift(); // 去掉第一个
  arr.forEach((s, i) => {
      // 如果遇到 length， 得提前处理下。
      if (s === 'length' && i != 0) {
          newData = newData.length;
          return;
      }

      if (newData[s] !== undefined && exist) {
          newData = newData[s];
      } else {
          exist = false;
      }
  });
  return exist ? newData : noStateStr ? false : defaultStateStr;
 }

 /**
 * 
 * @param {string} str
 * @returns {string} 
 */
 function removeFEBlock(str) {
  return str.replace(regRmFEblock, '');
}

/**
* 
* @param {string} str 
* @param {object} data 来自上一级的 state 或者数据对象
* @param {boolean} noStateStr
* @returns {string | number} 
*/
 function getExpValue(str, data, noStateStr) {
  // noStateStr && console.log('str', str);
  if (regPreKey.test(str)) { // 带有参数类型的
      return getDataValue(str, data, noStateStr);
  } else if (regIsNum.test(str)) { // 数字
      return +str;
  } else { // 纯字符串
      return /^true|false$/.test(str) ? /true/.test(str) : 
      /^null$/.test(str) ? null : 
      /^undefined$/.test(str) ? undefined : (str || "");
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
  var tk0 = typeof key0, tk1 = typeof key1;
  if (tk0 !== tk1) { // 两者类型不一样，不相等
      return false;
  } else if (key0 === defaultStateStr && key1 === defaultStateStr) { // 两者都处于加载中的状态
      return false;
  }

  // == 和  ！= 都支持字符串 和数字，其余的都是数字支持
  switch(removeFEBlock(arithmetic)) {
      case '==':
      case '===':
          return key0 === key1;
      case '!=':
      case '!==':
          return key0 !== key1;
      case '>':
          return key0 > key1;
      case '>=':
          return key0 >= key1;
      case '<':
          return key0 < key1;
      case '<=':
          return key0 <= key1;
  }
}



/**
 * 
 * @param {string} e 
 * @param {object} data
 * @param {boolean} noStateStr
 * @returns {boolean} 
 */
 function compireCalcValue(e, data, noStateStr) {
  if (regCksplit.test(e)) {
      let e1 = RegExp.$1, ns = e.split(regCksplit), e0 = removeFEBlock(ns[0]), e2 = removeFEBlock(ns[2]), regEpt = /^''|""$/;
      if (regEpt.test(e0)) { e0 = '';}
      if (regEpt.test(e2)) { e2 = '';}
      return getCalcValue(getExpValue(e0, data, noStateStr), getExpValue(e2, data, noStateStr), removeFEBlock(e1));
  } else { // 没有regCk 表达式，只有类似 state.d.value, 或者！！state.d.value 这样的
      let e0 = getDataValue(removeFEBlock(e), data, noStateStr);
      return e0 && e0 !== defaultStateStr;
  }
 }


/**
 * 
 * UI 组件里，关于内容的部分的整理
 * 约定， UI 组件里，其会引起的变化的变量，全部都放到state 里，一则减少对于复杂程度，另外一方面可以简化场景
 * 当前支持的方式：
 * 一. 三元表达式
 *      三元表达式， 支持  ｜｜ 或者 &&， 只支持到一层。
 *      state.xxx === b || state.bbb >= d ? state.xxx : 单字符串
 * 二. 异或表达式， 表示前者不存在，或者返回 false 的前提下，可以用后者来做placeholder
 *      state.xxx || 单字符串
 * 三. 直接输出的形式
 *      state.xxx  
 */

/**
 * 
 * @param {string} content 
 * @param {object} data
 * @returns {string} 
 *   
 */
export function explanContent(content, data) {
  if (!regHasExp.test(content)) { // 当直接就是字符串的时候
      return content;
  }
  // 做逻辑算法处理
  var co = removeFEBlock(RegExp.$1);
  var regMidExp = /\{\{([^}]*)\}\}/g;
  if (reg3Exp.test(co)) { // 三元表达式
      let exp = RegExp.$1, res1 = RegExp.$2, res2 = RegExp.$3;
      // 去掉首尾空格
      exp = removeFEBlock(exp);
      res1 = removeFEBlock(res1);
      res2 = removeFEBlock(res2);

      let finRes1 = regIsState.test(res1) ? getDataValue(res1, data) : res1,
          finRes2 = regIsState.test(res2) ? getDataValue(res2, data) : res2;

      // 如果表达式里有 ｜｜ 或者 && 的话，先拆分, 切按不同的条件来判断下一步的处理方式
      if (regSplitE0.test(exp)) { // 有多层表达式
          let isOr = regOr.test(exp); // 如果是 或 的话
          let expArr = exp.split(regSplitE0), cA = 0;
          expArr.forEach(e => { // 按 异或 或者 且的条件去拆分
              // 如果该表达式含有 regCk 表达式的情况下
              cA += compireCalcValue(e, data) ? 1 : 0;
          });
          
          // 如果是 ｜｜ 的情况，几个情况只要一个满足就可以
          // 如果是 &&  的情况，必须所有的情况都满足才可以。
          return isOr ? cA >= 1 ? finRes1 : finRes2 :
                      cA === expArr.length ? finRes1 : finRes2;
      } else { // 有判断表达式的情况下
          return compireCalcValue(exp, data) ? finRes1 : finRes2;
      }
  } else if (regOr.test(co)) { // 例如 a || 'b' 这样的， 第一个必须是一个表达式，第二个则可以是纯数字，也可以是表达式
      let coa = co.split(regOr),
          res1 = getDataValue(removeFEBlock(coa[0]), data),
          res2 = removeFEBlock(coa[1]);
      res2 = regIsState.test(res2) ? getDataValue(res2, data) : res2;
      return res1 && res1 !== defaultStateStr ? res1 : res2;
  } else if (regPreKey.test(co)){ // 基于 state|root|parent|item 等去调用的
      return getDataValue(co, data);
  } else if (regMidExp.test(co)){
      // 含有2层 {{}} 关系的数据，如  {{亲爱的 {{state.name}}, 现在时间是 {{state.now}}, 您上次登陆为 {{state.lastLogin}}}}
      // 最多嵌套一层。
      let nco = co + '';
      co.match(regMidExp).forEach(k => {
          let val = getDataValue(removeFEBlock(k).replace(/\{|\}/g, ''), data);
          nco = nco.replace(RegExp(k.replace(/(\{|\})/g, '\\$1')), val);
      });
      return nco;
  }
  // 循环下的数据需要额外的处理
  return '';
}

/**|
 * 处理style 
 * 目前只支持 style={height:{{state.height}}px} state上定义值
 */
export function checkStyle(style,data){
    if(!style || !Object.keys(style).length){
        return {};
    }
    let newStyle = {};
    Object.keys(style).forEach(sty =>{
        if(regStyle.test(style[sty])){
            let styleArr = style[sty].split(regStyle);
            let styleKey = styleArr[1].split('.');
            newStyle[sty] = data[styleKey[1]] + (styleArr.length === 3 ? styleArr[2] : '')
        }else{
            newStyle[sty] = style[sty]
        }
    })
    return newStyle
}

export function analysisClass(className,data){
    if(!className || typeof className !== 'string'){
        return ''
    }
    if(regHasExp.test(className)){
        const classList = className.split(regHasExp)
        if(!className.length){
            return ''
        }
        let newClass = classList.reduce((prev,cur) =>{
            if(!cur){
                return prev
            }
            if(regHasExp.test(cur)){
                return prev ? prev + ',' + explanContent(cur,data) : explanContent(cur,data)
            }else{
                return prev ?prev + ',' + cur : cur
            }
        },'')
        return newClass

    }else{
        return className
    }
}