<template>
  <div class="col-4 goods_item d-block align-items-center mb-2 p-2 shadow-sm">
    <!--Goods Image-->
    <div class="d-flex justify-content-between align-items-center">
      <img :src="global_const.GoodsImage_Prefix + this.item.image" alt="" class="goods_image m-auto">
    </div>
    <!--Goods Info-->
    <div class="text-center ">
      <!--Price-->
      <p class="price text-left ml-5 mb-0" style="font-size: 30px; font-weight: 500">{{this.item.price}}</p>
      <!--Name-->
      <p style="font-size: 20px">{{this.item.name}}</p>

      <div class="d-flex justify-content-around">
        <!--Add to Cart-->
        <a class="btn btn-success text-center mb-2" style="border-radius: 10px" onclick="return false" @click.stop="addToCart()">
          <i class="fa fa-shopping-cart fa-2x"></i>
        </a>
        <!--Like-->
        <a class="btn btn-warning mb-2" style="border-radius: 10px">
          <i class="fa fa-heart fa-2x" style="color: red"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      item:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{

      }
    },
    methods:{
      addToCart(){
        this.$emit('addToCart', this.item)
      }
    }
  }
</script>

<style scoped>
  .goods_image{
    width: 200px;
    height: 300px;
  }
  .price{
    color: #e67e22;
  }
  .btn{
    width: 80px;
  }
</style>