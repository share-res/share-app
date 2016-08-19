export default function (router) {
  router.map({
    '/register': {
      name: 'register',
      component: require('./views/register.vue'),
    },
    '/login': {
      name: 'login',
      component: require('./views/login.vue'),
    },
    '/': {
      name: 'home',
      component: require('./views/listBooks.vue')
    },
    '/myBooks': {
      auth: true,
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
