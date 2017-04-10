import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import contacts from './modules/contactDemo/contactDemo'
import contactsComplex from './modules/contactDemoComplex/contactDemoComplex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products,
    contacts,
    contactsComplex
  },
  strict: debug
})
