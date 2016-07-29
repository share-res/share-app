<template>
    <ui-menu css="top fixed">
      <ui-container>
        <a class="item" @click="onSidebar()">
          <ui-icon css="large content"></ui-icon>
        </a>
        <a class="item" v-link="{ name: 'home',params:{tag:'art'} }">
          <ui-icon css="large home"></ui-icon>
        </a>
        <a class="item" v-link="{path:'/demo'}">
          <ui-icon css="large dashboard"></ui-icon>
        </a>
      </ui-container>
    </ui-menu>
    <br>
    <br>
    <br>
</template>
<script>
export default {
  methods: {
     onSidebar() {
       this.$dispatch('expand-sidebar')
      
    }
  }
}
</script>