<template>

  <div>
    
    <ui-accordion css="styled fluid">
      <ui-title><ui-icon css="dropdown">===Add New Book===</ui-icon></ui-title>
      <ui-content><add-book></add-book></ui-content>
     
    </ui-accordion>
  
    <ui-divider></ui-divider>
    <data-grid :data="books | filterBy owner_id" :columns="gridColumns" :filter-key="">
    </data-grid>
  </div>
</template>

<script>
import Wilddog from 'wilddog'
import AddBook from '../components/AddBook'
import DataGrid from '../components/DataGrid'
import { myBooks } from '../vuex/getters'


export default {
  components: { AddBook,DataGrid},
  data(){
     return {
       gridColumns: ['title', 'price','state'],
     }
  },
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books')
  },
   vuex: {
    getters: {
      owner_id :({ user }) => user.auth_id
    }
   }



}

</script>