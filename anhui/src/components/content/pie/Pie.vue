<template>
  <div class="container-pie">
    <div class="pie" ref="pie"></div>
  </div>
</template>

<script>
import {getHeatData} from "@/network/heatmap";
import {count, city} from "@/utils/city";
import Set from "@/assets/lib/Set";


export default {
  name: "Pie",
  data() {
    return {
      pieInstance: null,
      positions: [],
      cities: [],
      counties: []
    }
  },
  mounted() {
    this.initChart()
    this.getPieData()

  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    //向服务器请求数据
    getPieData() {
      getHeatData().then(({data: res}) => {
        let position = new Set()
        this.CityHF = count('合肥市', res)
        this.CityWH = count('芜湖市', res)
        this.CityBB = count('蚌埠市', res)
        this.CityHN = count('淮南市', res)
        this.CityMAS = count('马鞍山市', res)
        this.CityHB = count('淮北市', res)
        this.CityTL = count('铜陵市', res)
        this.CityAQ = count('安庆市', res)
        this.CityHS = count('黄山市', res)
        this.CityCZ = count('滁州市', res)
        this.CityFY = count('阜阳市', res)
        this.CitySZ = count('宿州市', res)
        this.CityLA = count('六安市', res)
        this.CityBZ = count('亳州市', res)
        this.CityCHI = count('池州市', res)
        this.CityXC = count('宣城市', res)
        let cityHF = {
          value: this.CityHF,
          name: '公园'
        }
        let cityWH = {
          value: this.CityWH,
          name: '名胜古迹'
        }
        let cityBB = {
          value: this.CityBB,
          name: '游乐场'
        }
        let cityHN = {
          value: this.CityHN,
          name: '寺庙道观'
        }
        let cityMAS = {
          value: this.CityMAS,
          name: '博物馆'
        }
        let cityHB = {
          value: this.CityHB,
          name: '教堂'
        }
        let cityTL = {
          value: this.CityTL,
          name: '植物园'
        }
        let cityAQ = {
          value: this.CityAQ,
          name: '动物园'
        }
        let cityHS = {
          value: this.CityHS,
          name: '水族馆'
        }
        let cityCZ = {
          value: this.CityCZ,
          name: '文物古迹'
        }
        let cityFY = {
          value: this.CityFY,
          name: '红色景区'
        }
        let citySZ = {
          value: this.CitySZ,
          name: '纪念馆'
        }
        let cityLA = {
          value: this.CityLA,
          name: '城市广场'
        }
        let cityBZ = {
          value: this.CityBZ,
          name: '国家级景点'
        }
        let cityCHI = {
          value: this.CityCHI,
          name: '纪念馆'
        }
        let cityXC = {
          value: this.CityXC,
          name: '海滩'
        }

        this.cities = [
            cityHF, cityWH, cityBB, cityHN, cityMAS, cityHB, cityTL, cityAQ,
            cityHS, cityCZ, cityFY, citySZ, cityLA, cityBZ, cityCHI, cityXC,
        ]
        this.positions = position
        this.updateChart()
      })
    },
    //初始化饼图
    initChart() {
      this.pieInstance = this.$echarts.init(this.$refs.pie) //初始化实例对象
      let option = {
        title: {
          text: '旅游景区类型数量占比',
          fontSize: 500,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '旅游景区',
            type: 'pie',
            radius: '70%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.pieInstance.setOption(option)
    },

    //更新饼图
    updateChart() {

      let option = {

        series: [
          {
            data: this.cities
          }
        ]
      }
      this.pieInstance.setOption(option)
    }
  }
}
</script>

<style scoped>
.container-pie,
.pie {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

.pie {
  width: 1000px;
  height: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>