import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import VueUiSemantic from '../static/vue-ui-semantic.common'
import { sync } from 'vuex-router-sync'

import store from './vuex/store'

import configRouter from './routes'
import filters from './utils/filters'

import App from './components/App'



Vue.use(VueRouter)
Vue.use(VueFire)
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
router.go({ name: 'home', params: { userId: 123 }})

