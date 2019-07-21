<template>
  <div>
			<fieldset>
				<legend>
					课程信息修改
				</legend>
				<div class="form-group">
					<label>课程名称</label>
					<input type="text" v-model="lessonName.name"/>
				</div>
				<div class="form-group">
					<label>任课老师</label>
					<input type="text" v-model="lessonTeacher.name"/>
				</div>
				<div class="form-group">
                    <div class="block">
                      <span class="demonstration">上课时间</span>
                      <el-date-picker
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                      </el-date-picker>
                    </div>
				</div>
				<div class="form-group">
					<label></label>
					<button @click="createPerson">添加课程</button>
				</div>
		</fieldset>
<el-table
   :data="tableData"
   height="250"
   border
   style="width: 100%">
   <el-table-column label="时间">
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
   </el-table-column>
   <el-table-column
     prop="lessonName"
     label="课程名称">
   </el-table-column>
   <el-table-column
     prop="lessonTeacher"
     label="任课老师"
     width="180">
   </el-table-column>
 </el-table>

</div>

</template>

<script>

export default {
  name: 'Adminstrator',
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

      }
  },
  methods:{
      createPerson: function(){
          this.people.push(this.newPerson);
          // 添加完newPerson对象后，重置newPerson对象
          this.newPerson = {name: '', age: 0, sex: 'Male'}
      },
      deletePerson: function(index){
          // 删一个数组元素
          this.people.splice(index,1);
      }
  }
})

}
</script>
