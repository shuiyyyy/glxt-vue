import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'

import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
// import Adminstrator from '../views/user/Adminstrator'
import SelectLesson from '../views/user/SelectLesson'
import SelectedLesson from '../views/user/SelectedLesson'
import QueryAllLesson from '../views/user/QueryAllLesson'



Vue.use(Router);

export default new Router({
    routes: [
        {
        // 首页
        path:'/main',
        name:'Main',
        component:Main,
        children: [
            {path: '/user/profile', name: 'UserProfile', component: UserProfile},
            {path: '/user/list', name: 'UserList', component: UserList},
            // {path: '/user/Adminstrator', name: 'Adminstrator', component: Adminstrator},
            {path: '/user/SelectLesson', name: 'SelectLesson', component: SelectLesson},
            {path: '/user/SelectedLesson', name: 'SelectedLesson', component: SelectedLesson},
            {path: '/user/QueryAllLesson', name: 'QueryAllLesson', component: QueryAllLesson},
        ]
        },
        {
        // 登录页
        path:'/login',
        name:'Login',
        component:Login
    }

    ]
})
