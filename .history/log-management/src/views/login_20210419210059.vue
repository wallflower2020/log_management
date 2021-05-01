<template>
    <div class="login">
        <h1 @click="goIndex">NICE TO MEET YOU</h1>
        <el-input placeholder="请输入账号" class="login-phone"></el-input>
        <el-input placeholder="请输入密码" class="login-password"></el-input>
        <span>退出登录</span>
        <a href="
        https://www.bilibili.com/">bilibili</a>
    </div>
</template>

<script>

export default({
  methods: {
    goIndex() {
      this.$router.push({path: '/index'})
    }
  }
})
</script>

<style>
  .login {
    height: 500px;
    display: flex;
  }
  .login-phone {
    width: 40%;
    margin-bottom: 20px;
  }
  .login-password {
    width: 40%;
    margin-bottom: 20px;
  }
</style>

