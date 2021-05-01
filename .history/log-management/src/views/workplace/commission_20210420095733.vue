<template>
  <div class="everyday">
    <div>
      <left-nav></left-nav>
    </div>
    <div>
      <u-editor></u-editor>
    </div>
  </div>
</template>
<script>
import UEditor from '../../components/UEditor.vue'

export default {
  components: { UEditor },
  
  data() {
    return {
      ueditor: {
          value: '', //编辑器默认内容
          config: { //设置编辑器宽高 
            initialFrameWidth: 1000,
            initialFrameHeight: 320
          }
        }
    }
  }
}
</script>