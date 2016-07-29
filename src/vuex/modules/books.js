import {
  RECEIVE_BOOKS
} from '../mutation-types'


// initial state
const state = {
  all: [],
  demo:{title:'my book',description:'this is very fun book for kids!'}

}

// mutations
const mutations = {
  [RECEIVE_BOOKS] (state, data) {
    console.log('RECEIVE_BOOKS')
    state.all = data
  }

}

export default {
  state,
  mutations
}