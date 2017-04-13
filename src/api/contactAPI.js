import HttpUtil from '@/common/HttpUtil'
import Config from '@/common/config'

const contactApi = {
  /**
   * 个人详情  (demo)
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  getPersonInfo (params) {
    let postUrl = Config.mock ? '../static/mock/personInfo.json' : process.env.DOMAIN + '/bshop/msg/product/list?page=1&size=10&userId=83fcb7323c9a47de98403be7cedb9433'
    return HttpUtil.get(postUrl, params)
  },
  postTest (params) {
    let postUrl = process.env.DOMAIN + '/bshop/contacts/person/add'
    return HttpUtil.post(postUrl, params)
  },
  /**
   * 查看交易详情 表格 (demo)
   * @return {[type]} [description]
   */
  getDealDetailList (params) {
    let postUrl = Config.mock ? 'static/mock/dealList.json' : process.env.DOMAIN + '/bshop/purchaser/detailList'
    return HttpUtil.get(postUrl, params)
  }
}
export default contactApi
