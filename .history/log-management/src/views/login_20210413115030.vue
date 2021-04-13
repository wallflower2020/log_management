<template>
    <div>
        <h1>NICE TO MEET YOU</h1>
        <span @click="goIndex">退出登录</span>
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

