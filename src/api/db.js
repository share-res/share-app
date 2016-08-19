import Wilddog from 'wilddog'
let dbRef = new Wilddog('https://books.wilddogio.com')

let _books = []
let _users = []
/**
 * Check if a value is an object.
 *
 * @param {*} val
 * @return {boolean}
 */
function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

/**
 * Convert wilddog snapshot into a bindable data record.
 *
 * @param {WilddogSnapshot} snapshot
 * @return {Object}
 */
function createRecord (snapshot) {
  var value = snapshot.val()
  var res = isObject(value)
    ? value
    : { '.value': value }
  res['.key'] = snapshot.key()
  //console.log(res)
  return res
}
/**
 * Find the index for an object with given key.
 *
 * @param {array} array
 * @param {string} key
 * @return {number}
 */
function indexForKey (array, key) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]['.key'] === key) {
      return i
    }
  }
  /* istanbul ignore next */
  return -1
}

function bindAsArray (src,array) {
   let source=dbRef.child(src)
   let onAdd = source.on('child_added', function (snapshot, prevKey) {
   let index = prevKey ? indexForKey(array, prevKey) + 1 : 0
    array.splice(index, 0, createRecord(snapshot))

  })

  let onRemove = source.on('child_removed', function (snapshot) {
    let index = indexForKey(array, snapshot.key())
    array.splice(index, 1)

  })

  let onChange = source.on('child_changed', function (snapshot) {
    let index = indexForKey(array, snapshot.key())
    array.splice(index, 1, createRecord(snapshot))

  })

  let onMove = source.on('child_moved', function (snapshot, prevKey) {
    let index = indexForKey(array, snapshot.key())
    let record = array.splice(index, 1)[0]
    let newIndex = prevKey ? indexForKey(array, prevKey) + 1 : 0
    array.splice(newIndex, 0, record)
  })
}

//bindAsArray('books',_books)
export default {
  //books:_books,
  login:async ({email,password}) => {
      return await dbRef.authWithPassword({email,password})
  },
  register:async ({email,password,mobile,location}) => {
     await dbRef.createUser({email,password})
     //cosole.log(d1)
     let authData=await dbRef.authWithPassword({email,password})
     await dbRef.child('users').update({
       [`"${mobile}"`]: {email,location,state:'OK'}
       //[`${uid}`]: {mobile,location,state:'OK'}
     })
     return  authData.uid
   },
  /**
 * changePassword ( credentials )
 *
 * @param {object} credentials  需要包含 email 邮箱 oldPassword旧密码 newPassword 新密码
 * @return {Promise}
 */
  changePassword:async (credentials) => {
      return await dbRef.changePassword(credentials)
  },
  saveBook:async (user,book) => {
      let bookRef = await dbRef.child('books').push({
      title: book.title,
      price: book.price,
      tags: book.tags,
      description:book.description,
      owner_id: user.auth_id,
      state: 'OK'
    })
    return bookRef
  },
 
}
/*
 created: function () {
    let self=this
     dbRef.orderByChild('owner_id').startAt('alex').endAt('alex')
    .once('value', function (snapshot) {
      let book = snapshot.val()
     for(let key in book){
       console.log(key)
       console.log(book[key])
       self.gridData.push(book[key])
     }
     // 
    })
   dbRef.on('child_removed', function (snapshot) {
      self.gridData.$remove(snapshot.val())
    })

  }*/