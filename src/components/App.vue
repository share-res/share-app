<template>
  
    <!-- Following Menu 
    <div class="ui large top fixed hidden menu">
      <div class="ui container">
        <a class="item" :class="$route.name=='home'?'active':''" v-link="{ name: 'home'}"> 全部图书</a>
        <a class="item" :class="$route.name=='myBooks'?'active':''"  v-if="!!user_id" v-link="{ name: 'myBooks'}">我的图书</a>
        <a class="item" :class="$route.name=='seting'?'active':''" 
           v-if="!!user_id" v-link="{ name: 'setting'}">个人资料</a>
        <div class="right menu">
          <div class="item">
            <a class="ui primary button"  v-link="{ name: 'login'}">登　录</a>
          </div>
          <div class="item">
            <a class="ui primary button"   v-link="{ name: 'register'}">注　册</a>
          </div>
        </div>
      </div>
    </div>
-->
    <!-- Sidebar Menu -->
    <div class="ui vertical  sidebar menu">
      <a class="active item" v-link="{ name: 'home'}"> 全部图书</a>
      <a class="item" v-if="!!user_id" v-link="{ name: 'myBooks'}">我的图书</a>
      <a class="item" v-if="!!user_id" v-link="{ name: 'setting'}">个人资料</a>
      <a class="item" v-link="{ name: 'login'}">登　录</a>
      <a class="item" v-link="{ name: 'register'}">注　册</a>
    </div>


    <!-- Page Contents -->
    <div class="pusher">
      <div class="ui  vertical masthead left aligned segment">
        <div class="ui container">
          <div class="ui large secondary  pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <a class="item" :class="$route.name=='home'?'active':''" v-link="{ name: 'home'}"> 全部图书</a>
            <a class="item" :class="$route.name=='myBooks'?'active':''" v-if="!!user_id" v-link="{ name: 'myBooks'}">我的图书</a>
            <a class="item" :class="$route.name=='setting'?'active':''"  v-if="!!user_id" v-link="{ name: 'setting'}">个人资料</a>
            <div class="right item">
              <a class="ui primary button" v-link="{ name: 'login'}">登　录</a>
              <a class="ui primary button" v-link="{ name: 'register'}">注　册</a>
            </div>
          </div>
        </div>
        <br>
        <ui-container>
      <router-view>
      </router-view>
        </ui-container>
      </div>

    </div>




</template>

<script>
import store from '../vuex/store'
//import Navbar from './Navbar'
  

export default {
  replace: false,
  store,
  vuex: {
        getters: {
            user_id :({ user }) =>{
                //console.log(user.auth_id)
                return user.auth_id
            }
        }
 },
 // components: { Navbar}
 ready(){
     $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
          // create sidebar and attach to menu open
    $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
  }
}
</script>


<