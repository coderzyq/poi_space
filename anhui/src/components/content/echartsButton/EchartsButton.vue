<template>
  <div>
    <div class="echarts">
      <span>
        <div style="right: 45px; padding: 0 20px" @mouseenter="showChoice = !showChoice">{{title}}</div>
      </span>
      <span class="iconfont"
            style="right: 5px;top: 0;position:absolute;"
            @click="showChoice = !showChoice"
      >
      &#xe6eb
    </span>
      <div class="select-button" v-if="showChoice">
        <div v-for="item in items"
             @click="handleSelect(item)"
             :key="item.key"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "EchartsButton",
  props: {
  },
  data() {
    return {
      showChoice: false, //默认下拉面框是关闭的
      items: [
        {title: '直方图', key: 'bar'},
        {title: '饼图', key: 'pie'},
        {title: '折线图', key: 'polyLine'},
        {title: '词云图', key: 'wordCloud'},
        {title: '整体概括', key: 'allView'}
      ],
      dataType: 'allView',
    }
  },
  computed: {

    title() {
      return this.items[4]['title']
    }
  },
  methods: {
    handleSelect(item) {
      console.log(item)
      this.updateChart(item.key)
      this.showChoice = false
      return item
    },
    updateChart(key) {
      switch (key) {
        case 'bar':
          this.$router.push('/allview/bar')
          break
        case 'wordCloud':
          this.$router.push('/allview/wordCloud')
          break
        case 'pie':
          this.$router.push('/allview/pie')
          break
        case 'polyLine':
          this.$router.push('/allview/polyline')
          break
        case 'allView':
          this.$router.push('/allview')
          break
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  height: 45px;
  color: #f5f1f1;
  text-align: center;
}

.select-button {
  background-image: linear-gradient(to left, #3f57cd, #099b52);
}
</style>