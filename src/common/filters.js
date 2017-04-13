import Vue from 'vue'
/**
 * 毫秒值 转换成 年月日
 * @param  {Date}   value) {               let time [description]
 * @return {[type]}        [description]
 */
Vue.filter('time-formater-no-hour', (value) => {
  // 返回处理后的值
  let time = new Date(value)
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  return year + '-' + month + '-' + day
})
