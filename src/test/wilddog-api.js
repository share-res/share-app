
import test from 'ava'
import supertest from 'supertest'
import Firebase from 'wilddog'

let  itemsRef = new Firebase('https://alex.wilddogio.com/books/')

//const request = supertest.agent(app.listen())
//const request =request(app)
let request = supertest('https://www.wilddog.com/')
test('foo', t => {
    t.pass()
})

test('bar', async t => {
    const bar = Promise.resolve('bar')
    t.is(await bar, 'bar')
})

test('supertest demo', (t) => {
   // const res = await request.get('/')
   //let pos=res.headers.content-type.indexOf('UTF-8');
     request.get('/')
        .expect('Content-Type', /html/)
        //.expect('Content-Length', '15')
        .expect(200)
        .end(function(err, res) {
           if (err) throw err
           console.log(res.headers)
        });
    // t.pass()
})
/*
test('user api post', async (t) => {
	request.post('/users/register')
		//	.set('Authorization','Bearer ' + token)
			.send({
				mobileNum:'123456',
				password:'test'
			})
			.expect(200,()=>{
        t.pass()

      })
})*/