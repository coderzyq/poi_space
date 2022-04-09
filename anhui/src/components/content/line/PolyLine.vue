<template>
  <div class="container-polyline1">
    <div class="polyline1" ref="polyline1"></div>
  </div>
</template>

<script>
import {getHeatData} from "@/network/heatmap";
import {mount} from "@/utils/city";

export default {
  name: "PolyLine1",
  data() {
    return {
      lineInstance: null,
      typeMount: []
    }
  },
  mounted() {
    this.initLine()
    this.getData()
  },
  methods: {
    //初始化
    initLine() {
      this.lineInstance = this.$echarts.init(this.$refs.polyline1)
      let option = {
        title: {
          text: '旅游景区类型和数量的对应关系',
          left: 'center',
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 30
          },
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '4%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'cross',
          axisPointer: {
            type: 'cross',

            label: {
              width: 40,
              backgroundColor: '#6a7985'
            },
            crossStyle: {
              color: 'red'
            }
          },
          showContent: true
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
              '旅游景点', '公园广场', '游乐场', '风景名胜', '寺庙道观', '博物馆', '教堂', '植物园', '动物园', '水族馆'
          ],
          nameTextStyle: {
            fontSize: 15,
          },
          axisLabel: {
            fontSize: 20,
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          fontWeight: 'bold'
        },
        series: [
          {
            name: '',
            type: 'line',
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            }
          }
        ]
      }
      this.lineInstance.setOption(option)
    },
    /**
     * 网络请求相关的方法
     */
    getData() {
      getHeatData().then(({data: res}) => {
        const sights = mount('旅游景点', '合肥市', res, 'poi类型', '区域名称')//旅游景点
        const park = mount('公园广场', '合肥市', res, 'poi类型', '区域名称') //公园广场
        const playground = mount('游乐场', '合肥市', res, 'poi类型', '区域名称') //游乐场
        const scenicArea = mount('风景名胜', '合肥市', res, 'poi类型', '区域名称') //风景名胜
        const temple = mount('寺庙道观', '合肥市', res, 'poi类型', '区域名称') //寺庙道观
        const Museum = mount('博物馆', '合肥市', res, 'poi类型', '区域名称') //博物馆
        const church = mount('教堂', '合肥市', res, 'poi类型', '区域名称') //教堂
        const botanicalGarden = mount('植物园', '合肥市', res, 'poi类型', '区域名称') //植物园
        const zoo = mount('动物园', '合肥市', res, 'poi类型', '区域名称') //动物园
        const aquarium = mount('水族馆', '合肥市', res, 'poi类型', '区域名称') //水族馆
        this.typeMount =[
            sights, park, playground, scenicArea, temple, Museum, church, botanicalGarden, zoo, aquarium
        ]
        //
        this.updateChart()
      })
    },
    //更新图表
    updateChart() {
      let option = {
        series: [
          {
            data: this.typeMount,

          }
        ]
      }
      this.lineInstance.setOption(option)
    }
  }
}
</script>

<style scoped>
.container-polyline1,
.polyline1 {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

.polyline1 {
  width: 1000px;
  height: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>