<template>

    <div class="ui inverted vertical masthead center aligned segment">

        <div class="ui text container">
            <h1 class="ui inverted header">
                星星之火，可以燎原
            </h1>
            <h2>每个人奉献一本书，我们就拥有一个自己的图书馆.</h2>
            <br>
            <div class="ui huge primary button" @click='list()'>Get Started <i class="right arrow icon"></i></div>
        </div>

    </div>

    <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
            <div class="row">
                <div class="eight wide column">
                    <h3 class="ui header">通知(1)</h3>
                    <p>开发中......</p>
                    <h3 class="ui header">通知(2)</h3>
                    <p>开发中.......</p>
                </div>
                <div class="six wide right floated column">
                    <img src="/static/images/books.png" class="ui large bordered rounded image">
                </div>
            </div>
        </div>
    </div>

    <div class="ui inverted vertical footer segment">
        <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
                <div class="two wide column">
                    <h4 class="ui inverted header">感谢</h4>
                    <div class="ui inverted link list">
                        <a href="http://vuejs.org/" class="item">Vue.js</a>
                        <a href="#" class="item">Wilddog</a>
                    </div>
                </div>
                <div class="two wide column">
                    <h4 class="ui inverted header">联系我们</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Alex</a>
                        <a href="#" class="item">Judy</a>
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
               
                window.router .go('listBooks')
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
        margin-left: 0.5em;
    }
    
    .masthead h1.ui.header {
        margin-top: 3em;
        margin-bottom: 0em;
        font-size: 4em;
        font-weight: normal;
    }
    
    .masthead h2 {
        font-size: 1.7em;
        font-weight: normal;
    }
    
    .ui.vertical.stripe {
        padding: 8em 0em;
    }
    
    .ui.vertical.stripe h3 {
        font-size: 2em;
    }
    
    .ui.vertical.stripe .button + h3,
    .ui.vertical.stripe p + h3 {
        margin-top: 3em;
    }
    
    .ui.vertical.stripe .floated.image {
        clear: both;
    }
    
    .ui.vertical.stripe p {
        font-size: 1.33em;
    }
    
    .ui.vertical.stripe .horizontal.divider {
        margin: 3em 0em;
    }
    
    .quote.stripe.segment {
        padding: 0em;
    }
    
    .quote.stripe.segment .grid .column {
        padding-top: 5em;
        padding-bottom: 5em;
    }
    
    .footer.segment {
        padding: 5em 0em;
    }
    
    .secondary.pointing.menu .toc.item {
        display: none;
    }
    
    @media only screen and (max-width: 700px) {
        .ui.fixed.menu {
            display: none !important;
        }
        .secondary.pointing.menu .item,
        .secondary.pointing.menu .menu {
            display: none;
        }
        .secondary.pointing.menu .toc.item {
            display: block;
        }
        .masthead.segment {
            min-height: 350px;
        }
        .masthead h1.ui.header {
            font-size: 2em;
            margin-top: 1.5em;
        }
        .masthead h2 {
            margin-top: 0.5em;
            font-size: 1.5em;
        }
    }
</style>