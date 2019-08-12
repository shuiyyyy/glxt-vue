<template>
    <div>
      <el-button @click="show2 = !show2">个人技能</el-button>

      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">唱跳</div>
        </transition>

        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">RAP</div>
        </transition>

        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">篮球</div>
        </transition>
  </div>
</div>
</template>

<script>

export default {
    name: 'UserProfile',
    data: () => ({
     show2: false,

   })
}
</script>
<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
