import {
  LOGIN_FAILURE,
  LOGIN_PASS
} from '../mutation-types'

// initial state
const state = {
  auth_id: null
}

// mutations
const mutations = {
  [LOGIN_PASS] (state, uid) {
    state.auth_id = uid
  },

  [LOGIN_FAILURE] (state) {
     state.auth_id = null
     console.log('LOGIN_FAILURE')
  }
}

export default {
  state,
  mutations
}
