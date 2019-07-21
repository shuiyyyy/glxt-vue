import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'

import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'



Vue.use(Router);

export default new Router({
    routes: [
        {
        // 首页
        path:'/main',
        name:'Main',
        component:Main
        },
        {
        // 登录页
        path:'/login',
        name:'Login',
        component:Login
    }

    ]
})
