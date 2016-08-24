import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import createLogger from 'vuex/logger'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    user

  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
