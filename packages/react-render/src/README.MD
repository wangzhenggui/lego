#### 识别 state，root，parent，item
- state 来自于最外层组件的状态
- root 有循环时，表示的是循环的那个dataSource,就是循环数据源, 默认是state里面的一级数组，数组里面嵌套数组这种，root还是指向的最外层数据源
- parent 当有双重循环时,parent表示外层循环数据源
- item 当前循环数据对象