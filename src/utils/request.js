import axios from "axios/index";
import { notification } from "ant-design-vue";

axios.defaults.baseURL = "http://mockjs.com/api";
function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        message: status,
        description: statusText
      });
      return Promise.reject(error);
    });
}

export default request;
