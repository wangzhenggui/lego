export default {
  namespace: 'globalSetting',
  state: {
    setting: {},
    functionExpressionModal: false,
    globalFunctionContext: '',
    loading: false,
    resourceList: [{
      name: '@apaas-lego/react-basic-widgets',
      version: '0.0.2'
    }],
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
    },
    setLoading(state, { payload }) {
      return {
        ...state,
        loading: payload.loading
      }
    },
    setResourceList(state, { payload }) {
      return {
        ...state,
        resourceList: payload.resourceList
      }
    }
  },
}