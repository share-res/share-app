<template>

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal  header">
        <div class="content">
          登录系统
        </div>
      </h2>

      <form class="ui large form">

        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" v-model="user.email" placeholder="例如:alex@139.com">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="user.password" placeholder="请输入4-10位长度的字母或数字作为密码">
            </div>
          </div>


           <div class="ui  large primary button" @click='check()'>登　录</div>

        </div>
         <div id="errmsg" class="ui error message"></div>
    
      
      </form>
         <div class="ui message">
          <p v-show='userInfo.message!=""' >{{userInfo.message}}</p>
          还未注册? <a class="item" v-link="{ name: 'register'}">注　册</a>
        </div>
    </div>
  </div>

  </body>

</template>
<script>

import { login } from '../vuex/actions'
import store from '../vuex/store'

export default {
   data: ()=>{
      return {user:{email:'',password:''}} //test@139.com
   },
   methods:{
     check(){
       // validationRules = $('.form').form('get validation rules', 'input.email')
        let rt= $('.form').form('validate form')
        if(rt) login(store,this.user)
     } 
   },
   ready() {
      $('.ui.form')
        .form({
          on: 'blur',
          fields: {
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : '密码不能为空'
                },
                {
                  type   : 'email',
                  prompt : '电子邮箱格式错误，正确格式：yourname@abc.com'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : '密码不能为空'
                },
                {
                  type   : 'length[4]',
                  prompt : '密码长度应大于4位字符'
                }
              ]
            }
          }
        })
      ;
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
     getters: {
       userInfo :({ user }) => user
     },
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