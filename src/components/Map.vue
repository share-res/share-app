<template>
  <div id="map-container"></div>
  <div id='tip'>点击地图设置自己的位置坐标------->经度:{{location.longitude}}--纬度:{{location.latitude}}</div>
</template>


<script>
import AMap from 'AMap'
let map
 let marker
export default {
  props:{
    location: {
      type: Object,
      default:  ()=>{
        return {longitude:113.28, latitude:23.09}
      }
    },
    canSetLocation: {
      type: Boolean,
      default: ()=>false
    }
  },
  ready () {
        map = new  AMap.Map('map-container' , {resizeEnable: true})
        let self=this
        let ps=[self.location.longitude,self.location.latitude]
    
        marker = new AMap.Marker({
              position : ps,
              offset : new AMap.Pixel(-12,-12),
              map : map
        })
        map.on('click', function(e) {
           self.location.longitude = e.lnglat.getLng() 
           self.location.latitude = e.lnglat.getLat()
           ps=[self.location.longitude,self.location.latitude]
           map.panTo(ps)
           marker.setPosition(new AMap.LngLat(ps[0],ps[1]))
          
        })
     
 
      
        map.plugin(['AMap.ToolBar','AMap.Geolocation'], function() {
		         map.addControl(new AMap.ToolBar())
           //  let  cs=new AMap.CitySearch()
           //  map.addControl(cs)
             let  geolocation = new AMap.Geolocation({
                showButton: false,        //显示定位按钮，默认：true
                showCircle: false,   
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                animateEnable:true
             })
             AMap.event.addListener(geolocation, 'complete', (data) => {
                    self.location.longitude=data.position.getLng()
                    self.location.latitude=data.position.getLat()
              })
           //  AMap.event.addListener(geolocation, 'error', ()=>{self.tip='定位失败'})      //返回定位出错信息
             map.addControl(geolocation)
             geolocation.getCurrentPosition() 
           /*  cs.getLocalCity((status,result)=>{
                console.log(status)
                console.log(result)
             })*/
        })
       
        
        
      
  }
}
</script>
<style scoped>
  #map-container {
    height: 400px;
    width: 100%;
  }
  #tip {
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    line-height: 30px;
  }
</style>