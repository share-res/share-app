<template>
  <div>

    <ui-form>
      <ui-fields css="three">
        <ui-field>
          <label>Book Title</label>
          <input type="text" name="title" :value="newTitle" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>Book Catalog</label>
          <input type="text" placeholder="DOG">
        </ui-field>
        <ui-field>
          <label>Description</label>
          <input type="text" placeholder="Description">
        </ui-field>
      </ui-fields>
      <ui-button @click="">SCreate</ui-button>
    </ui-form>
<ui-divider></ui-divider>
  
<ui-divider></ui-divider>
  </div>
</template>

<script>
import Firebase from 'wilddog'
let  itemsRef = new Firebase('https://books.wilddogio.com/')
export default {
  firebase: {
     books: itemsRef.limitToLast(25)
  },
  methods: {
     removeTodo: function (key) {
       itemsRef.child(key).remove()
     },
     addTodo: function () {
         if (this.newTodo.trim()) {
            itemsRef.push({
                title: this.newTitle
            })
            this.newTitle = ''
         }
     }
  }
}
</script>



