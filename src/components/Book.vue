<template>
    <ui-accordion css="styled fluid">
      <ui-title><ui-icon css="dropdown"></ui-icon>
      {{item.title}}
      <label v-if="!!user_id">拥有者：{{item.owner}}[{{item.ownerMobile}}]----[{{item.state}}] <label>
      </ui-title>
      <ui-content>{{{item.description}}}
       <br>

      <ui-button v-if="user_id&&item.state=='OK'&&item.owner_id!=user_id" @click="requestBook(item,mobile)">求借</ui-button>
      <br>
      <div v-if="item.owner_id===user_id">
        <label>请求者：{{item.requesterMobile}}</label>
        <ui-checkbox css="toggle">
          <input type="checkbox" checked="checked">
          <label>同意</label>
        </ui-checkbox>
      </div>
      </ui-content>
    </ui-accordion>
</template>

<script>
  import { requestBook } from '../vuex/actions'

export default {
  props:["item","owner","requester"],
  vuex: {
    getters: {
      user_id :({ user }) => user.auth_id,
      mobile :({ user }) => user.mobile
    },
    actions: {
      requestBook
    }
  }
}
</script>