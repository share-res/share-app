import shop from '../api/shop'
import db from '../api/db'
import * as types from './mutation-types'


export const register = async ({ dispatch },user) => {
  let uid=await db.register(user)
  dispatch(types.USER_REGISTED,uid,user)

}


export const login = async ({ dispatch, state}, user) => {
  try {
    let data = await db.login(user)
    if (!data)
      dispatch(types.LOGIN_FAILURE)
    else {
      let redirect = decodeURIComponent(state.route.query.redirect || '/')
      dispatch(types.LOGIN_PASS, data.uid,user, redirect)
    }
  } catch (ex) {
    console.log(ex)
    dispatch(types.LOGIN_FAILURE)
  }
}

export const  saveBook =(user,book)=>{
  //console.log(book.title)
  db.saveBook(user,book)
 
  //console.log(user.auth_id)
  
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
