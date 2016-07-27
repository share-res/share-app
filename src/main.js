import Vue from 'vue'
import VueRouter from 'vue-router'
import VueUiSemantic from '../static/vue-ui-semantic.common'
import App from './App'
import Home from './components/Home'
import Book from './components/Book'
import Bar from './components/Bar'

import { currency } from './currency'

Vue.filter('currency', currency)

Vue.use(VueRouter)
Vue.use(VueUiSemantic)


const router = new VueRouter()

router.map({
  '/home': {
    component: Home,
  },
  '/book/:state': {
    component: Book,
  },
  '/bar': {
    component: Bar,
  },
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/book/0'
})
router.start(App, 'body')