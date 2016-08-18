<template>
  <div>
    <button 
        @click="home()">
        Back to Home
      </button>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
  components: { ProductList, Cart },
  methods:{
    home(){
      router.go({ name: 'home', query: { tag: 'all' }})
    }
  }
 
}
</script>
<style scoped>
h2 {
  color: #42b983;
}
</style>



