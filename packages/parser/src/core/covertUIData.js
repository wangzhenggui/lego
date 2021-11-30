/**
 * 用于将一些ui schema 的数据转化成 ui data 的格式，
 * 且将一些需要绑定的内容绑定上去。
 */


 /**
  * 
  * @param {string} str 
  * @param {object} data 
  */
function insertParam(str, data) {
    var regSplitState = /\b(state\.[^\s\b]*\b)/g;
    str.match(regSplitState).forEach(key => {
        let newArr = key.replace(/^state\./, '').split('.');
        // newArr.shift(); // 把第一个state 去掉
        let ni = newArr.length;
        newArr.forEach((a, i) => {
            // length 等这种属性的，可以过滤掉。
            if (a === 'length') {
                return;
            }
            let _ = data[a];
            if (_ === undefined) {
                if (i + 2 === ni && newArr[i + 1] === 'length') { // 倒数第二个，且最后1个为length，则判断为【】
                    data[a] = [];
                } else if (i + 2 <= ni) { // 后面还有好几个的情况下
                    data[a] = {};
                } else {
                    data[a] = '';
                }
            } else {
                data[a] = _;
            }
        });
    });
}

/**
 * 
 * @param {string} key 
 * @param {data} data
 * @returns {string | boolean | object | array | number | undefined} 
 */
function getStateValue(key, data) {
    var find = true, kh = data,
        arr = key.replace(/^state\./, '').split('.'), ni = arr.length;
    arr.forEach((k, i) => {
        // 如果最后一位是length 的情况下，则只求length 即可。
        if (k === 'length' && i) {
            kh = kh.length;
            return;
        }
        if (kh[k] !== undefined && find) {
            kh = kh[k];
        } else {
            find = false;
        }
    });
    return find ?  kh : undefined;
}

/**
 * 
 * @param {object} uiSchema 
 * @param {string} data
 * @returns {object} 
 */
function covertUIData(uiSchema, data) {
    // 复制一个
    let newData = Object.assign({}, data);
    var regHasState = /^\{\{state\.(.*)\}\}$/g;
    var dataInitList = [];
    var deepLoop = (obj) => {
        if (!obj || !obj.children) { return; }
        var child = obj.children;
        for (let i in child) {
            let oc = child[i];

            // 在display 中有表达式
            regHasState.test(oc.display) && insertParam(oc.display, newData);
            // 在content 中有表达式
            regHasState.test(oc.content) && insertParam(oc.content, newData);
            // 在循环中 有表达式
            regHasState.test(oc.repeatBy) && insertParam(oc.repeatBy, newData);
           
            // 如果存在dataInit -表示某个数据需要初始化，而且引入的是另外一组的数据，则先将需要初始化的数据保存起来，在后面统一去处理。
            // dataInit 里的格式，肯定是给某个值赋予到另外一个值上，方便操作
            oc.dataInit && dataInitList.push(oc.dataInit);
            
            // 循环遍历
            oc.children !== undefined && deepLoop(oc);
        }
    };

    deepLoop(uiSchema);

    // 在上面的基础赋值完成之后在遍历dataInit，让至少对应的data 都已经存在.
    // dataInit 的作用在于给一些需要控制显示的数据，做一些额外的赋值操作，让他能够实现。
    var dataInits = {};
    var regHasExp = /^\{\{(.*)\}\}$/;
    dataInitList.forEach(dit => {
        // 对 子集分别拆解;
        let exps = dit.replace(regHasExp, '$1').split(/\s?\=\s?/),
            val = getStateValue(exps[1], newData);
        // 等于undefined 说明数据还没准备好。
        if (val === undefined) { return; }

        // 让exp0 递归获取到相应的值
        insertParam(exps[0], dataInits);
    });
    // console.log('dataInitList', dataInitList, dataInits);
    

    return Object.assign(dataInits, newData);
    
}

export default covertUIData