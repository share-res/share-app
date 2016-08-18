<template>
    <ui-menu css="top fixed">
      <ui-container>
        <a class="item" v-link="{ name: 'home',query:{tag:'all'} }">
          <ui-icon css="large home"></ui-icon>
        </a>
        <a class="item" v-link="{ name: 'myBooks',params:{uid:'000'}}">
          <ui-icon css="large dashboard"></ui-icon>
        </a>
     <!--   <a class="item" v-link="{ name: 'demo'}">
          <ui-icon css="large dashboard"></ui-icon>
        </a>
        -->
      </ui-container>
    </ui-menu>
    <br>
    <br>
    <br>
</template>
