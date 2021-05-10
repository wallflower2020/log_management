<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="66%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <el-form :model="formData" ref="formData">
      <el-table
        :data="formData.tableData"
        style="width: 100%">
        <el-table-column
          label="时间"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.date"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="事宜"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.thing"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.tip"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="add" type="primary">添 加</el-button>
      <el-button type="success" @click="submitEve">提 交</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'EveDialog',
    data() {
      return {
        dialogVisible: false,
        formData: {
          tableData: [],
        }
      };
    },
    methods: {
      init(data) {
        this.dialogVisible = true
        this.formData.tableData = data
      },
      add() {
        this.formData.tableData.push(
          {
            date: '',
            thing: '',
            tip: ''
          }
        )
      },
      submitEve() {
        this.dialogVisible = false
        this.formData.tableData.filter(item => item.date !== '')
      },
      handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      }
    }
  };
</script>