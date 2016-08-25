<template>
    <ui-accordion css="styled fluid" v-if="item.owner_id===user_id||item.state=='可借'" >
      <ui-title><ui-icon css="dropdown"></ui-icon>
      {{item.title}}[{{item.state}}]
      <label v-if="!!user_id">----拥有人：{{item.owner}}[{{item.ownerMobile}}] <label>
      </ui-title>
      <ui-content>
       <ui-button css="ui primary button"  @click="showMap()">定　位</ui-button>
  <div v-if="item.owner_id===user_id">
      <edit-book :book='item'></edit-book>
      <br>
      <div v-if="item.owner_id===user_id&&''!=item.requesterMobile">
        <ui-label>请求者：{{item.requester}}[{{item.requesterMobile}}]--{{item.recDate | timeToNow}}</ui-label>
        <br>
        <br>
    <!--  <select v-model="state" class="ui dropdown">
          <option selected>借出</option>
          <option>已归还</option>
        </select>-->
         <br>
        <ui-button v-if="item.state==='申请'" css="ui primary button" @click="confirmBook(item,'借出')">借　出</ui-button>
         <ui-button css="ui primary button" style='margin-left:2em;' @click="confirmBook(item,'可借')">可　用</ui-button>
      </div>
  </div>
  <div v-else>
       <ui-label>分类：{{item.tags}}</ui-label>
       <br>
       <ui-label>作者及译者：{{item.author}}</ui-label>
       <br>
　　　　{{{item.description}}}
       <br>
      
       <br>
       <ui-button css="ui primary button"  v-if="user_id&&item.state=='可借'" @click="requestBook(item,userName,mobile)">申　请</ui-button>
 </div>

    
   
      </ui-content>
    </ui-accordion>
</template>

<script>
import { requestBook,confirmBook } from '../vuex/actions'
import EditBook from '../components/EditBook'
export default {
  components: { EditBook},
  props:["item",'dimmer'],
  
  methods: {
      showMap() {
         this.$dispatch('show-book-on-map', this.item)
      }
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