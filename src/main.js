import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import VueUiSemantic from '../static/vue-ui-semantic.common'
import App from './App'
import Home from './components/Home'
import Shop from './components/ShopDemo'

import { currency } from './currency'

Vue.filter('currency', currency)

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(VueUiSemantic)

const router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/shop': {
    component: Shop
  }
 /* '/login': {
    component: Login,
  },*/
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/home'
})
/*
App.$on(LOGIN_PASS,(uid)=>{
    console.log('App got msg')
   //router.go
})*/
router.start(App, 'body')