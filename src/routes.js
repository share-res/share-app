export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./views/listBooks.vue')
    },
    '/addBook': {
      auth: true,
      name: 'addBook', // 给这条路径加上一个名字
      component: require('./views/addBook.vue')
    },
    '/login': {
      name: 'login',
      component: require('./views/login.vue'),
    },
    '/myBooks': {
     // auth: true,
      name: 'myBooks', 
      component: require('./views/myBooks.vue')
    },
    '/demo': {
      name: 'demo', 
      component: require('./views/Demo')
    },
     '*': {
      component: require('./views/404')
    }

  })
}
