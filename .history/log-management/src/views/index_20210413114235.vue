<template>
    <div>
        <h1 @click="goLogin">NICE TO MEET YOU</h1>
        <a href="
        http://fanyi.youdao.com/">youdao</a>
    </div>
</template>

<script>

export default({
  method: {
    goLogin() {
      router.push({path: '/login'})
    }
  }
})
</script>