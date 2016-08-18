<template>

  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <br>
    <data-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
    </data-grid>
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid'
import Wilddog from 'wilddog'
//import { getMyBooks } from '../vuex/actions'
//import { myBooks } from '../vuex/getters'
let dbRef = new Wilddog('https://books.wilddogio.com/books')
export default {
  components: { DataGrid},
  data(){
     console.log('data')
    //gridData=[]
    //.
      //
     // .endAt(state.auth_id)
    dbRef.orderByChild('owner_id').startAt('alex').endAt('alex')
    .once('value', function (snapshot) {
      let book = snapshot.val()
      book.key = snapshot.key()
      console.log(book)
      //gridData.push(book)

    })
   /* dbRef.on('child_removed', function (snapshot) {
      gridData.$remove(snapshot.val())
    })*/
     return {
       searchQuery: '',
       gridColumns: ['title', 'state'],
       //gridData:[]
     }
  },
  created () {
   
  }
  ,

  wilddog: {
     gridData: new Wilddog('https://books.wilddogio.com/books')
  }

}

</script>