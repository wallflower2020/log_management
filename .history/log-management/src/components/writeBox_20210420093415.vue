<template>
  <el-form>
    <el-form-item>
      <u-editor v-model="dataForm.summary"></u-editor>
    </el-form-item>
  </el-form>
</template>

<script>
import UEditor from '@/components/common/UEditor'

export default {
  components: {UEditor},
  data() {
    return {
      dataForm: {
        summary:''
      },
    }
  }
}
</script>
