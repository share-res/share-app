export default function (router) {
  let Home=require('./components/Home/index.vue')
  router.map({
 /*   '/': {
      component: Home
    },*/
     '/home/:userId': {
      name: 'home', // 给这条路径加上一个名字
      component: Home
    },
    '/demo': {
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
