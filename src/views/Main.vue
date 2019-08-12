<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

          <el-menu-item index="1">
            <router-link to="/main/welcome">首页</router-link>
          </el-menu-item>

          <el-menu-item index="2">
            <router-link to="/user/profile">个人信息</router-link>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">我的课程</template>
            <el-menu-item index="3-2">
              <router-link to="/lesson/selectedLesson">已选课程</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link to="/lesson/queryAllLesson">查询所有课程</router-link>
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="4">
            <router-link to="/lesson/adminstrator">管理员课程管理</router-link>
          </el-menu-item>

          <el-menu-item index="5">
            <span>当前登录：</span>
            <span>{{currentUserId}}</span>
            <el-button type="danger" size="small" v-on:click="logout">退出</el-button>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer id='footer'></el-footer>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        activeIndex: "1",
        currentUserId: "22",
      };
    },
    mounted() {
      this.currentUserId = sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : "";
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      logout() {
        const me = this;
        this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          me.axiosHttp({
            url: '/logout',
            method: 'post',
            params: {},
          }).then(res => {
            if (res.code === "0") {
              this.$router.push({
                path: '/login'
              });
            } else {
              me.$message({
                type: "error",
                message: "登出失败，请稍后再试",
              })
            }
          }).catch(res => {
            me.$message({
              type: "error",
              message: "登出失败，请稍后再试",
            })
          });
        }).catch(() => {
        });
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

</style>
