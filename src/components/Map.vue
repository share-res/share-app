<template>
    <div id="map-container"></div>
</template>

<style>
#map-container {
    height: 400px;
    width:100%;
}
</style>

<script>
import AMap from 'AMap'
//console.log(AMap)
export default {

  ready () {
    const map = new AMap.Map('map-container', {
      zoom: 15,
      center: [116.39, 39.9]
    })
   // console.log(map)

  }
}
</script>