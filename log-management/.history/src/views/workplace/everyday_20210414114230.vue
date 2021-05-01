<template>
  <div>
    <left-nav></left-nav>
    <el-calendar v-model="value">
    </el-calendar>
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