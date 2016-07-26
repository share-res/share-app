<template>
  <ui-sidebar v-ref:my_sidebar css="inverted vertical menu">
    <ui-item type="a" href="#!/bar?flag=0">可借阅</ui-item>
    <ui-item type="a" href="#">主题分类</ui-item>
  </ui-sidebar>
  <ui-pusher>
    <ui-menu css="top fixed">
      <ui-container>
        <a class="item" @click="onSidebar()">
          <ui-icon css="large content"></ui-icon>
        </a>
        <a class="item" v-link="{ path: '/home' }">
          <ui-icon css="large home"></ui-icon>
        </a>
        <a class="item" v-link="{ path: '/foo' }">
          <ui-icon css="large dashboard"></ui-icon>
        </a>
      </ui-container>
    </ui-menu>
    <br>
    <br>
    <br>
    <ui-container>
      <router-view>
      </router-view>
    </ui-container>
  </ui-pusher>
</template>

<script>
//import 'babel-polyfill'
import store from './vuex/store'

export default {
  replace: false,
  store,
  methods: {
    onSidebar() {
      this.$refs.my_sidebar.toggle();
    },
  }
}
</script>