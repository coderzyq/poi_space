<template>
  <div class="custom-info" v-if="Object.keys(informationInfo).length !== 0" id="ss">

      <div class="info-poi">POI旅游景点</div>
      <div class="info-title" v-for="item in informationInfo">名称：{{ item.title }}
        <div class="close" @click="markerClick">X</div>
      </div>
      <div class="info-img" v-for="item in informationInfo" v-if="imageFalse"><img :src="item.image" alt=""></div>
      <div class="info-type" v-for="item in informationInfo">类型：{{ item.type }}</div>
      <div class="info-tri"></div>
  </div>
</template>

<script>
export default {
  name: "CustomInfo",
  props: {
    informationInfo: {
      type: Array,
      default() {
        return {}
      }
    },
    imageFalse: {
      type: Boolean,
      default() {
        return true
      }
    },
    display: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    markerClick() {
      this.$emit('markerClick')
    }
  }
}
</script>

<style scoped>

.custom-info {
  z-index: 999;

//padding: 20px 0;
 padding-bottom: 15px;
  font-size: 22px;
  line-height: var(--info-height);
  width: 300px;
  color: #000000;
  position: absolute;
  left: 0;
  bottom: 0;
}
.info-title {
}

.info-title .close {
  height: 24px;
  width: 18px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
}

.close:hover {
  background-color: rgba(245, 33, 33, 0.8);
}

.info-img {
  height: 100px;
//width: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.info-poi {
  background: rgba(3, 120, 128, 0.7);
}

.info-title,
.info-type,
.info-address,
.info-area {
  background-color: var(--color-background);
}
.info-tri {
  left: 50%;
  bottom: 0;
  border-top: 15px solid var(--color-background);
  position: absolute;
  margin-left: -15px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
.info-tri:after {
  position: absolute;
  margin-top: -15px;
  border-top: 20px solid rgba(0, 0, 0, 0.3);
  content: '';
  top: 0;
  z-index: 999;
}
</style>