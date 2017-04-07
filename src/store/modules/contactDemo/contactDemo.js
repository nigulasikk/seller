import contactApiVuex from '../../../api/contactAPIForVuex'
import * as types from '../../mutation-types'

// initial state
const state = {
  contactsString: ''
}

// getters
const getters = {
  contactsString: state => state.contactsString
}

// actions
const actions = {
  getContactsString ({ commit }) {
    contactApiVuex.getPersonInfo().then((res) => {
      console.log(res.data.data.companyName)
      commit(types.ADD_CONTACT, {res})
    })
  }
}

// mutations
const mutations = {
  [types.ADD_CONTACT] (state, { res }) {
    console.log(res.data.data.companyName)
    state.contactsString = res.data.data.companyName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
