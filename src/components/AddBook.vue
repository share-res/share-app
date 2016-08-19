<template>
    <ui-form>
  
      <ui-fields css="three">
        <ui-field>
          <label>Book Tags</label>
          <ui-dropdown  css="fluid multiple search normal selection" :setting="{maxSelections:2}">
          <input type="hidden" name="country" v-model="book.tags">
          <ui-icon css="dropdown"></ui-icon>
          <ui-text css="default">Select Tags</ui-text>
          <ui-menu class="menu">
            <ui-item  v-for="tag in tags" data-value="{{tag['.value']}}">{{tag['.value']}}</ui-item>
           </ui-menu>
        </ui-dropdown>
      </ui-field>
        <ui-field>
          <label>Title</label>
          <input type="text" v-model="book.title" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>Price</label>
          <input type="number" v-model="book.price"  placeholder="Book Price">
        </ui-field>
      </ui-fields>
     
        <ui-field>
          <label>Description</label>
          <input type="text" v-model="book.description" placeholder="Book Description">
        </ui-field>
    
       <ui-button css="basic" @click='addBook'>
        <ui-icon css="user">Add Book</icon>
      </button>
    <ui-form>  
</template>

<script>
import Wilddog from 'wilddog'
import { saveBook } from '../vuex/actions'
export default {
  data () {
    return {book: { title: '',price:0,tags:[],description:''}}
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
      console.log(this.book.title)
       saveBook(this.user,this.book)
       this.book.title = ''
       this.book.description = ''
       this.book.tags = []
       this.book.price = 0
    }
  }
  		
}
</script>