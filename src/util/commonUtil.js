import resCode from './resCodeUtil.js'

const commonUtil = {
  /**
   * 时间格式化成 yyyy-MM-dd HH:mm:ss
   * @param time
   * @returns {string}
   */
  getFormatTime: function (time) {
    if (!time) {
      return "--";
    }
    let oDate = new Date(time);
    let oYear = oDate.getFullYear();
    let oMonth = oDate.getMonth() + 1;
    let oDay = oDate.getDate();
    let oHour = oDate.getHours();
    let oMin = oDate.getMinutes();
    let oSen = oDate.getSeconds();
    let oTime = oYear +'-'+ this.setZero(oMonth) + '-'
      + this.setZero(oDay) + ' '
      + this.setZero(oHour) + ':'
      + this.setZero(oMin) + ':'
      + this.setZero(oSen);

    return oTime;
  },

  /**
   * 小于10的个位数在前面补上一个0
   * @param num 需要补0的值
   * @returns {*}
   */
  setZero: function (num){
    if(parseInt(num) < 10){
      num = '0'+num;
    }
  return num;
}
}

export default commonUtil;
