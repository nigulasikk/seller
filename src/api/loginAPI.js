import HttpUtil from '@/common/HttpUtil'
import Config from '@/common/config'

const api = {
  /**
   *  获取加密RSA PublicKey
   * @return {[type]} [description]
   */
  getRSAPublicKey (params) {
    let postUrl = Config.mock ? 'static/mock/dealList.json' : process.env.DOMAIN + '/bshop/login/key/get'
    return HttpUtil.get(postUrl, params)
  },
  login (params) {
    let postUrl = process.env.DOMAIN + '/bshop/login'
    return HttpUtil.post(postUrl, params)
  }
}
export default api
