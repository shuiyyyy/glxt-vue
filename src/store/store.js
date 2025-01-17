// state - mutations - getters - actions - store，以上写法基本固定
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex);
const stores = {
  // modules: {
  //   users: UserModule
  // },
  // 1、全局 state 对象，用于保存所有组件的公共数据
  state: sessionStorage.getItem('username') ? sessionStorage.getItem('username') :
    {
      username: '',
  },
  // 2、定义改变 state 初始值的方法，这里是唯一可以改变 state 的地方，缺点是只能同步执行
  mutations: {
    // 在组件中是通过 this.$store.commit('updateUser', user); 方法来调用 mutations
    updateUser(state, username) {
      state.username = username;
    }
  //   setUser(state, {userName, userToken, refreshToken}) {
  //     // 保存用户名跟token
  //     localStorage.setItem('currentUserName', userName);
  //     localStorage.setItem('currentUserToken', userToken);
  //     localStorage.setItem('currentUserRefreshToken', refreshToken);
  //   },
  //   clearUser(state) {
  //     localStorage.clear();
  //   }
  },
  // 3、// 实时监听 state 值的最新状态，注意这里的 getters 可以理解为计算属性
  getters: {
    // 在组件中是通过 this.$store.getters.getUser 来获取
    getUser(state) {
      return state.username;
    }
  },
  // 4、定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数
  actions: {
    // 在组件中是通过 this.$store.dispatch('asyncUpdateUser', user); 来调用 actions
    asyncUpdateUser(context, username) {
      context.commit('updateUser', username);
    }
  }
};
const store = new Vuex.Store(stores);

export default store;

