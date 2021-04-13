<template>
    <div>
        <h1 @click="goLogin">NICE TO MEET YOU</h1>
        <el-button>默认按钮</el-button>
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