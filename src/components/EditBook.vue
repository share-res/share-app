<template>
    <ui-form>
  
      <ui-fields css="three">
        <ui-field>
          <label>分类</label>
          <input type="text" v-model="book.tags" >
        </ui-field>
        <ui-field>
          <label>书名</label>
          <input type="text" v-model="book.title" >
        </ui-field>
        <ui-field>
          <label>作者及译者</label>
          <input type="text" v-model="book.author">
        </ui-field>
      </ui-fields>
     
       <ui-field>
          <label>描述(&lt;br&gt;换行　&lt;img src="http:/you/com/name.jpg"&gt;)</label>
           <input type="text" v-model="book.description" >
        </ui-field>
    
        <ui-button css="ui primary button" @click='updateBook(book)'>
        保　存
      </ui-button>
    <ui-form>  
</template>

<script>
import Wilddog from 'wilddog'
import { updateBook } from '../vuex/actions'
export default {
  props:{
    book: {
      type: Object,
      default:  ()=>{
        return { title: '',tags:[],description:'',author:''}
      }
    }
  },
 wilddog: {
   tags: new Wilddog('https://books.wilddogio.com/tags')
 },
  vuex: {
    getters: {
      user: ({ user }) => user
    },
    actions: {
      updateBook
    }
  }
  		
}
</script>