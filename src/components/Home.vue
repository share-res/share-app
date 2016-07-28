<template>
      <ui-menu css="secondary">
      <ui-menu css="right">
        <ui-item>
          <ui-input css="icon">
            <input type="text" v-bind:value="books.length" placeholder="Search...">
            <ui-icon css="search link"></ui-icon>
          </ui-input>
        </ui-item>
      </ui-menu>
    </ui-menu>  
    <ui-divider></ui-divider>
   <form @submit.prevent="addBook">
    <ui-form>
      <ui-fields css="three">
        <ui-field>
          <label>Title</label>
          <input type="text" v-model="newTitle" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>Price</label>
          <input type="number" v-model="newPrice"  placeholder="Book Price">
        </ui-field>
        <ui-field>
          <label>Book Catalog</label>
          <input type="text" placeholder="Book Catalog">
        </ui-field>
      </ui-fields>
      <button type="submit">add new book</button>
    </ui-form>
    </form>
    <ui-divider></ui-divider>

  <div >
      <ui-accordion css="styled fluid">
        <div v-for="item in books" track-by=".key">
           <ui-title><ui-icon css="dropdown">{{item.title}}</ui-icon></ui-title>
           <ui-content><button @click="removeBook(item['.key'])">X</button>
             A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</ui-content>
       </div>
     </ui-accordion>
   
  </div>
</template>

<script>
let Firebase = require('wilddog')
let  itemsRef = new Firebase('https://books.wilddogio.com/')
itemsRef.authWithPassword({
        email    : 'test@139.com',
        password : 'test'
})

export default {
  data() {
     return { newTitle: '',newPrice:0}
  },
  firebase: {
     books: itemsRef.limitToLast(25)
  },
  methods: {
     removeBook: function (key) {
        itemsRef.child(key).remove()
     },
     addBook: function () {
        itemsRef.push({
             title: this.newTitle,
             price: this.newPrice
       })
       this.newTitle = ''
       this.newPrice=0
    }
  }
}
</script>