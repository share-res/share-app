import Wilddog from 'wilddog'
import { EventEmitter } from 'events'


const api = new Wilddog('https://books.wilddogio.com/')

api.authWithPassword({
    email: 'test@139.com',
    password: 'test'
}).then((auth)=>{
  console.log('login pass:',auth.uid)
})
const itemsCache = Object.create(null)
const store = new EventEmitter()
const itemsPerPage = store.itemsPerPage = 5

var topIds = []

export default store


api.child('tops').on('value', snapshot => {
   topIds =  snapshot.val()
   console.log(topIds)
   store.fetchItems(topIds)
   //store.emit('tops-updated')
})


store.fetchItem = id => {
  return new Promise((resolve, reject) => {
    if (itemsCache[id]) {
      console.log("get cache book:",id)
      resolve(itemsCache[id])
    } else {
      console.log("fetch for:",id)
      api.child('books/' + id).once('value', snapshot => {
        const book = itemsCache[id] = snapshot.val()
        console.log("get book:")
        console.log(book)
        resolve(book)
      }, reject)
    }
  })
}


store.fetchItems = ids => {
  if (!ids||!ids.length==0) {
    console.log('store.fetchItems error')
    return Promise.resolve([])
  } else {
    return Promise.all(ids.map(id => store.fetchItem(id)))
  }
}


/**
 * Fetch items for the given page.
 *
 * @param {Number} page
 * @return {Promise}
 */

store.fetchItemsByPage = page => {
  //const start = (page - 1) * itemsPerPage
 // const end = page * itemsPerPage
  //const ids = topIds.slice(start, end)
  console.log('fetchItemsByPage:',page)
  console.log(topIds)
  return store.fetchItems(topIds)
}

/**
 * Fetch a user data with given id.
 *
 * @param {Number} id
 * @return {Promise}
 */

store.fetchUser = id => {
  return new Promise((resolve, reject) => {
    api.child('users/' + id).once('value', snapshot => {
      resolve(snapshot.val())
    }, reject)
  })
}