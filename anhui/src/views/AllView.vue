<template>
  <div class="container">
    <div class="map" ref="map"></div>
  </div>
</template>

<script>

import {getHeatData} from "@/network/heatmap"
import {mount} from "@/utils/city"

export default {
  name: 'AllView',
  data() {
    return {
      chartInstance: null, //实例对象
      heatData: [],//服务器所需要的数据
      sights: [], //旅游景点
      parks: [], //公园广场
      playgrounds: [], //游乐场
      scenicAreas: [], //风景名胜
      temples: [], //寺庙道观
      museums: [], //博物馆
      churches: [], //教堂
      botanicalGradens: [], //植物园
      zoos: [], //动物园
      aquariums: [], //水族馆
      district: [], //地级市
      typeSight: [], //景点类型

    };
  },
  mounted() {
    //由于初始化echarts实例对象需要使用到dom元素，因此必须要放到mounted中，而不是created中
    this.initMap()
    this.getData()
  },
  methods: {
    /**
     * 网络请求相关的办法
     */
    //向服务器请求数据
    getData() {
      getHeatData().then(({data: res}) => {
        //旅游景点
        let district = [
          '合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市',
          '黄山市', '滁州市', '阜阳市', '宿州市', '六安市', '亳州市', '池州市', '宣城市'
        ]
        this.district = district
        console.log(district)
        let sigh = [
          '旅游景点', '公园广场', '游乐场', '风景名胜', '寺庙道观', '博物馆', '教堂', '植物园', '动物园', '水族馆'
        ]
        this.typeSight = sigh
        let poi = 'poi类型'
        let areaName = '区域名称'
        //旅游景点
        for (let k in district) {
          const sight = mount(sigh[0], this.district[k], res, poi, areaName)
          this.sights.push(sight)
        }

        //公园广场
        for (let k in district) {
          const park = mount(sigh[1], this.district[k], res, poi, areaName)
          this.parks.push(park)
        }
        //游乐场
        for (let k in district) {
          const playground = mount(sigh[2], this.district[k], res, poi, areaName)
          this.playgrounds.push(playground)
        }

        //风景名胜
        for (let k in district) {
          const scenicArea = mount(sigh[3], this.district[k], res, poi, areaName)
          this.scenicAreas.push(scenicArea)
        }

        //寺庙道观
        for (let k in district) {
          const temple = mount(sigh[4], this.district[k], res, poi, areaName)
          this.temples.push(temple)
        }

        //博物馆
        for (let k in district) {
          const Museum = mount(sigh[5], this.district[k], res, poi, areaName)
          this.museums.push(Museum)
        }

        //教堂
        for (let k in district) {
          const church = mount(sigh[6], this.district[k], res, poi, areaName)
          this.churches.push(church)
        }

        //植物园
        for (let k in district) {
          const botanicalGarden = mount(sigh[7], this.district[k], res, poi, areaName)
          this.churches.push(botanicalGarden)
        }

        //动物园
        for (let k in district) {
          const zoo = mount(sigh[8], this.district[k], res, poi, areaName)
          this.zoos.push(zoo)
        }

        //水族馆
        for (let k in district) {
          const aquarium = mount(sigh[9], this.district[k], res, poi, areaName)
          this.aquariums.push(aquarium)
        }

        this.updateMap()
      })
    },

    //初始化地图
    initMap() {
      this.chartInstance = this.$echarts.init(this.$refs.map) //初始化实例对象
      let option = {
        title: {
          text: '所有景区类型在空间的分布数量',
          left: 'center',
          textStyle: {
            fontSize: 25
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            nameTextStyle: {
              fontWeight: 'bolder',
              fontSize: 100
            },
            axisLabel: {
              fontSize: 20,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [

        ]
      }
      this.chartInstance.setOption(option)
    },

    //更新地图
    updateMap() {
      let dataOption = {
        legend: {
          data: this.typeSight,
          itemWidth: 30,
          itemHeight: 20,
          top: 'middle',
          orient: 'vertical',
          right: 40,
          itemGap: 50
        },
        xAxis: {
          type: 'category',
          data: [
              'cA', 'cB','cC','cD','cF','cE','cG','cH','cI','cJ','cK','cL','cM','cN','cO','cP'
          ],
        },
        series: [
          {
            name: '旅游景点',
            type: 'bar',
            stack: 'Total',
            data: this.sights
          },
          {
            name: '公园广场',
            type: 'bar',
            stack: 'Total',
            data: this.parks
          },
          {
            name: '游乐场',
            type: 'bar',
            stack: 'Total',
            data: this.playgrounds
          },
          {
            name: '风景名胜',
            type: 'bar',
            stack: 'Total',
            data: this.scenicAreas
          },
          {
            name: '寺庙道观',
            type: 'bar',
            stack: 'Total',
            data: this.temples
          },
          {
            name: '博物馆',
            type: 'bar',
            stack: 'Total',
            data: this.museums
          },
          {
            name: '教堂',
            type: 'bar',
            stack: 'Total',
            data: this.churches
          },
          {
            name: '植物园',
            type: 'bar',
            stack: 'Total',
            data: this.botanicalGradens
          },
          {
            name: '动物园',
            type: 'bar',
            stack: 'Total',
            data: this.zoos
          },
          {
            name: '水族馆',
            type: 'bar',
            stack: 'Total',
            data: this.aquariums
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    }
  }
}
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