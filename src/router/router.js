import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'
import Welcome from '../views/user/Welcome'
import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
// import Adminstrator from '../views/user/Adminstrator'
// import SelectLesson from '../views/user/SelectLesson'
import SelectedLesson from '../views/user/SelectedLesson'
import QueryAllLesson from '../views/user/QueryAllLesson'


Vue.use(VueRouter);

const routers = [
  {
    // 登录页
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {path: '/main/welcome', name: 'Welcome', component: Welcome},
      {path: '/user/profile', name: 'UserProfile', component: UserProfile},
      {path: '/user/list', name: 'UserList', component: UserList},
      // {path: '/user/adminstrator', name: 'Adminstrator', component: Adminstrator},
      // {path: '/user/selectLesson', name: 'SelectLesson', component: SelectLesson},
      {path: '/user/selectedLesson', name: 'SelectedLesson', component: SelectedLesson},
      {path: '/user/queryAllLesson', name: 'QueryAllLesson', component: QueryAllLesson},
    ]
  },
  // {
  //   path: '*',
  //   name: 'notFound',
  //   component: NotFound,
  // }
];
/**
 * 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
 * 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
 * 关于 HTML5 history 模式的更多内容，可以参考官方文档：https://router.vuejs.org/zh-cn/essentials/history-mode.html
 * @type {VueRouter}
 */
const RouterConfig = {
  mode: 'history',
  routes: routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    sessionStorage.clear();
    next();
  } else {
    let token = sessionStorage.getItem('token');
    if (token) {
      next();
    } else {
      next({path: '/login'});
    }
  }
});

export default router;

