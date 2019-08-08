<template>
  <div >
    <h3 class="welcome" style="color:#409EFF;">所有课程</h3>
    <el-table
   :data="tableData"
   stripe
   style="width: 100%">
   <el-table-column
     prop="startTime"
     label="开始时间"
     width="180">
   </el-table-column>
   <el-table-column
     prop="endTime"
     label="结束时间"
     width="180">
   </el-table-column>
   <el-table-column
     prop="lessonName"
     label="课程名称"
     width="180">
   </el-table-column>
   <el-table-column
     prop="lessonTeacher"
     label="任课老师"
     >
   </el-table-column>
 </el-table>
 <!-- 分页 -->
    <el-footer id= 'footer' >
<div class="block">
  <span class="demonstration"></span>
  <el-pagination
  class="pagination"
  :page-size="10"
  :pager-count="5"
  layout="prev, pager, next"
  :total="100">>
  </el-pagination>
</div>
</el-footer>
  </div>
</template>

<script>

export default {
  name: 'QueryAllLesson',
  data() {
      return {
          tableData: [
              {
             lessonName: "操作系统",
             lessonTeacher: "陈向群",
             startTime: "2019-07-01",
             endTime: "2019-11-30"
         },
         {
             lessonName: "JAVA编程思想",
             lessonTeacher: "陈昊鹏",
             startTime: "2019-09-01",
             endTime: "2020-01-01"
         },
         {
             lessonName: "JAVA并发编程之美",
             lessonTeacher: "翟陆续",
             startTime: "2019-10-01",
             endTime: "2020-02-01"
         }
          ]
      }
  }

}
</script>
<style scoped>
.pagination {
    text-align: center;
}

</style>
