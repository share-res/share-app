
import test from 'ava'
import 'babel-polyfill'
import supertest from 'supertest'
import Wilddog from 'wilddog'

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms)
  })
}
/*
//const request = supertest.agent(app.listen())
//const request =request(app)
let request = supertest('http://www.163.com/')
test('supertest demo', (t) => {
   // const res = await request.get('/')
     request.get('/')
        .expect('Content-Type', /html/)
        //.expect('Content-Length', '15')
        .expect(200)
        .end(function(err, res) {
           if (err) throw err
           console.log(res.headers)
        })
    // t.pass()
})
*/
/*
test('foo', t => {
    t.pass()
})

test('bar', async t => {
    const bar = Promise.resolve('bar')
    t.is(await bar, 'bar')
})

*/


/*

function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
 
test('wilddog Auth', async (t) => {
    let  ref = new Wilddog('https://books.wilddogio.com/')
   // ref.onAuth(authDataCallback)
    let authData = ref.getAuth();
    t.is(authData,null)
   try{
    authData = await  ref.authWithPassword({
            email    : 'test@139.com',
            password : '1111'
    })
   }catch(err){
       t.is(err.code,'invalid_password')
   }
   authData = await  ref.authWithPassword({
        email    : 'test@139.com',
        password : 'test'
   })
   t.is(authData.provider,'password')

})
*/
test('wilddog CRUD demo', async (t) => {
  let booksRef = new Wilddog('https://books.wilddogio.com/books')
  let usersRef = new Wilddog('https://books.wilddogio.com/users')
  let topsRef = new Wilddog('https://books.wilddogio.com/tops')
  let authData = await booksRef.authWithPassword({
    email: 'test@139.com',
    password: 'test'
  })
await usersRef.remove()

await booksRef.remove()

await topsRef.remove()

  booksRef.on("value", function (data) {
    console.log("====================")
    console.log(data.val())
  })

  let uid=`${authData.uid}`
  let errcode =await  usersRef.update({
    [`${uid}`]: {
      city: "GZ",
      mobile: '139876878123',
      name: "alex",
      state: 'OK'
    }
  })
t.true(errcode==null)
  let ids=[];
  for (let i = 0; i < 30; i++) {
    let bookRef =await booksRef.push({
      title: 'book ' + i,
      price: 100 + i,
      tags: ['art', 'math'],
      description: 'this is ' + i + ' book!',
      owner_id: authData.uid,
      state: 'OK'
    })
  
    if (i < 10) {
      let key=bookRef.key()
      ids.push(key)
    }
    await topsRef.set(ids)
 
    await sleep(50)
    // await Wilddog.goOffline()
  }
 
})
