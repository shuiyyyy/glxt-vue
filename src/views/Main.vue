<template>
  <div>
<el-container>
  <el-header >
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
      <router-link to="/main">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
<router-link to="/user/profile">个人信息</router-link>
      </el-menu-item>
      <el-submenu index="3">
       <template slot="title" >我的课程</template>
      <el-menu-item  index="3-1">
          <router-link to="/user/SelectLesson">选择课程</router-link>
          </el-menu-item>
      <el-menu-item index="3-2"><router-link to="/user/SelectedLesson">已选课程</router-link>
          </el-menu-item>
      <el-menu-item index="3-3"><router-link to="/user/QueryAllLesson">查询所有课程</router-link>
          </el-menu-item>
     </el-submenu>
       <el-menu-item index="4" ><router-link to="/user/Adminstrator">管理员课程管理</router-link>
           </el-menu-item>
      <el-menu-item index="5">
      <el-button type="danger" @click= "open">退出</el-button>
      </el-menu-item>
      <el-menu-item >
    <span style="!important; color:black;">ID:shui</span>
      </el-menu-item>

    </el-menu>
    <div class="line"></div>
  </el-header>
  <el-main>
      <h1 class="welcome" style="color:#409EFF;">欢迎使用教务管理信息系统</h1>
  <router-view />
 </el-main>
  <el-footer id= 'footer' ></el-footer>
</el-container>

  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
     return {
          activeIndex: '1',
     };
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
   },
   open() {
  this.$confirm('是否退出登录?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    this.$router.push({
      path: '/login'
    });
  }).catch(() => {
    this.$message({
      type: 'info',
      message: '已取消退出'
    });
  });
}
}
}
</script>

<style scoped>
a {
    text-decoration: none;
};
.welcome {
    text-align: center;
    margin-top: 150px;
}



</style>
