<template>
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="mobileNo" placeholder="请输入手机号码">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="请输入密码">
          </div>
        </div>
        <div class="ui fluid large teal submit button">登　录</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      新用户 <a href="#">注　册</a>
    </div>
  </div>
</div>

</template>

<script>
//import $ from 'jquery'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
   },
   methods:{
     demo(){
       console.log($('#tx')[0].value)
     }
   }

}
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>


