<template>
    <div>
      <hello-world></hello-world>
      <h1>NICE TO MEET YOU</h1>
      <el-button @click="goLogin">退出登录</el-button>
      <!-- <a href="
      http://fanyi.youdao.com/">youdao</a>
    </div> -->
</template>

<script>
import HelloWorld from "@/components/HelloWorld"

export default({
  components: {
    HelloWorld
  },
  methods: {
    goLogin() {
      this.$router.push({path: '/login'})
    }
  }
})
</script>