<template>
  <div>
    <h1 class="login-title" style="color:#409EFF;">教务管理信息系统</h1>
    <div>
      <el-form ref='form' :model='form' :rules="rules" label-width='80px;' class="login-box">

        <el-form-item label='账号' prop="userId">
          <el-input type='text' placeholder='请输入账号' v-model='form.userId'/>
        </el-form-item>
        <el-form-item label='密码' prop="password">
          <el-input type='password' placeholder='请输入密码' v-model='form.password'/>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click="submitForm('form')">登录</el-button>
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
          userId: '',
          password: ''
        },
        rules: {
          userId: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          const me = this; // 避免axois请求之后this undefined
          if (valid) {
            me.axiosHttp({
              url: '/login',
              method: 'post',
              params: {
                userId: this.form.userId,
                password: this.form.password,
              },
            }).then(res => {
              if (res.code === "0") {
                if (document.cookie) {
                  let cookieStr = document.cookie;
                  let cookieArr = cookieStr.split("=");
                  sessionStorage.setItem(cookieArr[0], cookieArr[1]);
                }
                sessionStorage.setItem('userId', me.form.userId);
                me.$router.push('/main/welcome');
              } else if (res.code === "500217") { // 重复登录
                if (document.cookie) {
                  let cookieStr = document.cookie;
                  let cookieArr = cookieStr.split("=");
                  sessionStorage.setItem(cookieArr[0], cookieArr[1]);
                }
                sessionStorage.setItem('userId', me.form.userId);
                me.$router.push('/main/welcome')
              } else {
                me.$message({
                  message: res.msg,
                  type: 'error',
                });
              }
            }).catch(res => {
              me.$message({
                message: '登录失败，请稍后再试',
                type: 'error'
              });
            });
          } else {
            me.$message({
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
