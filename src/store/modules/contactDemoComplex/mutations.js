
import * as types from './types'
export const mutations = {
  [types.ADD_CONTACT_COMPLEX] (state, { res }) {
    console.log(res.data.data.companyName)
    state.contactsString = res.data.data.companyName
  }
}
