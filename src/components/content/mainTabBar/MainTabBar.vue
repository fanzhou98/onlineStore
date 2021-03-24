<template>
  <div>
    <TabBar>
      <!--logo-->
      <TabBarItem path="/home" class="col-3 d-flex justify-content-center" >
        <img src="@/assets/img/ecom-store-logo.png" class="d-none d-sm-block" slot="item-name">
        <img src="@/assets/img/ecom-store-logo-mobile.png" class="d-block d-sm-none"  slot="item-name">
      </TabBarItem>

      <!--HOME-->
      <TabBarItem path="/home" class="col-3">
        <div class="nav-text" slot="item-name">HOME</div>
      </TabBarItem>

      <!--SHOP-->
      <TabBarItem path="/shop" class="col-3">
        <div class="nav-text" slot="item-name">SHOP</div>
      </TabBarItem>

      <!--CONTACT US-->
      <TabBarItem path="/contact" class="col-3">
        <div class="nav-text" slot="item-name">CONTACT US</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>
  .nav-text{
    font-family:  Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 15px;
  }
  .nav-text:hover{
    color: cadetblue;
    border-bottom: 1px solid black;
  }
  .col-2{
    padding: 0;
  }
</style>
