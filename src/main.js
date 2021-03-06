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

Vue.use(VueRouter)
Vue.use(VueUiSemantic)
Vue.use(WildVue)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter( {
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})


configRouter(router)
sync(store, router)
router.beforeEach((transition) => {
  document.body.scrollTop = 0
 // transition.next()

  let auth_id=store.state.user.auth_id
  if (transition.to.auth) {
    if (!!auth_id) {
      transition.next();
    } else {
      const redirect = encodeURIComponent(transition.to.path);
      transition.redirect({ name: 'login', query: { redirect } });
    }
  } else {
    transition.next();
  }
})

router.start(App, 'body') 
window.router = router
router.go({ name: 'about'})

