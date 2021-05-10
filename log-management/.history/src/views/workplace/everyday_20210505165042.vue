<template>
  <div class="everyday">
    <div>
      <left-nav></left-nav>
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
          prop="name"
          label="事宜"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注">
        </el-table-column>
      </el-table>
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
      tableData: [{
            date: '6:00--7:00',
            name: '起床洗漱早饭',
            address: '一日之计在于晨'
          }, {
            date: '11:00--12:00',
            name: '准备吃饭',
            address: '作业写完没？'
          }, {
            date: '16:00--18:00',
            name: '户外运动',
            address: '篮球？游泳？骑车？'
          }, {
            date: '22:00--23:00',
            name: '准备睡觉',
            address: '今天都干了啥？'
          }]
    }
  }
}
</script>

<style lang="scss" scoped>
.everyday{
  display: flex;
  &-right{
    margin-left: 30%;
  }
}
</style>