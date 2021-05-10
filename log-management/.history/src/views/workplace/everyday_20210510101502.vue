<template>
  <div class="everyday">
    <div>
      <left-nav></left-nav>
    </div>
    <div class="everyday-middle">
      <el-button type="warning" @click="showEveryday(tableData)">修改</el-button>
    </div>
    <div class="everyday-right">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="thing"
          label="事宜"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tip"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
    <el-form></el-form>
    <eve-dialog v-if="showDialog" ref="demoEveDialog"></eve-dialog>
  </div>
</template>

<script>
import LeftNav from "@/components/leftNav";
import EveDialog from "@/components/dialogs/EveDialog";

export default {
  components: {
    LeftNav,
    EveDialog,
  },
  data() {
    return {
      showDialog: false,
      tableData: [{
            date: '6:00--7:00',
            thing: '起床洗漱早饭',
            tip: '一日之计在于晨'
          }, {
            date: '11:00--12:00',
            thing: '准备吃饭',
            tip: '作业写完没？'
          }, {
            date: '16:00--18:00',
            thing: '户外运动',
            tip: '篮球？游泳？骑车？'
          }, {
            date: '22:00--23:00',
            thing: '准备睡觉',
            tip: '今天都干了啥？'
          }]
    }
  },
  methods: {
    showEveryday(data) {
      this.showDialog = true
      this.$nextTick(() => {
        this.$refs.demoEveDialog.init(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.everyday{
  display: flex;
  &-middle{
    margin: 5% 10%;
  }
  &-right{
    // margin-left: 30%;
  }
}
</style>