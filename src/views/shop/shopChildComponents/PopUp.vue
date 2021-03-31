<template>
  <div>
    <div class="cart container shadow-sm " >
      <div class="row p-2" >
        <!--left image -->
        <div class="col-5 d-flex justify-content-center align-items-center" style="height: 400px">
          <img :src="global_const.GoodsImage_Prefix+goodsItem.image" style="width: 100%; height: 300px; border-radius: 10px">
        </div>

        <!-- goods information -->
        <div class="col-7">
          <div class="row">
            <div class="col d-flex justify-content-end align-items-end mt-2">
              <button class="btn btn-danger" @click="closeWindow"><i class="fa fa-times"></i></button>
            </div>
          </div>

          <div class="row">

          </div>

          <div style="font-size: 30px">
            <p>{{goodsItem.name}}</p>
          </div>

          <!-- price -->
          <div class="price d-flex justify-content-between">
            <p>Price: {{goodsItem.price}}</p>
          </div>

          <!-- number & change number button -->
          <div class="count d-flex align-items-center justify-content-end mt-5">
            <a class="btn btn-primary d-flex justify-content-center align-items-center" @click="minusNum"><i class="fa fa-minus"></i></a>
            <div class="text-center ml-5 mr-5" style="font-size: 20px">{{this.itemNumber}}</div>
            <a class="btn btn-primary  d-flex justify-content-center align-items-center" @click="addNum"><i class="fa fa-plus"></i></a>
          </div>

          <!-- total price -->
          <div class="total_price_wrap">
            <p class="text-right">Total Price:${{totalPrice}}</p>
            <div class="d-flex justify-content-end align-items-end">
              <a class="btn btn-success" @click="addToCart">Add to cart</a>
            </div>
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
        if (this.$store.state.userInfo){
          // store goods information
          this.goodsItem.totalPrice = this.totalPrice
          this.goodsItem.itemNumber = this.itemNumber
          this.goodsItem.uid = this.$store.state.userInfo.uid

          // store new goods in DB
          addGoods(this.goodsItem).then(res=>{
            // refresh cart item
            if (res.code === 200){
              let params = {
                action : 'getCartList',
                uid: this.$store.state.userInfo.uid
              }
              // request new cartGoodsList
              getCartItem(params).then((res)=>{
                sessionStorage.setItem('cartGoodsList',JSON.stringify(res.cartGoodsList))
                this.$store.commit('setCartGoodsList', res.cartGoodsList)
              }).catch((error)=>{
                console.log(error)
              })
              // toast
              this.$toast.success("add successfully");
              // close Popup window
              this.$emit('closeWindow')
            }else{
              this.$toast.error("add failed")
            }
          }).catch((error)=>{
            console.log(error)
            this.$toast.error("add failed")
          })
        } else{
          this.$toast.error('please log in')
          setTimeout(()=>{
            this.$router.push('/home/login/')
          },500)
        }
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
    border-radius: 20px;
    background-color: #ecf0f1;
  }
  .price{
    color: #e67e22;
    font-size: 30px;
    font-weight: 500
  }
  .count >a{
    height: 50px;
    width: 50px;
  }
  .total_price_wrap{
    margin-top: 20px;
  }
  .total_price_wrap >p{
    color: #e67e22;
    font-size: 30px;
    font-weight: 500
  }
</style>