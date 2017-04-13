/**
 * Created by admin on 2017/4/12.
 */
import HttpUtil from '@/common/HttpUtil'

const channelAPI = {
  /**
   * 绑定渠道列表查询
   */
  getAllChannel () {
    let postUrl = process.env.DOMAIN + '/bshop/channel/shop/list'
    return HttpUtil.get(postUrl)
  }
}
export default channelAPI
