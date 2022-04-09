<template>
  <div id="app">
    <title-bar></title-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from "@/components/content/titleBar/TitleBar"
import TabControl from "@/components/content/tabControl/TabControl";

export default {
  name: 'App',
  components: {
    TitleBar,
    TabControl
  },
  mounted() {
    document.title = 'POI旅游景点'
  }
}
</script>

<style>
html,
body,
#app {
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0;
}

</style>
