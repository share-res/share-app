<template>

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal  header">
        <div class="content">
          注册新帐户
        </div>
      </h2>
      <map :location.sync='user.location'></map>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="required field">
            <div class="ui  input">
             <label>电子邮件：</label>
              <input type="text" name="email" v-model="user.email" placeholder="例如：alex@139.com，用于密码重置">
            </div>
          </div>
          <div class="required field">
            <div class="ui  input">
              <label>密　　码：</label>
              <input type="password" name="password" v-model="user.password" placeholder="请输入4-10位长度的字母或数字作为密码">
            </div>
          </div>
         
          <div class="required field">
            <div class="ui  input">
              <label>手机号码：</label>
              <input type="text" name="mobile" v-model="user.mobile" >
            </div>
          </div>
          <div class="field">
            <div class="ui  input">
              <label>用户昵称：</label>
              <input type="text" name="name" v-model="user.name" >
            </div>
          </div>

 
  
           <ui-button css="large primary button" @click='check()'>
              <ui-icon css="user">注　册</icon>
            </ui-button>

        </div>

        <div class="ui error message"></div>
    
      </form>
        <div class="ui message">
          已经注册过? <a class="item" v-link="{ name: 'login'}">登　录</a>
        </div>
    </div>
  </div>

  </body>

</template>
<script>

import { register } from '../vuex/actions'
import store from '../vuex/store'
import Map from '../components/Map' 
export default {
   components:{Map},
   data: ()=>{
      return {user:{name:'',email:'',password:'',mobile:'',
        location:{longitude:113.28, latitude:23.09}
      }}
   }, 

   methods:{
     check(){
       // validationRules = $('.form').form('get validation rules', 'input.email')
        let rt= $('.form').form('validate form')
        if(rt) register(store,this.user)
     } 
   },
   vuex: {
     actions: {
      register
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
                  type   : 'minLength[4]',
                  prompt : '密码长度应大于4位字符'
                }
              ]
            },
            mobile: {
              identifier  : 'mobile',
              rules: [
                {
                  type   : 'empty',
                  prompt : '手机不能为空'
                },
                {
                   type: 'minLength[11]',
                   prompt : '手机长度应为11位数字'
                }
              ]
            }
          }
        })
      ;
    }
  		
}