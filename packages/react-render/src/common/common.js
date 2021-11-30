import { find } from "lodash";
import request from "./request";

export const getParams = (method = "get", params) => {
  if (method.toLocaleLowerCase() === "get") {
    return {
      params,
    };
  }
  return {
    data: params,
  };
};

export const dealBindService = async (registered, service, _this, args) => {
  let defaultParams = {};
  const currentAPIService = find(registered, { name: service.serverName });
  if (service.requestHooks) {
    defaultParams = _this
        .funcParser(`{{${service["requestHooks"]}()}}`)
        .call(_this, args);
  }
  defaultParams = defaultParams || currentAPIService.params; // requestHooks需要字符串翻译成function
  try {
    _this.setState({
      global: {
        loading: true,
      },
    });
    let res = await request(currentAPIService?.api?.path, {
      method: currentAPIService?.api?.method || "get",
      ...getParams(currentAPIService?.api?.method, defaultParams),
    });
    if (service["responseHooks"]) {
      console.warn('responseHooks', service["responseHooks"])
      res = _this
        .funcParser(`{{${service["responseHooks"]}()}}`)
        .call(_this, res);
    }
    return res;
  } catch (e) {
    console.error('dealBindService-e', e)
  } finally {
    _this.setState({
      global: {
        loading: false,
      },
    })
  }
};