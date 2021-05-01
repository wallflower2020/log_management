<template>
  <div>  
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'ueditor',
    data () {
      return {
        editor: null
      }
    },
    props: {
      value:{
        type:String,
        default:''
      },
      config:{
        type:Object
      }
    },
    mounted () {
      const _this = this
      window.UE.delEditor('editor');
      this.editor = window.UE.getEditor('editor', this.config)   // 初始化UE
      this.editor.addListener('ready', function () {               
        _this.editor.setContent(_this.value)                     // 载完成后，放入内容      
      })
    },
   
    methods: {
      getUEContent () {                                          // 获取编辑器内容方法
        return this.editor.getContent()
      },
      destroyed () {                                               // 销毁编辑器
        this.editor.destroy()
      }
    }
  }
</script>