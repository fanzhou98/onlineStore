<template>
  <div>
    <div class="cart container" >
      <div class="row">
        <div class="col-5">
          <img :src="global_const.GoodsImage_Prefix+goodsItem.image" style="width: 100%; height: 300px">
        </div>
        <div class="col-7">
          <div class="d-flex justify-content-between">
            <p>Price: {{goodsItem.price}}</p>
            <button class="btn btn-warning" @click="closeWindow">X</button>
          </div>

          <div class="count d-flex align-items-center justify-content-around">
            <a class="btn btn-primary" @click="addNum"><i class="fa fa-plus"></i></a>
            <div class="text-center">{{this.itemNumber}}</div>
            <a class="btn btn-primary" @click="minusNum"><i class="fa fa-minus"></i></a>
          </div>

          <div>
            <p>Total Price:${{totalPrice}}</p>
            <a class="btn btn-success" @click="addToCart"><i class="fa fa-cart-plus"></i><i class="fa fa-plus ml-1"></i></a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {addGoods} from 'network/cart'
  import {getCartItem} from 'network/cart'
  export default {
    name: "PopUp",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {

          }
        }
      }
    },
    data(){
      return{
        itemNumber: 1,
      }
    },
    computed:{
      totalPrice(){
        let total = this.goodsItem.price.split('$');
        return total[1] * this.itemNumber
      }
    },
    methods:{
      closeWindow(){
        this.itemNumber = 1
        this.$emit('closeWindow')
      },
      addNum(){
        this.itemNumber +=1
      },
      minusNum(){
        if(this.itemNumber !== 1){
          this.itemNumber -=1
        }
      },
      addToCart(){
        this.goodsItem.totalPrice = this.totalPrice
        this.goodsItem.itemNumber = this.itemNumber
        this.goodsItem.uid = this.$store.state.userInfo.uid
        addGoods(this.goodsItem).then(res=>{
          // refresh cart item
          if (res.code === 200){
            let params = {
              action : 'getCartList',
              uid: this.$store.state.userInfo.uid
            }
            getCartItem(params).then((res)=>{
              console.log(res)
              sessionStorage.setItem('cartGoodsList',JSON.stringify(res.cartGoodsList))
              this.$store.commit('setCartGoodsList', res.cartGoodsList)
            }).catch((error)=>{
              console.log(error)
            })
            // toast
            this.$toast.success("add successfully");
            // send clsoe event to parent
            this.$emit('closeWindow')
          }else{
            this.$toast.error("add failed")
          }
        }).catch((error)=>{
          console.log(error)
          this.$toast.error("add failed")
        })
      }
    },
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