<template>
    <ui-form>
  
      <ui-fields css="three">
        <ui-field>
          <label>Book Tags</label>
          <ui-dropdown  css="fluid multiple search normal selection" :setting="{maxSelections:2}">
          <input type="hidden" name="country">
          <ui-icon css="dropdown"></ui-icon>
          <ui-text css="default">Select Tags</ui-text>
          <ui-menu class="menu">
            <ui-item data-value="cn"><ui-flag></ui-flag>China</ui-item>
            <ui-item data-value="us"><ui-flag css="us"></ui-flag>United States</ui-item>
            <ui-item data-value="gb"><ui-flag css="gb"></ui-flag>England</ui-item>
            <ui-item data-value="jp"><ui-flag css="jp"></ui-flag>Japan</ui-item>
            <ui-item data-value="eu"><ui-flag css="eu"></ui-flag>European Union</ui-item>
          </ui-menu>
        </ui-dropdown>
      </ui-field>
        <ui-field>
          <label>Title</label>
          <input type="text" v-model="newTitle" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>Price</label>
          <input type="number" v-model="newPrice"  placeholder="Book Price">
        </ui-field>
      </ui-fields>
     
        <ui-field>
          <label>Description</label>
          <input type="text" v-model="newDesc" placeholder="Book Description">
        </ui-field>
    
       <ui-button css="basic" @click='addBook'>
        <ui-icon css="user">Add Book</icon>
      </button>
    <ui-form>  
</template>

<script>
 import Wilddog from 'wilddog'
 let booksRef=new Wilddog('https://books.wilddogio.com/books') 
export default {

  data () {
    return { newTitle: '',newPrice:0,newTags:'',newDesc:''}
  },
  methods: {
    addBook: function () {
      　booksRef.push({
          title:this.newTitle,
          price:this.newPrice,
          description:this.newDesc
        })
       this.newTitle = ''
       this.newDesc = ''
       this.newTags = ''
       this.newPrice = 0
    }
  }
  		
}
</script>