<template>
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      
      <div class="content">
        Log-in to your account
      </div>
    </h2>

      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" v-bind:value='email' placeholder="请输入电子邮件">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" v-bind:value='pwd' placeholder="请输入密码">
          </div>
        </div>
        <div class="ui fluid large teal submit button">
          <button @click="login(email,pwd)">
            登　录
          </button>
         </div>
      </div>

     <div class="ui error message"></div>

    <div class="ui message">
      新用户 <a href="#">注　册</a>
    </div>
  </div>
</div>

</template>

<script>
import { login } from '../vuex/actions'
export default {
  data(){
    return {
      email:'111',
      pwd: '222'
    }
   },
  vuex: {
    getters: {
      auth_id: ({ auth }) => auth.auth_id
    },
    actions: {
      login
    }
  },

}
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>


