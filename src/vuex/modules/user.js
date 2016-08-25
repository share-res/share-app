import {
  LOGIN_FAILURE,
  LOGIN_PASS,
  USER_REGISTED,
  USER_UPDATEED,
  BOOK_UPDATE_OK
 
} from '../mutation-types'


// initial state
const state = {
  auth_id: null,
  name:'',
  email: '',
  password: '',
  mobile:'',
  location:{}
}
function sync({name,email,password,mobile,location}){
    state.email = email
    state.name = name
    state.password = password
    state.mobile = mobile
    if (!location|| 'string'===typeof location){
        state.location={longitude:113.28, latitude:23.09}
    }
    else{
      state.location = location
    }
}
const mutations = {

  USER_REGISTED(sate, uid,user) {
     state.auth_id = uid
    // console.log(uid)
     sync(user)
     window.router.go('/myBooks')
  },
  USER_UPDATEED(sate, user) {
     state.mobile = user.mobile
     state.name = user.name
     state.location = user.location
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
  },
  [BOOK_UPDATE_OK](state) {
     console.log('BOOK_UPDATE_OK')
  }
}

export default {
  state,
  mutations
}
