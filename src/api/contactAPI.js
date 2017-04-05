import HttpUtil from '@/common/HttpUtil'
import Config from '@/common/domain'

const contactApi = {
  /**
   * 个人详情
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  getPersonInfo (params) {
    let postUrl = Config.mock ? '../static/mock/personInfo.json' : Config.b2b + '/bshop/msg/product/list?page=1&size=10&userId=83fcb7323c9a47de98403be7cedb9433'
    return HttpUtil.get(postUrl, params)
  },
  /**
   * 查看交易详情 表格
   * @return {[type]} [description]
   */
  getDealDetailList (params) {
    let postUrl = Config.mock ? 'static/mock/dealList.json' : Config.b2b + '/bshop/purchaser/detailList'
    return HttpUtil.get(postUrl, params)
  }
}
export default contactApi
