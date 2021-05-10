<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    min-width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="时间"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.date"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="事宜"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.thing"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="备注">
        <template slot-scope="scope">
          <el-input v-model="scope.tip"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'EveDialog',
    data() {
      return {
        dialogVisible: false,
        tableData: [],
      };
    },
    methods: {
      init(data) {
        this.dialogVisible = true
        this.tableData = data
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>