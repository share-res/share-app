
import test from 'ava'
import supertest from 'supertest'
import Firebase from 'wilddog'

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
    let  ref = new Firebase('https://books.wilddogio.com/')
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
    let  itemsRef = new Firebase('https://books.wilddogio.com/')
/*    itemsRef.on("value", function(data) {
       console.log("====================")
       console.log(data.val())
    })*/
   let authData=await  itemsRef.authWithPassword({
        email    : 'test@139.com',
        password : 'test'
   })
   await itemsRef.remove()

   console.log("Insert a book")
   let bookRef=itemsRef.push({
        title: 'book demo',
        price: 120,
        tags:['art','XX'],
        owner_id:authData.uid,
        state:'OK'
    })
   console.log(bookRef.key())
   let errcode= await  bookRef.child("owner").set({
      city: "GZ",
      mobile:'139876878123',
      name: "alex"
   })
   t.true(!errcode)
   errcode= await bookRef.update({
       "city": "SZ"
   })
   t.true(!errcode)
   await sleep(500)

  // await Firebase.goOffline()
   authData=await  bookRef.authWithPassword({
        email    : 'lsj178@139.com',
        password : '1234'
   })
   let authData2 = itemsRef.getAuth();
   t.is(authData2.uid,authData.uid)
   await bookRef.update({title:'UPDATE'})
  // await Firebase.goOffline()
})
