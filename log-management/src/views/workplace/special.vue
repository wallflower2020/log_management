<template>
  <div class="special">
    <div>
      <left-nav></left-nav>
    </div>
    <div>
      <el-button type="danger">重 要</el-button>
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
      
    }
  }
}
</script>

<style lang="scss" scoped>
.special {
  display: flex;
}
</style>