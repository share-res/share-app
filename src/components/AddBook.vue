<template>
    <ui-form>
  
      <ui-fields css="three">
        <ui-field>
          <label>分类</label>
          <ui-dropdown  css="fluid multiple search normal selection" :setting="{maxSelections:2}">
          <input type="hidden" name="country" v-model="book.tags">
          <ui-icon css="dropdown"></ui-icon>
          <ui-text css="default">请选择</ui-text>
          <ui-menu class="menu">
            <ui-item  v-for="tag in tags" data-value="{{tag['.value']}}">{{tag['.value']}}</ui-item>
           </ui-menu>
        </ui-dropdown>
      </ui-field>
        <ui-field>
          <label>书名</label>
          <input type="text" v-model="book.title" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>作者及译者</label>
          <input type="text" v-model="book.author"  placeholder="Book Author">
        </ui-field>
      </ui-fields>
     
       <ui-field>
          <label>描述(可以把推荐人以及书的作者写在前面)</label>
           <input type="text" v-model="book.description" placeholder="Book Description">
        </ui-field>
    
       <ui-button css="basic" @click='addBook'>
        <ui-icon css="save">保　存</icon>
      </button>
    <ui-form>  
</template>

<script>
import Wilddog from 'wilddog'
import { saveBook } from '../vuex/actions'
export default {
  data () {
    return {book: { title: '',tags:[],description:'',owner:'',author:''}}
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
       // console.log(this.user)
       saveBook(this.user,this.book)
       this.book.title = ''
      // this.book.description = ''
     //  this.book.tags = []
     //  this.book.author = ''
    }
  }
  		
}
</script>