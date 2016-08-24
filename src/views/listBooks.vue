<template>




    <ui-item>
      <ui-input css="icon">
        <input type="text" placeholder="Search..." name="query" v-model="searchQuery">
        <ui-icon css="search link"></ui-icon>
      </ui-input>
    </ui-item>
 

  <!--
      <ui-menu css="secondary">
     <ui-item> 分类：</ui-item> 
      <ui-dropdown  css="fluid normal selection" >
     <input type="hidden"  v-model="searchQuery">
      <ui-icon css="dropdown"></ui-icon>
      <ui-text css="default">请选择</ui-text>
        <ui-menu class="menu">
            <ui-item  v-for="tag in tags" data-value="{{tag['.value']}}">{{tag['.value']}}</ui-item>
        </ui-menu>
      </ui-dropdown>
        </ui-menu>
      -->

  


  <ui-divider></ui-divider>
  <book v-for="item in books | filterBy searchQuery" track-by=".key" :item='item'></book>
  <ui-divider></ui-divider>


</template>

<script>
import Wilddog from 'wilddog'
import Map from '../components/Map' 
import Book from '../components/Book'


export default {
  components: { Book,Map},
  data(){
    return {searchQuery:''}
  },
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books'),
     tags: new Wilddog('https://books.wilddogio.com/tags')
  }
  

}
</script>