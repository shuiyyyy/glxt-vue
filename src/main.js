// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import router from './router/router.js';
import axiosHttp from './axios/http.js';
import store from './store/store.js';
import Qs from 'qs';
import resCodes from './util/resCodeUtil.js'
import commonUtil from "./util/commonUtil.js";

import Mock from './mock/mock.js';
// Mock.init(); // TODO：前端自己mock测试，联调需要注释掉

Vue.use(ElementUI);
// 使用axios
Vue.prototype.axiosHttp = axiosHttp;

Vue.prototype.qs=Qs;

// 工具方法
Vue.prototype.commonUtil = commonUtil;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 启用路由
  router: router,
  // 启用vuex
  store: store,
  // 启用elementUI
  render: h => h(App)
});
