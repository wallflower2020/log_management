<template>
    <div>
      <el-form  class="login" :model="formData">
        <h1 @click="goIndex">NICE TO MEET YOU</h1>
        <el-input placeholder="请输入账号" class="login-phone" :v-model="formData.account"></el-input>
        <el-input placeholder="请输入密码" class="login-password" :v-model="formData.password"></el-input>
        <span @click="goIndex">登录</span>
        <!-- <a href="
        https://www.bilibili.com/">bilibili</a> -->
      </el-form>
    </div>
</template>

<script>

export default({
  data: {
    formData:{
      account:'1',
      password:'1',
    }
  },
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
    display: inline-block;
  }
  .login-phone {
    display: flex;
    /* width: 40%; */
    margin-bottom: 20px;
  }
  .login-password {
    display: flex;
    /* width: 40%; */
    margin-bottom: 20px;
  }
</style>

