import shop from '../api/shop'

import * as types from './mutation-types'
/*
export const login = ({ dispatch }, email,pwd) => {
  auth.login(email,pwd,
    (err,data) => {
      if(err)
         dispatch(types.LOGIN_FAILURE)
      else
        dispatch(types.LOGIN_PASS,data.uid)
    }
  )
}
*/
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
