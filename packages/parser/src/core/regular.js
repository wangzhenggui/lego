export const regCksplit = /(\=\=\=|\=\=|>=|<=|\!\=\=|\!\=|>|<)/;
export const regRmFEblock = /(^\s*)|(\s*$)/g;
export const regIsNum = /^\-?\d+(\.\d+)?$/;
export const regIsState = /^state\.(.*)$/;
export const regPreKey = /^(state|root|parent|item|scope)\.(.*)$/; // 目前支持 state、root、parent、item 等关键字作为属性名
export const regFunKey = /^(SysFunc|WinFunc)\.(.*)$/; // 目前支持 state、root、parent、item 等关键字作为属性名
export const regHasExp = /^\{\{(.*)\}\}$/;
export const regSplitE0 = /\|\||&&/;    // 按 ｜｜ 或者 && 去拆分
export const reg3Exp = /(.*)\?(.*)\:(.*)/;// 3元表达式 去拆分
export const regOr = /\|\|/; // 是否参数
export const regStyle = /\{\{(.*)\}\}/; //用于style传参解析