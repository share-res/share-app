<template>

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal image header">
        <div class="content">
          Sign up your account
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
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" name="mobile" v-model="user.mobile" placeholder="mobile number">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" name="location" v-model="user.location" placeholder="live location">
            </div>
          </div>
          <div class="ui fluid large teal submit button">
            <ui-button css="basic" @click='register(user)'>
              <ui-icon css="user">Sign Up</icon>
            </ui-button>
          </div>
        </div>

        <div class="ui error message"></div>
        <div class="ui message">
          alredy? <a class="item" v-link="{ name: 'login'}">Login</a>
        </div>
      </form>
    </div>
  </div>

  </body>

</template>
<script>

import { register } from '../vuex/actions'


export default {
   data: ()=>{
      return {user:{email:'demo@163.com',password:'demo',mobile:'13911123456',location:'广州市海珠区'}}
   }, 
  /*route: {
    data: ({ to}) => {
       console.log('login route data')
       return {}
      }
    }
  },*/
  vuex: {
     actions: {
      register
    }
   }
  		
}