<template>

  <ui-sidebar v-ref:my_sidebar css="inverted vertical menu">
    <ui-item type="a" href="#!/home/123">可借阅</ui-item>
    <ui-item type="a" href="#!/demo">主题分类</ui-item>
  </ui-sidebar>
  <ui-pusher>
    <navbar></navbar>
    <router-view>
    </router-view>
  </ui-pusher>
</template>

<script>
import store from '../vuex/store'
import Navbar from './Navbar'
export default {
  replace: false,
  store,
  components: { Navbar },
  events: {
    'expand-sidebar': function () {
      this.$refs.my_sidebar.toggle()
    }
  }
}
</script>