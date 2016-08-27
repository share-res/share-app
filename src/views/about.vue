<template>
    <div class="ui vertical masthead inverted  segment">
          <h5 class="ui header">
                我两年前买了一本英文《简.爱》，看完了就一直放在一边，至今布满灰尘。<br>
                而你则刚刚买了本《时间简史》。<br>
                老师和家长都说:　高中应大量阅读课外读物! <br>
                难道我们每个人都要买上百本书吗？<br>
                或每周往返于图书馆？<br>
                不如我们一起互相帮助吧！
          </h5>
            
    </div>
    <div class="ui vertical masthead center aligned  segment">
        <div class="ui text container">
            <h3 class="ui header">
                图书交流小助手<br>Books Share
            </h3>
           
            <ui-steps css="ordered">
                <ui-step css="active">
                    <ui-content>
                        <ui-title>浏览</ui-title>
                        <ui-description>查找图书</ui-description>
                    </ui-content>
                </ui-step>
                <ui-step css="active">
                    <ui-content>
                        <ui-title>注册</ui-title>
                        <ui-description>注册借书</ui-description>
                    </ui-content>
                </ui-step>
                <ui-step css="disabled">
                    <ui-content>
                        <ui-title>贡献</ui-title>
                        <ui-description>登记图书</ui-description>
                    </ui-content>
                </ui-step>
                <ui-step css="disabled">
                    <ui-content>
                        <ui-title>分享</ui-title>
                        <ui-description>共同进步</ui-description>
                    </ui-content>
                </ui-step>
            </ui-steps>
            <div class="ui huge primary button" @click='list()'>Get Started <i class="right arrow icon"></i></div>
        </div>
    </div>


    <div class="ui inverted vertical footer center aligned segment">
        <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
                <div class="six wide column">
                    <h5 class="ui inverted header">感谢</h5>
                    <div class="ui inverted link list">
                        <a href="http://vuejs.org/" class="item" target="_blank">Vue.js</a>
                        <a href="http://www.wilddog.com" class="item" target="_blank">Wilddog</a>
                    </div>
                </div>
                <div class="six wide column">
                    <h5 class="ui inverted header">联系我们</h5>
                    <div class="ui inverted link list">
                        <a href="http://github.com/lshengjian" class="item" target="_blank">Alex(lsj178@139.com)</a>
                        <a href="http://github.com/share-book" class="item" target="_blank">Judy(13710711847@163.com)</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<script>
    export default {
        methods:{
            list(){
               
                window.router .go('home')
            }
        }
  
  }

  </script>


<style type="text/css">
    .masthead.segment {
        min-height: 300px;
        padding: 1em 0em;
    }
     .masthead h5.ui.header {
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 1.5em;
        font-weight: normal;
    }
    .masthead .ui.menu .ui.button {
        margin-left: 0.2em;
    }
    
    .masthead h3.ui.header {
        margin-top: 2em;
        margin-bottom: 1em;
        font-size: 3em;
        font-weight: normal;
    }
    
   
    .footer.segment {
        padding: 5em 0em;
    }
    
  
</style>