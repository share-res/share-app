<template>

　　 <map-book v-ref:bookmap></map-book>


    <ui-item>
      <ui-input css="icon">
        <input type="text" debounce="1000" placeholder="Search..." name="query" v-model="searchQuery">
        <ui-icon css="search link"></ui-icon>
      </ui-input>
    </ui-item>
 

  


  <ui-divider></ui-divider>
  <book v-for="item in books | filterBy searchQuery" track-by=".key" :item='item' :dimmer='$refs.mydimmer'></book>
  <ui-divider></ui-divider>


</template>

<script>
import Wilddog from 'wilddog'
import Book from '../components/Book'
import MapBook from '../components/MapBook'

export default {
  components: { Book,MapBook},
  data(){
    return {searchQuery:''}
  },
  events: {
    'show-book-on-map': function (book) {
       this.$refs.bookmap.display(book)
    }
  },
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books'),
     tags: new Wilddog('https://books.wilddogio.com/tags')
  }
  

}
</script>