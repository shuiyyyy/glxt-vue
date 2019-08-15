import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'
import Welcome from '../views/base/Welcome'
import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
// import Adminstrator from '../views/lesson/Adminstrator'
// import SelectLesson from '../views/lesson/SelectLesson'
import SelectedLesson from '../views/lesson/SelectedLesson'
import QueryAllLesson from '../views/lesson/QueryAllLesson'
import NotFound from '../views/base/NotFound'


Vue.use(VueRouter);

const routers = [
  {
    // 登录页
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requireAuth: false,
    },
  },
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: Main,
    meta: {
      requireAuth: true,
    },
    children: [
      {path: '/main/welcome', name: 'Welcome', component: Welcome,
        meta: {
          requireAuth: true,
        },
      },
      {path: '/user/profile', name: 'UserProfile', component: UserProfile,
        meta: {
          requireAuth: true,
        },
      },
      {path: '/user/list', name: 'UserList', component: UserList,
        meta: {
          requireAuth: true,
        },
      },
      // {path: '/lesson/adminstrator', name: 'Adminstrator', component: Adminstrator},
      // {path: '/lesson/selectLesson', name: 'SelectLesson', component: SelectLesson},
      {path: '/lesson/selectedLesson', name: 'SelectedLesson', component: SelectedLesson,
        meta: {
          requireAuth: true,
        },
      },
      {path: '/lesson/queryAllLesson', name: 'QueryAllLesson', component: QueryAllLesson,
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      requireAuth: true,
    },
  }
];
/**
 * 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
 * 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
 * 关于 HTML5 history 模式的更多内容，可以参考官方文档：https://router.vuejs.org/zh-cn/essentials/history-mode.html
 * @type {VueRouter}
 */
const RouterConfig = {
  mode: 'history',
  routes: routers,
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, form, next) => {
  let cookiesStr = document.cookie;
  let cookiesArr = cookiesStr.split(';')
  cookiesArr.forEach(function (cookie) {
    let keyAndValueArr = cookie.split('=');
    sessionStorage.setItem(keyAndValueArr[0], keyAndValueArr[1]);
  });

  if (sessionStorage.getItem('token')) {
    if (!to.meta.requireAuth) { // 已经登录访问不需要登录的页面就重定向到主页
      next({path: '/main/welcome'})
    } else {
      next();
    }
  } else {
    if (!to.meta.requireAuth) { // 没有登录访问不需要登录的页面就继续
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath,}
      })
    }
  }
});

export default router;

