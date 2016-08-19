import {
  LOGIN_FAILURE,
  LOGIN_PASS
} from '../mutation-types'


// initial state
const state = {
  auth_id: null,
  email: '',
  password: '',
  mobile:'',
  location:''
}
function sync({email,password,mobile,location}){
    state.email = email
    state.password = password
    state.mobile = mobile
    state.location = location
}
const mutations = {

  USER_REGISTED(sate, uid,user) {
     state.auth_id = uid
     sync(user)
     window.router.go('/myBooks')
  },
  [LOGIN_PASS](state, uid,user, redirect) {
    state.auth_id = uid
    sync(user)
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    const expires = d.toGMTString();
    document.cookie = `token=${uid};expires=${expires}`;
    window.router.go(redirect);
  },

  [LOGIN_FAILURE](state) {
    state.auth_id = null
    console.log('LOGIN_FAILURE')
  }
}

export default {
  state,
  mutations
}
