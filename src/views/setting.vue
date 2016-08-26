<template>

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal image header">
        <div class="content">
          修改个人资料
        </div>
      </h2>
      <map :location='user.location'></map>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <ui-label>手机号码：</ui-label>
              <input type="text" name="mobile" v-model="info.mobile" placeholder="不填写将不修改原有信息">
            </div>
          </div>
         <div class="field">
            <div class="ui left icon input">
              <ui-label>用户昵称：</ui-label>
              <input type="text" name="name" v-model="info.name" placeholder="不填写将不修改原有信息">
            </div>
          </div>

          <ui-button css="ui primary button" @click='updateUser(user.auth_id,info)'>
              <ui-icon css="user">保　　存</icon>
            </ui-button>
           </div>

        <div class="ui error message"></div>
 
      </form>
    </div>
  </div>

  </body>

</template>
<script>

import { updateUser } from '../vuex/actions'
import Map from '../components/Map' 
export default {
   components:{Map},
   data(){
      return {
        info:{
          mobile:'',
          name:'',
          location:{longitude:113.28, latitude:23.09}
        }
      }
   },
  ready(){
     this.info.name=this.user.name
     this.info.mobile=this.user.mobile
   },
   vuex: {
     getters: {
      user :({ user }) => user
     },
      actions: {
      updateUser
    }
  }
}
</script>