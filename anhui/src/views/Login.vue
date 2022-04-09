<template>
  <div class="container">
    <div class="text" text="基于POI数据的安徽省旅游景区分类及空间分布特征">
      基于POI数据的旅游景区分类及空间分布特征系统
    </div>
    <div class="content-login">
      <div class="login-text">
        <div style="font-size: 25px;
      width: 318px;
      padding: 0 20px 0 20px;
      justify-content: center; align-items: center; flex-direction: column; text-align: center">注册登陆
        </div>
        <div style="padding: 20px; font-size: 22px">
          <span>登录：</span>
          <input v-model="loginForm.username" placeholder="用户名">
        </div>
        <div style="padding: 0 20px 20px; font-size: 22px">
          <span>密码：</span>
          <input v-model="loginForm.password" placeholder="密码">
        </div>
        <div class="button">
          <button class="denglu">注册</button>
          <button class="zhuce" @click="login">登陆</button>
        </div>
      </div>
      <div class="login-description">
        基于POI数据的旅游景区分类及空间分布特征分析<br>
        利用Python从高德地图爬取旅游景区点数据，实现数据分析、地图显示基本信息、检索查询等功能
      </div>
    </div>
    <div class="content-image">
      <img src="../assets/image/login.jpg" style="width: 100%; height: 100%">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        console.log(this.loginForm.username)
        this.$router.push({
          path: '/user',
          query: {
            name: this.loginForm.username,
            pass: this.loginForm.password
          }
        })
        alert('欢迎进入此系统');
      }

    }
  }
}
</script>

<style scoped>
.text {
  font-size: 45px;
  text-align: center;
  width: 60%;
background: linear-gradient(to right, #0750bd, #b60e0e); //background-clip: text; background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  color: transparent;
  font-family: fantasy;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  //transform: translateX(15%);
  position: absolute;
  background-color: #ffffff;
  background-size: 100%;
  top: 0;
  z-index: 9999;
}

.content-login {
  width: 60%;
  flex: 0.4;
  display: flex;
  background-image: linear-gradient(to left, #3f57cd, #099b52);
  transition: background-color .5s;
  height: 50%;
  border-radius: 20px;
  margin: 20px;
  justify-content: center;
  align-items: center;
}

.content-image {
  flex: 0.5;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  justify-content: center;
}

.button {
  padding: 0 20px 0 20px;
  font-size: 21px;
  width: 239px;
  display: flex;
  //justify-items: right;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.denglu {
  width: 30%;
}
.zhuce {
  width: 30%;
}
.login-description {
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-size: 23px;
  padding: 10px;
}

.login-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
}
</style>