import axios from "axios";
import { message } from 'ant-design-vue';

const service = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 7000
})

// 请求发出前拦截， return的目的是给then，或者catch使用的
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  console.log('request-error==', error.response);
  return Promise.reject(error);
});

// 添加响应拦截器, 响应返回的res是浏览器给的
service.interceptors.response.use(function (response) {
  console.log('then-response==', response);
  const res = response.data
  if (res.code !== 200) {
    if (res.code === 401) {
      message.error({
        message: res.message || '登录失效，请重新登录',
        type: 'danger'
      });
      return
    }
  }
  console.log(res);
  return res;
}, function (error) {
  console.log('error-response==', error.response);
  const { status } = error.response
  const { message } = error.response.data || {}
  if (status === 401) {
    message.error({
      message: message || '登录失效，请重新登录',
      type: 'danger'
    });
  }
  return Promise.reject(error);
});

export default service