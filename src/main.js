import Vue from 'vue'
import VueRouter from 'vue-router'
import VueUiSemantic from '../static/vue-ui-semantic.common'
import App from './App'
import Home from './components/Home'
import Foo from './components/Foo'
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
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
})

router.start(App, 'body')