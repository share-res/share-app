<template>

  <div>
    
    <ui-accordion css="styled fluid">
      <ui-title><ui-icon css="dropdown">===新增图书资料===</ui-icon></ui-title>
      <ui-content><add-book></add-book></ui-content>
     
    </ui-accordion>
  
    <ui-divider></ui-divider>
    <book v-for="item in books | filterBy user_id" track-by=".key" :item='item'></book>
   <!-- <data-grid :data="books | filterBy owner_id" :columns="gridColumns" :filter-key="">
    </data-grid>-->
  </div>
</template>

<script>
import Wilddog from 'wilddog'
import AddBook from '../components/AddBook'
//import DataGrid from '../components/DataGrid'
import Book from '../components/Book'
import { myBooks } from '../vuex/getters'


export default {
  components: { AddBook,Book},
  wilddog: {
     books: new Wilddog('https://books.wilddogio.com/books')
  },
  vuex: {
    getters: {
      user_id :({ user }) => user.auth_id
    }
   },
   methods:{
     mybooks:()=>{
       let data=[]
       for (let d of this.books){
         if (d.owner_id===this.user_id){
           data.push(d)
           console.log(d)
         }
       }
       return data
     }
   }



}

</script>