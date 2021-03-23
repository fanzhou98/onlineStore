<template>
  <div id="app">
    <Header></Header>
    <main-tab-bar></main-tab-bar>
    <BreadCrumb></BreadCrumb>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  import Header from "./components/content/header/Header";
  import BreadCrumb from "./components/common/breadcrumb/BreadCrumb";
export default {
  name: 'App',
  components: {
    MainTabBar,
    Header,
    BreadCrumb
  },
  created() {
    // //在页面刷新时将vuex里的信息保存到sessionStorage里
    //
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("userInfo") ) {
      this.$store.commit('userInfo',JSON.parse(sessionStorage.getItem("userInfo")))
    }
    //
    // window.addEventListener("beforeunload",()=>{
    //   sessionStorage.setItem("userInfo",JSON.stringify(this.$store.state.userInfo))
    // })

  }
}
</script>

<style>
  @import "assets/css/normalize.css";
#app {
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
