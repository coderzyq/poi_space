<template>
<h1 class="login-text"
    text="欢迎进入基于POI数据的旅游景区点分布及空间分析系统">
  欢迎进入基于POI数据的旅游景区点分类及空间分布系统<br>
  请按照操作进行操作
</h1>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
.login-text {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(250%);
  font-size: 45px;
  font-family: '隶书',fantasy;
  background:-webkit-linear-gradient(90deg, #e5b5ac, #869efd);
  text-shadow: 10px 10px 10px #e2d83c,-10px -10px 5px #0047f1,2px 2px 5px #ef0000,3px 3px 2px #28e000,4px 4px 2px #e2d83c,-5px -5px 5px #e2d83c;
}
</style>