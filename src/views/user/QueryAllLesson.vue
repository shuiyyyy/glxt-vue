<template>
  <div>
    <h4>所有课程</h4>
    <el-button type="primary" size="small" icon="el-icon-refresh" v-on:click="getAllLesson"></el-button>
    <el-table :data="allLessonList" highlight-current-row stripe style="width: 100%;">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="lessonName" label="课程名称"></el-table-column>
      <el-table-column prop="lessonTeacher" label="任课教师"></el-table-column>
      <el-table-column prop="startTime" label="开始时间"></el-table-column>
      <el-table-column prop="endTime" label="结束时间"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button v-on:click="detail(scope.row)" type="text" size="small">详情</el-button>
          <el-button v-on:click="select(scope.row)" type="text" size="small">选课</el-button>
        </template>
      </el-table-column>
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
    name: 'QueryAllLesson',
    data() {
      return {
        // page info
        pageInfo: {
          pageNum: 1,
          pageSize: 10,
          total: 0,
          currentPage: 1,
        },
        allLessonList: [],
      }
    },
    mounted() {
      this.getAllLesson()
    },
    methods: {
      detail(row) {
      },
      select(row) {
        let me = this; // 避免axois请求之后this undefined
        this.axiosHttp({
          url: '/home/selectLesson',
          method: 'post',
          params: {
            lessonId: row.lessonId,
          },
        }).then(res => {
          if (res.code === 0) {
            me.$message({
              message: "选课成功！",
              type: "success",
            });
          } else {
            me.$message({
              message: res.msg,
              type: 'error',
            });
          }
        }).catch(res => {
          me.$message({
            message: "选课失败，请重试！",
            type: "error",
          });
        });
      },
      getAllLesson() {
        let me = this;
        this.axiosHttp({
          url: "/home/listLesson",
          method: "get",
          params: {
            pageNum: this.pageInfo.pageNum,
            pageSize: this.pageInfo.pageSize,
          },
        }).then(res => {
          if(res.code === 0 && res.data.length > 0) {
            const data1 = res.data;
            me.allLessonList = [];
            data1.forEach(function (one) {
              one.startTime = me.commonUtil.getFormatTime(one.startTime);
              one.endTime = me.commonUtil.getFormatTime(one.endTime);
            })
            me.allLessonList = data1;
            me.pageInfo.total = data1.length;
          } else {
            me.$message({
              message: '获取表格数据失败',
              type: 'error',
            });
          }
        }).catch(res => {
          me.$message({
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
      },
    }
  }
</script>
