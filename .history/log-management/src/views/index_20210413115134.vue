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
  methods: {
    goLogin() {
      this.$router.push({path: '/HelloWorld'})
    }
  }
})
</script>