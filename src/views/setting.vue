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
              <input type="text" name="mobile" v-model="user.mobile" placeholder="十分重要，请认真核对">
            </div>
          </div>
         <div class="field">
            <div class="ui left icon input">
              <ui-label>用户昵称：</ui-label>
              <input type="text" name="name" v-model="user.name" placeholder="显示为书的拥有者">
            </div>
          </div>

          <div class="ui fluid large teal submit button">
            <ui-button css="basic" @click='updateUser(user)'>
              <ui-icon css="user">保　　存</icon>
            </ui-button>
          </div>
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
   data: ()=>{
      return {user:{mobile:'',name:'',location:{longitude:113.28, latitude:23.09}
      }}
   }, 
   vuex: {
    actions: {
      updateUser
    }
  }
}
</script>