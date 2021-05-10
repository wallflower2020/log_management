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
            date: '6：00--7：00',
            name: '起床洗漱早饭',
            address: '一日之计在于晨'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
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