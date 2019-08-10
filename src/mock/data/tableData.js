/**
 * 用来模拟一些信息
 */
import Mock from 'mockjs'
const tableData = {
  login: {"code": 0, "msg": "", "data": null},
  selected: {
    "code": 0,
    "msg": "success",
    "data": [
      {
        "lessonId": 1,
        "lessonName": "计算机网络",
        "lessonTeacher": "谢希仁",
        "capacity": 0,
        "startTime": "2019-02-19T21:39:43.000+0000",
        "endTime": "2019-07-01T20:39:54.000+0000"
      },
      {
        "lessonId": 2,
        "lessonName": "操作系统",
        "lessonTeacher": "陈向群",
        "capacity": 0,
        "startTime": "2019-07-01T20:41:18.000+0000",
        "endTime": "2019-11-30T21:41:22.000+0000"
      }
    ]
  },
  all: {"code":0,"msg":"success","data":[{"lessonId":1,"lessonName":"计算机网络","lessonTeacher":"谢希仁","capacity":0,"startTime":"2019-02-19T21:39:43.000+0000","endTime":"2019-07-01T20:39:54.000+0000"},{"lessonId":2,"lessonName":"操作系统","lessonTeacher":"陈向群","capacity":0,"startTime":"2019-07-01T20:41:18.000+0000","endTime":"2019-11-30T21:41:22.000+0000"},{"lessonId":3,"lessonName":"MySQL技术内幕","lessonTeacher":"姜承尧","capacity":31,"startTime":"2019-07-01T20:42:23.000+0000","endTime":"2019-11-29T21:42:27.000+0000"},{"lessonId":4,"lessonName":"JAVA编程思想","lessonTeacher":"陈昊鹏","capacity":0,"startTime":"2019-09-01T20:43:36.000+0000","endTime":"2020-01-01T21:43:46.000+0000"},{"lessonId":5,"lessonName":"JAVA并发编程之美","lessonTeacher":"翟陆续","capacity":0,"startTime":"2019-10-01T20:44:50.000+0000","endTime":"2020-02-01T21:45:06.000+0000"},{"lessonId":6,"lessonName":"Redis设计与实现","lessonTeacher":"黄健宝","capacity":0,"startTime":"2019-07-01T20:46:12.000+0000","endTime":"2019-10-01T20:46:19.000+0000"},{"lessonId":7,"lessonName":"Spring揭秘","lessonTeacher":"王福强","capacity":0,"startTime":"2019-09-01T20:46:55.000+0000","endTime":"2019-12-01T21:47:03.000+0000"},{"lessonId":8,"lessonName":"深入理解JAVA虚拟机","lessonTeacher":"周志明","capacity":0,"startTime":"2019-07-01T20:47:48.000+0000","endTime":"2019-11-01T20:47:56.000+0000"}]},
  selectSuccess: {"code": 0, "msg": "", "data": null},
}

export { tableData }
