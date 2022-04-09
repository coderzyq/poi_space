import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入样式
import './assets/css/base.css'
//引入自定义样式
import './assets/css/custom.css'
import * as echarts from 'echarts'
//引入词云
import 'echarts-wordcloud'
//引入高德-ECharts插件
import 'echarts-extension-amap'
// 引入vue-amap
import AMap from 'vue-amap';
//引入自定义字体
import './assets/font/iconfont.css'
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'dc39c5e2107832faa5379f45c5626d15',
  // 插件集合
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
})


// axios.defaults.baseURL = 'http://192.168.8.45:8889/'
// Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
