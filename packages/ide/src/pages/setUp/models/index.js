import { ROOT_NODE_FLAG } from '@/common/constant';

const INIT_TREE = { // 默认添加一个根节点
  "componentName": "RootComponent",
  "id": ROOT_NODE_FLAG,
  "props": {},
  "child": []
}

export default {
  namespace: 'editModal',
  state: {
    renderTree: INIT_TREE,
    currentNode: null,
  },
  reducers: {
    addNodeToTree(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    moveNodeInTree(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    updateRenderTree(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    componentsPropsChange(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeCurrentNode(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    removeNodeInTree(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    copyNodeInTree(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    clearTree() {
      return {
        renderTree: INIT_TREE,
        currentNode: null,
      }
    },
    reSetTree(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
}