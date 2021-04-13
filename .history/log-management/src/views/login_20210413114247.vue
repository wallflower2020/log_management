<template>
    <div>
        <h1 @click="goIndex">NICE TO MEET YOU</h1>
        <a href="
        https://www.bilibili.com/">bilibili</a>
    </div>
</template>

<script>

export default({
  method: {
    goIndex() {
      router.push({path: '/index'})
    }
  }
})
</script>

