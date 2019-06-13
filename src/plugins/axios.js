import Axios from "axios";
import { Toast } from "../plugins/musetoast.js";

const AxiosInstance = Axios.create({
  baseURL: '/api',
  withCredentials: true,
});

AxiosInstance.interceptors.response.use(response => {

  if (response.status !== 200) {
    Toast.error('网络连接失败请检查请的网络!');
    return null;
  }

  if (response.data.stateCode !== 200) {
    if (response.data.message) {
      Toast.error(response.data.message);
      return null;
    }
    Toast.error('未知错误,请刷新重试!');
    return null;
  }

  return response;

}, error => {
  if (typeof error === 'string') {
    Toast.error(error);
  } else {
    Toast.error('网络连接失败请检查请的网络!');
  }
});

export const axios = AxiosInstance;