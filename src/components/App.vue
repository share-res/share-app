<template>

    <navbar></navbar>
    <router-view>
    </router-view>

</template>

<script>
import store from '../vuex/store'
import Navbar from './Navbar'

export default {
  replace: false,
  store,
  components: { Navbar }
}
</script>