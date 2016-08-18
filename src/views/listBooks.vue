<template>

      <ui-menu css="secondary">
      <ui-menu css="right">
        <ui-item>
          <ui-input css="icon">
            <input type="text"  placeholder="Search...">
            <ui-icon css="search link"></ui-icon>
          </ui-input>
        </ui-item>
      </ui-menu>
    </ui-menu>  
    <ui-divider></ui-divider>
    <ui-cards>
        <book v-for="item in books" track-by=".key" :item='item'></book>
    </ui-cards>
</template>

<script>
import Book from '../components/Book'
import Wilddog from 'wilddog'


export default {
  components: { Book},

 /* vuex: {
    getters: {
      items: ({ books }) => books.all,
      demoBook: ({ books }) => books.demo
    },
    actions: {
      getAllBooks
    }
  },*/
  
  wilddog: {
    books: new Wilddog('https://books.wilddogio.com/books').limitToLast(10)
  }
}
</script>