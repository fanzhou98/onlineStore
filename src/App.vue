<template>
  <div id="app">
    <Header></Header>
    <main-tab-bar></main-tab-bar>
    <BreadCrumb></BreadCrumb>
    <keep-alive :exclude="['History','Cart']">
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  import Header from "./components/content/header/Header";
  import BreadCrumb from "./components/common/breadcrumb/BreadCrumb";

  import {getGoods} from 'network/goods'
  import {getCartItem} from 'network/cart'
export default {
  name: 'App',
  components: {
    MainTabBar,
    Header,
    BreadCrumb
  },
  created() {
    // load user information when entered
    if (sessionStorage.getItem("userInfo")) {
      this.$store.commit('userInfo',JSON.parse(sessionStorage.getItem("userInfo")))

      // request user's cart's goods
      let params = {
        action : 'getCartList',
        uid: this.$store.state.userInfo.uid
      }
      getCartItem(params).then(res=>{
        sessionStorage.setItem('cartGoodsList',JSON.stringify(res.cartGoodsList))
        this.$store.commit('setCartGoodsList', res.cartGoodsList)
      }).catch((error)=>{
        console.log(error)
      })
    }

    // request shop goods
    getGoods().then(res=>{
      // get category
      sessionStorage.setItem('storeGoodsCategory',JSON.stringify(res.catList))
      this.$store.commit('setGoodsCategory', res.catList)
      // get goods
      sessionStorage.setItem('storeGoodsList',JSON.stringify(res.goodsList))
      this.$store.commit('setGoodsItem', res.goodsList)
    })
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
