import shop from '../api/shop'
import * as types from './mutation-types'
import Wilddog from 'wilddog'
let dbRef = new Wilddog('https://books.wilddogio.com')

export const getMyBooks = ({ dispatch }) => {
    dispatch(types.USER_GETBOOKS)
 
}

export const updateUserInfo = ({ dispatch,state }, user) => {
    dispatch(types.USER_UPDATEED,user)
    login({dispatch,state},user)
  
}
export const login = ({ dispatch ,state},user) => {
  dbRef.authWithPassword(user,
    (err,data) => {
      if(err)
         dispatch(types.LOGIN_FAILURE)
      else{
         // console.log(state.route)
          let redirect=decodeURIComponent(state.route.query.redirect || '/')
          dispatch(types.LOGIN_PASS,data.uid,redirect)
 
      }
       
    }
  )
}

export const addToCart = ({ dispatch }, product) => {
  if (product.inventory > 0) {
    dispatch(types.ADD_TO_CART, product.id)
  }
}

export const checkout = ({ dispatch, state }, products) => {
  const savedCartItems = [...state.cart.added]
  dispatch(types.CHECKOUT_REQUEST)
  shop.buyProducts(
    products,
    () => dispatch(types.CHECKOUT_SUCCESS),
    () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
  )
}

export const getAllProducts = ({ dispatch }) => {
  shop.getProducts(products => {
    dispatch(types.RECEIVE_PRODUCTS, products)
  })
}
