<template>
    <ui-accordion css="styled fluid" v-if="item.owner_id===user_id||item.state=='可借'" >
      <ui-title><ui-icon css="dropdown"></ui-icon>
      {{item.title}}[{{item.state}}]
      <label v-if="!!user_id">----拥有人：{{item.owner}}[{{item.ownerMobile}}] <label>
      </ui-title>
      <ui-content>{{{item.description}}}
       <br>

      <ui-button v-if="user_id&&item.state=='可借'&&item.owner_id!=user_id" @click="requestBook(item,userName,mobile)">求借</ui-button>
      <br>
      <div v-if="item.owner_id===user_id&&''!=item.requesterMobile">
        <label>请求者：{{item.requester}}[{{item.requesterMobile}}]--{{item.recDate | timeToNow}}</label>
        <br>
       
        <br>
        
        <select v-model="state">
          <option selected>借出</option>
          <option>已归还</option>
        </select>
               
        <ui-button css="ui primary button" @click='confirmBook(item,state)'>更新状态</ui-button>
       
      </div>
      </ui-content>
    </ui-accordion>
</template>

<script>
  import { requestBook,confirmBook } from '../vuex/actions'

export default {
  props:["item"],
  data:()=>{
    return {state:''}
  },
  vuex: {
    getters: {
      user_id :({ user }) => user.auth_id,
      userName :({ user }) => user.name,
      mobile :({ user }) => user.mobile
    },
    actions: {
      requestBook,confirmBook
    }
  }
}
</script>