<template>
  <div class="wordCloud" ref="wordCloud"></div>
</template>

<script>
import {getHeatData} from "@/network/heatmap";

export default {
  name: "WordCloud",
  data() {
    return {
      wordInstance: null,
      word: []
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    //初始化
    initChart() {
      this.wordInstance = this.$echarts.init(this.$refs.wordCloud)
      let option = {
        tooltip: {
          show: true
        },
        series: [{
          type: 'wordCloud', //词云图
          gridSize: 3, //词的间距
          shape: 'pentagon', //词云形状
          sizeRange: [12, 60], //词云大小范围
          width: 1700, //词云显示宽度
          height: 800, //词云显示高度
          textStyle: {
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: function () {    //词云的颜色随机
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            },

            emphasis: {
              focus: 'self',
              shadowBlur: 50, //阴影的模糊等级
              shadowColor: '#83041b'  //鼠标悬停在词云上的阴影颜色
            }
          },
          data: []
        }]
      }
      this.wordInstance.setOption(option)
    },

    //网络请求
    getData() {
      getHeatData().then(({data: res}) => {
        let data = [
          {
            name: '景点',
            value: Math.random() * 10
          },
          {
            name: '现代风景点',
            value: Math.random() * 10
          },
          {
            name: '历史明纪',
            value: Math.random() * 100
          },
          {
            name: '火车站',
            value: Math.random() * 100
          },

          {
            name: '文物古迹',
            value: Math.random() * 100
          },
          {
            name: '公园',
            value: Math.random() * 100
          },
          {
            name: '游乐场',
            value: Math.random() * 100
          },
          {
            name: '寺庙道观',
            value: Math.random() * 100
          },
          {
            name: '风景名胜',
            value: Math.random() * 100
          },
          {
            name: '档案馆',
            value: Math.random() * 100
          },
          {
            name: '博物馆',
            value: Math.random() * 100
          },
          {
            name: '博物馆',
            value: Math.random() * 100
          },{
            name: '海滩',
            value: Math.random() * 100
          },
          {
            name: '教堂',
            value: Math.random() * 100
          },
          {
            name: '植物园',
            value: Math.random() * 100
          },
          {
            name: '动物园',
            value: Math.random() * 100
          },
          {
            name: '公园广场',
            value: Math.random() * 100
          },
          {
            name: '公园广场',
            value: Math.random() * 100
          },
          {
            name: '运动场',
            value: Math.random() * 10
          },
          {
            name: '公园',
            value: Math.random() * 100
          },
          {
            name: '红色景区',
            value: Math.random() * 100
          },
          {
            name: '广场',
            value: Math.random() * 100
          },{
            name: '公园广场',
            value: Math.random() * 100
          },
        ]
        // for (let i = 0; i < res.length; i++) {
        //   if (res[i]['地址'] !== []) {
        //     console.log(111)
        //     res[i]['value'] = parseInt(Math.random() * 10)
        //     let t= {
        //       name: res[i]['名称'],
        //       value: res[i]['value']
        //     }
        //     data.push(t)
        //   }
        //   console.log(data)
        // }
        console.log(data)
        this.word = data
        this.updateChart()
      }).catch(error => console.log(error))
    },

    //更新
    updateChart() {
      let option = {
        title: {
          text: '旅游景区类型的词云占比',
          left: 'center',
          fontSize: 800
        },
        series: {
          data: this.word
        }
      }
      this.wordInstance.setOption(option)
    }
  }
}
</script>

<style scoped>
.wordCloud {
  height: 100%;
  width: 100%;
}
</style>