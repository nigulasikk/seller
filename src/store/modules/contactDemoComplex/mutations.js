
import * as types from './types'
export const mutations = {
  [types.ADD_CONTACT_COMPLEX] (state, { res }) {
    state.contactsString = res.data.message
  }
}
