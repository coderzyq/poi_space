<template>
  <div id="appp">
    <div id="container" class="map">

    </div>
    <custom-info
        :information-info="informations"
        ref="info"
        @markerClick="closeInfoWindow"
        :image-false="image"></custom-info>
  </div>

</template>
<script>
import CustomInfo from "@/components/content/content/CustomInfo";
import AMap from "AMap"; //引入高德地图
import {getHeatData, Information} from "@/network/heatmap";
import TitleBar from "@/components/content/titleBar/TitleBar";

export default {
  name: 'InformationQuery',
  components: {
    CustomInfo,
    TitleBar
  },
  data() {
    return {
      map: null,
      image: true,
      allData: [],
      positions: [],
      informations: [],
      infowindow: {},
      positionMarkers: [],
    }
  },
  mounted() {
    this.map = this.init()
    this.map.clearMap()
    this.getData()
  },
  watch: {},
  methods: {
    //初始化地图
    init() {
      return new AMap.Map('container', {
        center: [118.18, 32.00],
        resizeEnable: true,
        zoom: 8,
      })
    },
    //向服务器请求数据
    getData() {
      getHeatData().then(({data: res}) => {
        let positions = []
        let info = []
        res.forEach(item => {
          positions.push([item['名称'],item['经度'], item['纬度']])

        })
        this.allData = res
        this.positions = positions
        this.addMarker()
      })
    },
    //创建Marker实例, 添加点标记
    addMarker() {
      const self = this
      let positionMarker = []
      for (let i = 0; i < this.allData.length; i++) {
        // let information = new Information(this.allData[i])
        let marker = new AMap.Marker({
          position: [this.positions[i][1], this.positions[i][2]]
        })
        positionMarker.push(
            Object.assign(this.allData[i], {
              mapId: marker._amap_id
            })
        )
        // this.informations.push(information)
        // positionMarker.push(marker)
        marker.setMap(self.map)
        // marker.on('click', this.markerClick(positionMarker, marker))
        marker.on('click', (e) => {
          self.markerClick(positionMarker, marker)
        })
      }
      console.log(positionMarker)
    },
    //点击标记，获取所点击的信息窗体
    markerClick(arr, marker) {
      console.log(arr)
      console.log(marker)
      let arrNew = arr.filter((x) => x.mapId === marker._amap_id)
      this.informations = [new Information(arrNew[0])]
      console.log(this.informations[0])
      console.log(this.informations[0].image)
      if (this.informations[0].image === '') {
        this.image = false
        console.log(111);
      } else {
        this.image = true
      }
      console.log(this.informations);
      let infoWindow = this.createInfoWindow()
      this.openInfoWindow(infoWindow, marker)
    },
    //4.构建自定义窗体
    createInfoWindow() {

      console.log(this.$refs.info.$el)
      return new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: this.$refs.info.$el,
        // content: this.getContent(),
        offset: new AMap.Pixel(-150, -32),
      })
    },

    //5.打开窗体
    openInfoWindow(infoWindow, marker) {
      console.log(marker.getPosition());
      infoWindow.open(this.map, marker.getPosition())
    },
    //6.关闭窗体
    closeInfoWindow() {
      this.map.clearInfoWindow()
    },
  },


}
</script>
<style scoped>
#appp {
  height: 100%;
}
#container {
  height: 100%;
  width: 100%;
  display: flex;
}


</style>