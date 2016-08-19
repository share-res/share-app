
import db from '../api/db'
export const route = state => {
  return state.route
}
export const allBooks = state => {
  return  state.books.all
}
export const myBooks = state => {
  //console.log(state.user.auth_id)
  for (let d of state.books.all){
   // console.log(d.auth_id)
    if (d.owner_id==state.user.auth_id){
       state.books.my.push(d)
    }
  }
  return state.books.my
}
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}