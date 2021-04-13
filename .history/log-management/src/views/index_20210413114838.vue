<template>
    <div>
        <h1>NICE TO MEET YOU</h1>
        <el-button @click="goLogin">默认按钮</el-button>
        <a href="
        http://fanyi.youdao.com/">youdao</a>
    </div>
</template>

<script>

export default({
  method: {
    goLogin() {
      this.$router.push({path: '/login'})
    }
  }
})
</script>