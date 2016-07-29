import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from 'vuex/logger'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    books,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
