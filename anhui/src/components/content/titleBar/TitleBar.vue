<template>
  <div class="title">
    <div class="title-left">基于POI数据的旅游景区分类及空间分布系统</div>
    <tab-control
        :titles="titles"
        @itemClick="tabClick" ref="tabControl">
    </tab-control>
    <button class="btn" @click="logout">退出</button>
    </div>
</template>

<script>
import TabControl from "@/components/content/tabControl/TabControl";

export default {
  name: "TitleBar",
  components: {
    TabControl
  },

  data() {
    return {
      titles: ['旅游景区空间热力图分析', '旅游景区点分布', '旅游景区点信息查询', '景区点整体概括'],
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.$router.push('/heatmap')
          console.log(index)
          break
        case 1:
          this.$router.push('/pin')
          break
        case 2:
          this.$router.push('/informationQuery')
          break
        // case 3:
        //   this.$router.push('/allview')
        //   break
      }
    },
    handClick() {
      console.log(111);
    },
    logout() {
      alert('您已经退出该系统')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  z-index: 999;
  text-align: left;
  line-height: 45px;
  font-size: 25px;
  position: relative;
  width: 100%;
  color: #fcfcfc;
  background-image: linear-gradient(to left, #3f57cd, #099b52);
  transition: background-color .5s;
  padding: 0 10px;
}

.title-left {
  padding: 0 10px;
  height: 45px;
}
/deep/.iconfont {
  transform: rotate(360deg);
  cursor: pointer;
}
.title-icon {
  position: absolute;
  width: 40px;
  right: 0;
  top: 0;
}
.btn {
  position: absolute;
  right: 5px;
  height: 45px;
  cursor: pointer;
  font-size: 10px;
}
</style>