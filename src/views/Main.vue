<template>
  <div>
<el-container>
  <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">
个人信息
      </el-menu-item>
      <el-submenu index="3">
       <template slot="title">我的课程</template>
      <el-menu-item index="3-1">选择课程</el-menu-item>
      <el-menu-item index="3-2">已选课程</el-menu-item>
      <el-menu-item index="3-3">查询所有课程</el-menu-item>
      </el-submenu>
       <el-menu-item index="6" disabled>管理员课程管理</el-menu-item>
      <el-menu-item index="7">
      <el-button type="danger" @click= "open">退出</el-button>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
  <el-footer id= 'footer' ></el-footer>
</el-container>

  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
     return {
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
    this.$message({
      type: 'success',
      message: '成功退出!'
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


</style>
