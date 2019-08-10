import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { tableData } from './data/tableData'

export default {

  init() {
    let mock = new MockAdapter(axios)
    // mock success request
    mock.onGet('/home/myLesson').reply(200, tableData.selected)

    mock.onGet('/home/listLesson').reply(200, tableData.all)

    mock.onPost('/home/selectLesson').reply(200, tableData.selectSuccess)

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 登录
    mock.onPost('/login').reply(200, tableData.login)



  }

}
