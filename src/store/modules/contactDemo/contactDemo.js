import contactApiVuex from '../../../api/contactAPIForVuex'

// mutations type
const ADD_CONTACT = 'ADD_CONTACT'
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
      commit(ADD_CONTACT, {res})
    })
  }
}

// mutations
const mutations = {
  [ADD_CONTACT] (state, { res }) {
    state.contactsString = res.data.message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
