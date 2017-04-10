import * as types from './types'
import contactApiVuex from '../../../api/contactAPIForVuex'

export const actions = {
  getContactsStringComplex ({ commit }) {
    contactApiVuex.getPersonInfo().then((res) => {
      console.log(res.data.data.companyName)
      commit(types.ADD_CONTACT_COMPLEX, {res})
    })
  }
}
