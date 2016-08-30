<template>
    <ui-accordion css="styled fluid" v-if="item.owner_id===user_id||item.state=='可借'" >
      <ui-title><ui-icon css="dropdown"></ui-icon>
       <i class="user icon"  v-if="item.state!='可借'"></i>
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
      <p v-if="!user_id">登录系统后可以申请借书!</p>
       <br>
      <div  v-if="user_id&&item.state=='可借'">
        <p>最好短信或邮件通知书的主人:-),加快办理!<br>别忘了最后一定要在系统内申请，书的主人才能进行借出操作!</p>
       <a href="sms:{{item.ownerMobile}}">发短信</a>
       <a href="mailto:{{owner.email}}?subject=借书申请&body={{msg}}" style=" margin-left: 4em;">发邮件</a><br><br>
       <ui-button css="ui primary button"  @click="requestBook(item,userName,mobile)">系统内申请</ui-button>
      </div>
 </div>

    
   
      </ui-content>
    </ui-accordion>
</template>

<script>
import { requestBook,confirmBook } from '../vuex/actions'
import  db  from '../api/db'
import EditBook from '../components/EditBook'
export default {
  components: { EditBook},
  props:{
     item:{
       type: Object,
        default:  ()=>{}
     }
  },
  ready(){
   // console.log("fetch Owner User Info ")
    db.fetchUser(this.item['owner_id'])
       .then((data)=>{
         this.owner=data
       //  console.log(this.owner)
     })
  },
  data(){
    // let ua = navigator.userAgent.toLowerCase();
     return {
       owner:{}
      
      //isIOS:ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1?true:false
      
    }
  },
 computed: {
   msg(){
     return '我想借您的书－－'+this.item.title+' ,希望您尽快江南入系统帮我批准，多谢!('+this.userName+":"+this.mobile+")"
   } 
},
  methods: {
      showMap() {
         this.$dispatch('show-book-on-map', this.item)
      },
   /*   snedSms(){
   
        url=url+"body="+ encodeURIComponent("我想借你的书"+ this.item["title"]+"。请上网站帮我批准一下")
　　　　　location.href = url
　　　　　
      }*/
  },
  vuex: {
    getters: {
      user_id :({ user }) => user.auth_id,
      userName :({ user }) => user.name,
      mobile :({ user }) => user.mobile,
      email :({ user }) => user.email
    },
    actions: {
      requestBook,confirmBook
    }
  }
}
</script>