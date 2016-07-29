import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueFire from 'vuefire'
import VueUiSemantic from '../static/vue-ui-semantic.common'
import { sync } from 'vuex-router-sync'

import store from './vuex/store'

import configRouter from './routes'
import filters from './utils/filters'

import App from './components/App'

import Wilddog  from 'wilddog'
import WildVue  from 'wildvue'

// 在模块化环境中需要使用 user 安装
Vue.use(WildVue)
Vue.use(VueRouter)
//Vue.use(VueFire)
Vue.use(VueUiSemantic)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
const router = new VueRouter( {
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

configRouter(router)
sync(store, router)

router.start(App, 'body') //Vue.extend(
window.router = router
router.go({ name: 'demo'})

