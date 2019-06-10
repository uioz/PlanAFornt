import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: '/api',
  withCredentials: true,
});

AxiosInstance.interceptors.response.use(response => {

  if(response.status !== 200){
    throw "网络连接失败请检查请的网络!"
  }

  if (response.data.stateCode !== 200){
    if(response.data.message){
      throw response.data.message;
    }
    throw "未知错误,请刷新重试!";
  }

},error=>{
  // TOOD message 提示
});

export const axios = AxiosInstance;