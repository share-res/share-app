<template>
    <div id="todos">
      <ul>
        <li v-for="item in items" track-by=".key">
          {{ item.text }}
          <button @click="removeTodo(item['.key'])">X</button>
        </li>
      </ul>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add #{{ items.length }}</button>
      </form>
    </div>
</template>

<script>
  let Vue = require('vue')
  let VueFire = require('vuefire')
  let Firebase = require('wilddog')

let  itemsRef = new Firebase('https://alex.wilddogio.com/todos/')
    Vue.use(VueFire)
export default {
  data:function () {
      return { newTodo: ''}
  },
  firebase: {
          items: itemsRef.limitToLast(25)
  },
  methods: {
          removeTodo: function (key) {
             itemsRef.child(key).remove()
          },
          addTodo: function () {
            if (this.newTodo.trim()) {
              itemsRef.push({
                text: this.newTodo
              })
              this.newTodo = ''
            }
          }
  }
}
</script>