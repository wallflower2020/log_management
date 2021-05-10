<template>
  <el-row class="tac">
     <el-col :span="5" class="left">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" @click="goEveryday">
        <i class="el-icon-s-claim"></i>
        <span slot="title">日常</span>
      </el-menu-item>
      <el-menu-item index="2" @click="goCommission">
        <i class="el-icon-loading"></i>
        <span slot="title">代办</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goSpecial">
        <i class="el-icon-warning"></i>
        <span slot="title">重要</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>记录</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">随笔</el-menu-item>
          <el-menu-item index="1-2">日记</el-menu-item>
          <el-menu-item index="1-3">总结</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
  </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goEveryday() {
        this.$router.push({path: '/everyday'})
      },
      goCommission() {
        this.$router.push({path: '/commission'})
      },
      goSpecial() {
        this.$router.push({path: '/special'})
      },
    }
  }
</script>

<style lang="scss" scoped>
.tac{
  height: auto;
  .left{
  display: inline-block;
  width: 200px;
  height: 700px;
  border-right: solid 2px #e6e6e6;
}
}
</style>