<template>
  <body id="poster">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm login-container">
      <h3 class="login_title">登录系统</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="text" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="regist">注册</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'panyue',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login () {
      var _this = this
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$axios
            .post('/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                _this.$store.commit('login', _this.loginForm)
                var path = this.$route.query.redirect
                this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
              }
            })
            .catch(failResponse => {
            })
        }
      })
    },
    regist () {
      var _this = this
      _this.$router.replace('/regist')
    }
  }

}
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 200px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  #poster {
    background:url("../assets/aab.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
