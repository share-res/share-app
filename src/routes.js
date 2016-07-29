export default function (router) {
  let Home=require('./components/Home/index.vue')
  router.map({

     '/home/:tag': {
      name: 'home', // 给这条路径加上一个名字
      component: Home
    },
    '/book': {
      name: 'book', // 给这条路径加上一个名字
      component: require('./components/Home/AddBook.vue')
    },
    '/demo': {
      name: 'demo', 
      component: require('./components/Demo/index.vue')
    },
     '*': {
      component: require('./components/NotFound.vue')
    }
 /*   '/login': {
      name: 'login',
      component: require('./components/Login/index.vue')
    },
    '/settings': {
      name: 'settings',
      component: require('./components/Settings/index.vue')
    },
    '/article/:aid':{
      name: 'article',
      component: require('./components/Article/index.vue')
    },*/
  })
}
