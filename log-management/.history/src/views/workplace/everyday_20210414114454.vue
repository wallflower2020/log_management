<template>
  <div class="everyday">
    <div>
      <left-nav></left-nav>
    </div>
    <div>
      <el-calendar v-model="value">
      </el-calendar>
    </div>
  </div>
</template>

<script>
import LeftNav from "@/components/leftNav";

export default {
  components: {
    LeftNav
  },
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.everyday{
  display: inline-block;
}
</style>