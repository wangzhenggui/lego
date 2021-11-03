export default {
  namespace: 'globalSetting',
  state: {
    setting: {},
    functionExpressionModal: false,
    globalFunctionContext: '',
  },
  reducers: {
    setGlobalData(state, { payload }) {
      return {
        ...state,
        renderDataSource,
        currentRecord: payload,
      };
    },
    setFunctionExpressionModal(state, { payload }) {
      return {
        ...state,
        functionExpressionModal: payload
      }
    },
    setGlobalFunctionContext(state, { payload }) {
      return {
        ...state,
        globalFunctionContext: payload
      }
    }
  },
}