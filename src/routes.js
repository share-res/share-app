export default function (router) {
  router.map({
    '/register': {
      name: 'register',
      component: require('./views/register.vue'),
    },
     '/setting': {
      auth: true,
      name: 'setting',
      component: require('./views/setting.vue'),
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
     '*': {
      component: require('./views/404')
    }

  })
}
