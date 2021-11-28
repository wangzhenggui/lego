export default {
  namespace: 'globalSetting',
  state: {
    setting: {},
    functionExpressionModal: false,
    globalFunctionContext: '',
    loading: true,
    resourceList: [{
      name: '@apaas-lego/react-container-widgets',
      version: '0.0.7'
    }, {
      name: '@apaas-lego/react-basic-widgets',
      version: '0.0.26'
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