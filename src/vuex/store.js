import Vue from 'vue'
import Vuex from 'vuex'
//import auth from './modules/auth'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from 'vuex/logger'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
