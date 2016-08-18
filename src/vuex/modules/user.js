import {
  LOGIN_FAILURE,
  LOGIN_PASS
} from '../mutation-types'
import Wilddog from 'wilddog'

// initial state
const state = {
  auth_id: null,
  email: '',
  password: '',
  books: []

}

let dbRef = new Wilddog('https://books.wilddogio.com/books')

// mutations
const mutations = {
  USER_GETBOOKS(state) {
    state.books=[]
    let mybooks = dbRef.orderByChild('owner_id')
      .startAt(state.auth_id)
      .endAt(state.auth_id)
    mybooks.on('child_added', function (snapshot) {
      let book = snapshot.val()
      book.key = snapshot.key()
      state.books.push(note)

    })
    mybooks.on('child_removed', function (snapshot) {
      state.books.$remove(snapshot.val())
    })
  },
  USER_UPDATEED(sate, user) {
    state.email = user.email
    state.password = user.password
    //console.log(state.email)

  },
  [LOGIN_PASS](state, uid, redirect) {
    state.auth_id = uid
    console.log(state.auth_id)
    // window.router.go({ name: 'demo'})
    //$route.query
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    const expires = d.toGMTString();
    document.cookie = `token=${uid};expires=${expires}`;
    window.router.go(redirect);

    // window.router.go('myBooks')
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
