import Wilddog from 'wilddog'
import LRU from 'lru-cache'
let dbRef = new Wilddog('https://books.wilddogio.com')
const cache =LRU({
    max: 1000,
    maxAge: 1000 * 60 * 60 // 60 min cache
})


function fetch (child) {
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      dbRef.child(child).once('value', snapshot => {
        const val = snapshot.val()
        console.log(val)
        // mark the timestamp when this item is cached
        val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

export default {
  //books:_books,
  login:async ({email,password}) => {
      return await dbRef.authWithPassword({email,password})
  },
  register:async ({name,email,password,mobile,location}) => {
    // console.log('db',name) 
     await dbRef.createUser({email,password})
     let authData=await dbRef.authWithPassword({email,password})
     //console.log(authData.uid)
     let uid=authData.uid
      await dbRef.child('users').update({
       //[`"${mobile}"`]: {email,location,state:'OK'}
       [`${uid}`]: {name,mobile,location,state:'OK'}
     })
     return uid
   },
   updateUser:async (user_id,{name,mobile,location}) => {
     let uid=user_id
     return await dbRef.child(`users/${uid}`).update({
            name:name,
            mobile: mobile,
            location:location
     })
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
  updateBook:async (book) => {
    let id=book['.key']
     let key=`books/${id}`
     console.log('api',key)
     let err = await dbRef.child(key).update({
      title: book.title,
      author:book.author,
      tags: book.tags,
      description:book.description
    })
    return err
  },
  saveBook:async (user,book) => {
      let bookRef = await dbRef.child('books').push({
      title: book.title,
      tags: book.tags,
      description:book.description,
      author:book.author,
      owner_id: user.auth_id,
      owner:user.name,
      ownerMobile:user.mobile,
      location:user.location,
      requesterMobile:'',
      state: '可借'
    })
    return bookRef
  },
  fetchUser: (uid)=>{
    let key=`users/${uid}`
    //console.log(key)
    return fetch(key)
  },
  requestBook: (bookid,requester,mobile)=>{
    let key=`books/${bookid}`
    dbRef.child(key).update({
       state: '申请',
       requester:requester,
       requesterMobile:mobile
     })
  },
   confirmBook: (bookid,result)=>{
    let key=`books/${bookid}`
    let d={state:result=='借出'?'借出':'可借'}
    if ('借出'===d.state)
        d.recDate=new Date()
    else {
      d.recDate=null
      d.requesterMobile=''
    }
    dbRef.child(key).update(d)
   }
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