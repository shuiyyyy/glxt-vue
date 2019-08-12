<template>
  <div>
    <h4>已选课程</h4>
    <el-button type="primary" icon="el-icon-refresh" v-on:click="getSelectedLesson"></el-button>
    <el-table :data="selectedLessonList" highlight-current-row stripe style="width: 100%;">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="lessonName" label="课程名称"></el-table-column>
      <el-table-column prop="lessonTeacher" label="任课教师"></el-table-column>
      <el-table-column prop="startTime" label="开始时间"></el-table-column>
      <el-table-column prop="endTime" label="结束时间"></el-table-column>
    </el-table>

    <div style="margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectedLesson',
    data() {
      return {
        // page info
        pageInfo: {
          pageNum: 1,
          pageSize: 10,
          total: 0,
          currentPage: 1,
        },
        selectedLessonList: [],
      }
    },
    mounted() {
      this.getSelectedLesson()
    },
    methods: {
      getSelectedLesson() {
        const me = this;
        this.axiosHttp({
          url: "/home/myLesson",
          method: "get",
          params: {
            pageNum: this.pageInfo.pageNum,
            pageSize: this.pageInfo.pageSize,
          }
        }).then(res => {
          if(res.code === "0" && res.data.length > 0) {
            const data1 = res.data;
            me.selectedLessonList = [];
            data1.forEach(function (one) {
              one.startTime = me.commonUtil.getFormatTime(one.startTime);
              one.endTime = me.commonUtil.getFormatTime(one.endTime);
            })
            me.selectedLessonList = data1;
            me.pageInfo.total = data1.length;
          } else {
            this.$message({
              message: res.msg,
              type: 'error',
            });
          }
        }).catch(res => {
          this.$message({
            message: '获取表格数据失败',
            type: 'error',
          });
        })
      },
      handleSizeChange(val) {
        this.pageInfo.pageSize = val;
      },
      handleCurrentChange(val) {
        this.pageInfo.pageNum = val;
      }
    }
  }
</script>
