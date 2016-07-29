<template>

  <ui-sidebar v-ref:my_sidebar css="inverted vertical menu">
     <a class="item" v-link="{path:'/book'}">
          <ui-icon css="large dashboard"></ui-icon>
          登记书籍
      </a>
 
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