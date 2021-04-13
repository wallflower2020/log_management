<template>
    <div>
        <h1 @click="goIndex">NICE TO MEET YOU</h1>
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

