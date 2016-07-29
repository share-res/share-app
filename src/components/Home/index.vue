<template>
 <p>当前路径: {{$route.path}}</p>
  <p>当前路由参数: {{$route.params | json}}</p>
  <p>当前查询参数: {{$route.query | json}}</p>
 
<ui-divider></ui-divider>
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
import Book from './Book'
import Wilddog from 'wilddog'


export default {
 /* vuex: {
    getters: {
      items: ({ books }) => books.all,
      demoBook: ({ books }) => books.demo
    },
    actions: {
      getAllBooks
    }
  },*/
  components: { Book},
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books')
  }
}
</script>