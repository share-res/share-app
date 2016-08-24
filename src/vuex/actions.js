import db from '../api/db'
import * as types from './mutation-types'


export const register = async ({ dispatch },user) => {
  console.log('register',user.name) 
  let uid=await db.register(user)
  dispatch(types.USER_REGISTED,uid,user)
}
export const updateUser = async ({ dispatch },user_id,user) => {
  await db.updateUser(user_id,user)
  dispatch(types.USER_UPDATEED,user)
}

export const requestBook = async ({ dispatch },book,mobile) => {
 // console.log(book)
  db.requestBook(book['.key'],mobile)
//  dispatch(types.USER_REGISTED,uid,user)

}
export const confirmBook = async ({ dispatch },book,state) => {
  console.log(state)
  db.confirmBook(book['.key'],state)
//  dispatch(types.USER_REGISTED,uid,user)

}
export const login = async ({ dispatch, state}, user) => {
  try {
    let data = await db.login(user)
// console.log(user)
    let userInfo=await db.fetchUser(data.uid)
    console.log(userInfo)
    if (!data)
      dispatch(types.LOGIN_FAILURE)
    else {
      let redirect = decodeURIComponent(state.route.query.redirect || '/')
      dispatch(types.LOGIN_PASS, data.uid,userInfo, redirect)
    }
  } catch (ex) {
    console.log(ex)
    dispatch(types.LOGIN_FAILURE)
  }
}

export const  saveBook =(user,book)=>{
  //console.log(book.title)
  //book.owner=user.name
  db.saveBook(user,book)
 
  //console.log(user.auth_id)
  
}
