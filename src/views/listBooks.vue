<template>

      <ui-menu css="secondary">
        <ui-item>
          <ui-input css="icon">
            <input type="text"  placeholder="Search..." name="query" v-model="searchQuery">
            <ui-icon css="search link"></ui-icon>
          </ui-input>
        </ui-item>
    
  
       <ui-item v-for="tag in tags"> 
           <ui-checkbox css="radio">
             <input type="radio" value="{{tag['.value']}}" v-model="searchQuery">
             <label>{{tag['.value']}}</label>
           </ui-checkbox>

       </ui-item>
 
    </ui-menu>  
    <ui-divider></ui-divider>
    <ui-cards>
        <book v-for="item in books | filterBy searchQuery" track-by=".key" :item='item'></book>
    </ui-cards>
</template>

<script>
import Wilddog from 'wilddog'
import Book from '../components/Book'


export default {
  components: { Book},
  data(){
    return {searchQuery:''}
  },
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books'),
     tags: new Wilddog('https://books.wilddogio.com/tags')
  }
}
</script>