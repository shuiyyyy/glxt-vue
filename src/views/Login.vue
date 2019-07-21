<template>
    <div>
    <div>
    <h1 class="login-title" style="color:#409EFF;">教务管理信息系统</h1>
    </div>
<div >
    <el-form ref = 'form' :model= 'form' :rules="rules" label-width= '80px;' class="login-box">

        <el-form-item label='账号' prop="username">
            <el-input type= 'text' placeholder= '请输入账号' v-model= 'form.username' />
                </el-form-item>
        <el-form-item label='密码' prop="password">
            <el-input type= 'password' placeholder= '请输入密码' v-model= 'form.password' />
                </el-form-item>
        <el-form-item>
            <el-button type= 'primary' @click= "submitForm('form')" >登录</el-button>
        </el-form-item>
        </el-form>
</div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
          form: {
            username: '',
            password: ''
        },
        rules: {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
        }
      }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              // 编程式导航
            this.$router.push({name: 'Main', params: {username: this.form.username}});
          } else {
           this.$message({
           showClose: true,
           message: '请输入账号或密码',
           type: 'warning'
         });
            return false;
          }
        });
      },
  }
}
</script>

<style lang='scss' scoped>

    .login-box {
        width: 300px;
        margin: 50px auto;
        border: 1px solid #909399;
        padding: 35px;
        border-radius: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .login-title {
        text-align: center;
        margin-top: 150px;
    }
</style>
