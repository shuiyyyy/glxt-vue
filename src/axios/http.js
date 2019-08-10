// 引入axios
import axios from 'axios';
// import store from './store/store'
// 引入router
import router from '../router/router.js';
// axios 配置
axios.defaults.timeout = 60000;

// axios.defaults.header("Access-Control-Allow-Origin", "*");
// axios.defaults.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
// axios.defaults.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('currentUser_token');
axios.defaults.baseURL = '/api';

// http request 请求拦截器，有token值则配置上token值
// axios.interceptors.request.use(
//   config => {
//     if (store.state.currentUser.UserToken) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//       config.headers.Authorization = store.state.user.UserToken;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    if (response.data.code === 500210) { // 还没有登录
      sessionStorage.clear();
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}, //登录成功后跳入浏览的当前页面
      })
    }
    return response.data;
  },
  error => {
    if (error.response) {
      sessionStorage.clear();
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath},  //登录成功后跳入浏览的当前页面
          });
          break;
        case 403:
          // 403 无权限，跳转到首页
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath},
          });
          break;
        case 500:
          this.$message.error('系统异常');
      }
    }

    return Promise.reject(error.response)
  });

export default axios;
