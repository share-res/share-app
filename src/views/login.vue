<template>

<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
        <div class="content">
        登录系统
      </div>
    </h2>
   
    <form class="ui large form">
  
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" v-model="user.email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" v-model="user.password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large teal submit button">
          <ui-button css="basic" @click='login(user)'>
             <ui-icon css="user">登　录</icon>
          </ui-button>
        </div>
      </div>

      <div class="ui error message"></div>

  

    <div class="ui message">
      还未注册?  <a class="item" v-link="{ name: 'register'}">注　册</a>
    </div>
    </form>
  </div>
</div>

</body>

</template>
<script>

import { login } from '../vuex/actions'


export default {
   data: ()=>{
      return {user:{email:'test@139.com',password:'test'}}
   }, 
  /*route: {
    data: ({ to: { query: { redirect }}}) => {
       console.log('login route data')
      let redirect2 = 
     // console.log(redirect2)
      return {redirect:redirect2,user:{email:'test@139.com',password:'test'}}
    }
  },*/
  vuex: {
     actions: {
      login
    }
   }
  		
}
</script>
<style scoped>
h2 {
  color: #42b983;
}
</style>


