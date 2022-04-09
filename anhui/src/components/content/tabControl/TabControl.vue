<template>
  <div>
    <div class="tab-control">
      <div class="tab-control-item"
           :class="{active: currentIndex === index}"
           @click="itemClick(index)"
           v-for="(item, index) in titles" :key="index">
        <echarts-button v-if="index === 3"></echarts-button>
        <div v-else>{{ item }}</div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import EchartsButton from "@/components/content/echartsButton/EchartsButton";

export default {
  name: "TabControl",
  components: {
    EchartsButton
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: -1,
      showChoice: true
    }
  },
  mounted() {
  },
  methods: {
    itemClick(index) {
      //1.改变currentIndex
      this.currentIndex = index
      //2.发出事件
      this.$emit('itemClick', index)
    },
  }
}
</script>

<style scoped>
.tab-control {
  z-index: 600;
  position: absolute;
  right: 50px;
  top: 0;
  text-align: center;
  line-height: 45px;
  font-size: 19px;
  color: #fcfcfc;
  display: flex;
  cursor: pointer;
}

.tab-control-item {
  padding: 0 10px;
}

.select-con {
  background-image: linear-gradient(to left, #3f57cd, #099b52);
}

.active {
  background-color: #e30a0a;
}
</style>