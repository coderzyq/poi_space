<template>
  <div class="container-bar">
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script>
import {getHeatData} from "@/network/heatmap"
import {city, mount} from "@/utils/city"
import Set from "@/assets/lib/Set"

export default {
  name: "Bar",
  data() {
    return {
      barInstance: null,
      positions: [],
      parks: []
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    //初始化
    initChart() {
      this.barInstance = this.$echarts.init(this.$refs.bar)
      let option = {
        backgroundColor: '#0f375f',
        title: {
          text: '某景区类型在空间的数量分布情况',
          fontSize: 500,
          subtext: '以公园广场为例',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['公园广场'],
          left: 'left',
          textStyle: {
            color: '#ccc'
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            nameTextStyle: {
              align: 'center'
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              interval: 0,
              rotate: 30
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              interval: 0,
              rotate: 30
            }
          }
        ],
        series: [
          {
            name: '公园广场',
            type: 'bar',
            label: {
              show: true,
              position: 'top'
            },
            barWidth: 15,
            itemStyle: {
              borderRadius: 10,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: '#14c8d4'},
                {offset: 1, color: '#43eec6'}
              ])
            },
          }
        ]
      }
      this.barInstance.setOption(option)
    },
    /**
     * 网络请求相关的方法
     */
    getData() {
      getHeatData().then(({data: res}) => {
        let position = new Set()
        const ParkHF = mount('公园广场', '合肥市', res, 'poi类型', '区域名称')
        const ParkWH = mount('公园广场', '芜湖市', res, 'poi类型', '区域名称')
        const ParkBB = mount('公园广场', '蚌埠市', res, 'poi类型', '区域名称')
        const ParkHN = mount('公园广场', '淮南市', res, 'poi类型', '区域名称')
        const ParkMAS = mount('公园广场', '马鞍山市', res, 'poi类型', '区域名称')
        const ParkHB = mount('公园广场', '淮北市', res, 'poi类型', '区域名称')
        const ParkTL = mount('公园广场', '铜陵市', res, 'poi类型', '区域名称')
        const ParkAQ = mount('公园广场', '安庆市', res, 'poi类型', '区域名称')
        const ParkHS = mount('公园广场', '黄山市', res, 'poi类型', '区域名称')
        const ParkCZ = mount('公园广场', '滁州市', res, 'poi类型', '区域名称')
        const ParkFY = mount('公园广场', '阜阳市', res, 'poi类型', '区域名称')
        const ParkSZ = mount('公园广场', '宿州市', res, 'poi类型', '区域名称')
        const ParkLA = mount('公园广场', '六安市', res, 'poi类型', '区域名称')
        const ParkBZ = mount('公园广场', '亳州市', res, 'poi类型', '区域名称')
        const ParkCHI = mount('公园广场', '池州市', res, 'poi类型', '区域名称')
        const ParkXC = mount('公园广场', '宣城市', res, 'poi类型', '区域名称')
        this.parks = [ParkHF, ParkWH, ParkBB, ParkHN, ParkMAS, ParkHB, ParkTL, ParkAQ, ParkHS, ParkCZ, ParkFY, ParkSZ, ParkLA, ParkBZ, ParkCHI, ParkXC]
        this.updateChart()
      })

    },
    //更新图表
    updateChart() {
      let option = {
        xAxis: {
          data: [
            'cA', 'cB','cC','cD','cF','cE','cG','cH','cI','cJ','cK','cL','cM','cN','cO','cP'
          ]
        },
        series: [
          {
            data: this.parks,
          }
        ]
      }
      this.barInstance.setOption(option)
    }
  }
}
</script>

<style scoped>
.container-bar,
.bar {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

.bar {
  width: 1000px;
  height: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>