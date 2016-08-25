<template>
   <ui-modal v-ref:mymodal>
      <ui-icon css="close"></ui-icon>
      <ui-header>定位图书位置</ui-header>
      <ui-content css="image">
       　　<div id="map-container"></div>
      </ui-content>
    </ui-modal>
</template>


<script>
import AMap from 'AMap'
let map
let marker=null


export default {
  ready(){
    let ps=[113.28, 23.09]
      map= new  AMap.Map('map-container' , {
          animateEnable:true,
          //lang:'zh_en',
          zoom:13,
          resizeEnable: false})
      marker = new AMap.Marker({
              position : ps,
              offset : new AMap.Pixel(-12,-12),
              map : map
      })
     // console.log('create maker')
  },
  methods: {
    display (book) {
      this.$refs.mymodal.show()
      let ps=[book.location.longitude,book.location.latitude]
       console.log(ps)
       marker.setPosition(new AMap.LngLat(ps[0],ps[1]))
      map.panTo(ps)
     // console.log('map.panTo(ps)')
      
    }
  }
}
</script>
<style scoped>
  #map-container {
    height: 400px;
    width: 100%;
  }
 
</style>