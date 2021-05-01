<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
      <el-menu-item index="1" @click="goIndex">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" @click="goEveryday">日常</el-menu-item>
        <el-menu-item index="2-2" @click="goCommission">代办</el-menu-item>
        <el-menu-item index="2-3">特殊</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">记录</template>
          <el-menu-item index="2-4-1">随笔</el-menu-item>
          <el-menu-item index="2-4-2">日记</el-menu-item>
          <el-menu-item index="2-4-3">总结</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.bilibili.com/" target="_blank">经常访问</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex() {
      this.$router.push({path: '/'})
    },
    goEveryday() {
      this.$router.push({path: '/everyday'})
    },
    goCommission() {
      this.$router.push({path: '/commission'})
    }
  }
}
</script>