<template>
  <div>
    <div class="cart container" >
      <div class="row">
        <div class="col-5">
          <img :src="global_const.GoodsImage_Prefix+goodsItem.image" style="width: 100%; height: 300px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddToCart",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .cart{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    width: 600px;
    height: 400px;
    background-color: white;
  }
</style>