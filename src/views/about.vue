<template>

    <div class="ui vertical masthead center aligned segment">
        <div class="ui text container">
            <h3 class="ui header">
                图书交流小助手<br>Books Share
            </h3>
            <ui-steps css="ordered">
                <ui-step css="completed">
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


    <div class="ui inverted vertical footer segment">
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
                        <a href="http://github.com/lshengjian" class="item" target="_blank">Alex</a>
                        <a href="http://github.com/share-book" class="item" target="_blank">Judy</a>
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
        min-height: 700px;
        padding: 1em 0em;
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
    
    .secondary.pointing.menu .toc.item {
        display: none;
    }
    
    @media only screen and (max-width: 700px) {
     
        .secondary.pointing.menu .toc.item {
            display: block;
        }
        .masthead.segment {
            min-height: 350px;
        }
        .masthead h3.ui.header {
            font-size: 2em;
            margin-top: 1.5em;
        }

    }
</style>