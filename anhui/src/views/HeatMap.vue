<template>
  <div class="container">
    <div class="map" ref="map"></div>
  </div>
</template>

<script>

import {getHeatData} from "@/network/heatmap";
import TitleBar from "@/components/content/titleBar/TitleBar";

export default {
  name: 'HeatMap',
  components: {
    TitleBar
  },
  data() {
    return {
      chartInstance: null, //实例对象
      heatData: [],//服务器所需要的数据
      reFresh: true
    };
  },
  mounted() {
    //由于初始化echarts实例对象需要使用到dom元素，因此必须要放到mounted中，而不是created中
    this.initMap()
    this.getData()
  },
  methods: {
    //判断所需要的数据是否是数值
    isNumber(val) {
      let regPos = /^\d+(\.\d+)?$/; //非负浮点数
      let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      return regPos.test(val) || regNeg.test(val);
    },
    /**
     * 网络请求相关的办法
     */
    //向服务器请求数据
     getData() {
      getHeatData().then(({data: res}) => {
        let positions = []
        res.forEach(item => {
          if (this.isNumber(item['经度']) && this.isNumber(item['纬度'])) {
            item['value'] = Math.random() * 10
            let t = [item['经度'], item['纬度'], item['value']]
            positions.push(t)
          }
        })
        this.heatData = positions
        this.updateMap()
      })
    },

    //初始化地图
    initMap() {
      this.chartInstance = this.$echarts.init(this.$refs.map) //初始化实例对象
      let option = {
        // 加载amap组件
        amap: {
          // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
          viewMode: '2D',
          //高德地图中心经纬度
          center: [118.18, 32.00],
          //高德地图缩放
          zoom: 8,
          // 启用resize
          resizeEnable: true,
          // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
          renderOnMoving: false,
          // 自定义地图样式主题
          mapStyle: 'amap://styles/73205918366de0aa3a52c7f6882bda9b',
          // ECharts 图层的 zIndex 默认 2000
          // 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
          echartsLayerZInteractive: 2019,
          echartsLayerInteractive: true,
          largeMode: false
        },
        visualMap: {
          show: true,
          right: 20,
          min: 0,
          max: 5,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red'],
            opacity: 0.3
          },

        },
        animation: true,
        series: [
          {
            name: 'po',
            type: 'heatmap',
            // 使用高德地图坐标系
            coordinateSystem: 'amap',
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            encode: {
              value: 2
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
        ]
      }
      this.chartInstance.setOption(option)
    },

    //更新地图
    updateMap() {
      let dataOption = {
        series: {
          data: this.heatData,
          pointSize: 6,
          blurSize: 4
        }
      }
      this.chartInstance.setOption(dataOption)
    }
  }}
</script>

<style scoped>
.container,
.map {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>