<template>
  <div class="col-4 goods_item d-block align-items-center mb-2 p-2 shadow-sm" @click.stop="openPopWindow">
    <!--Goods Image-->
    <div class="d-flex justify-content-between align-items-center">
      <img :src="global_const.GoodsImage_Prefix + this.item.image" alt="" class="goods_image m-auto">
    </div>
    <!--Goods Info-->
    <div class="text-center ">
      <!--Price-->
      <p class="price text-left ml-2 mt-2">{{this.item.price}}</p>
      <p style="color: black; font-size: 25px" class="item-name">{{this.item.name}}</p>
      <!--Name-->
      <p style="font-size: 30px" class="mb-2"></p>

      <div class="d-flex justify-content-around">
        <!--Add to Cart button-->
        <a class="btn btn-success text-center mb-2" style="border-radius: 10px" onclick="return false" @click.stop="addToCart()">
          <i class="fa fa-shopping-cart fa-2x"></i>
        </a>
        <!--Like-->
        <a class="btn btn-warning mb-2" style="border-radius: 10px">
          <i class="fa fa-star-o fa-2x" :class="{isFavourite:this.isFavourite}" style="color: white"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {saveBrowserHistory} from 'network/user'
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
    methods:{
      openPopWindow(){
        // open popup window
        this.$emit('addToCart', this.item)

        // verify user status to decide whether add to browser history
        if(this.$store.state.userInfo){
          // save user's browser history
          let goods_id = this.item.goods_id
          let uid = JSON.parse(sessionStorage.getItem('userInfo')).uid
          saveBrowserHistory(goods_id, uid)
        }
      },
      addToCart(){
        // open popup window
        this.$emit('addToCart', this.item)

        // verify user status
        if(this.$store.state.userInfo){
          // save user's browser history
          let goods_id = this.item.goods_id
          let uid = JSON.parse(sessionStorage.getItem('userInfo')).uid
          saveBrowserHistory(goods_id, uid)
        }else {
          this.$toast.error('please log in')
          setTimeout(()=>{
            this.$router.push('/home/login/')
          },500)
        }
      }
    }
  }
</script>

<style scoped>
  .goods_image{
    width: 100%;
    height: 400px;
  }
  .price{
    color: #e67e22;
    font-size: 40px;
    font-weight: 500
  }
  .btn{
    width: 80px;
  }
  .item-name{
    width: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .isFavourite{
    color: red;
  }
</style>