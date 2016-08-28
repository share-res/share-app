<template>
  <div class="ui demo">


    <ui-form>

      <ui-fields css="three">
        <ui-field>
          <label>分类</label>
          <ui-dropdown css="fluid multiple search normal selection" :setting="{maxSelections:2}">
            <input type="hidden" name="tags" v-model="book.tags">
            <ui-icon css="dropdown"></ui-icon>
            <ui-text css="default">请选择</ui-text>
            <ui-menu class="menu">
              <ui-item v-for="tag in tags" data-value="{{tag['.value']}}">{{tag['.value']}}</ui-item>
            </ui-menu>
          </ui-dropdown>
        </ui-field>
        <ui-field>
          <label>书名</label>
          <input type="text" v-model="book.title" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>作者及译者</label>
          <input type="text" v-model="book.author" placeholder="Book Author">
        </ui-field>
      </ui-fields>

      <ui-field>
        <label>描述(可以输入学校名，书封面及出版社，发行年月，内容简介等)<br>
                [...... 特殊用法:换行--&lt;br&gt　图片引用--&lt;img src="http://服务器地址/名称.后缀"&gt;)]</label>
        <input type="text" v-model="book.description" placeholder="Book Description">
      </ui-field>

      <ui-button css="ui primary button" @click='addBook'>
        <ui-icon css="save">保　存</icon>
      </ui-button>

    </ui-form>
    <p></p>
    <div class="ui dimmer">
      <div class="content">
        <div class="center">
          <h2 class="ui inverted icon  header">
            <i class="heart icon"></i> 成功加入新图书!
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wilddog from 'wilddog'
import { saveBook } from '../vuex/actions'
import store from '../vuex/store'
export default {
  data () {
    return {showok:false,book: { title: '',tags:[],description:'',owner:'',author:''}}
  },
 wilddog: {
   tags: new Wilddog('https://books.wilddogio.com/tags')
 },
  vuex: {
    getters: {
      user: ({ user }) => user
    },
    actions: {
      saveBook
    }
  },
  methods: {
    addBook() {
        console.log(this.user.name)
       　saveBook(store,this.user,this.book)
      　 this.book.title = ''
      // this.book.description = ''
     //  this.book.tags = []
     //  this.book.author = '' 
          $('.demo').dimmer('show')

    }
  }
  		
}
</script>