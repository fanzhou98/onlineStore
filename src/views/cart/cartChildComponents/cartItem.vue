<template>
  <div>
    <div class="wrap mb-1 shadow-sm" style="width: 100vw">
      <div class="row no-gutters">

        <div class="col-3 d-flex justify-content-center">
          <img :src="global_const.GoodsImage_Prefix + cartItem.image" class="p-2" alt="" style="height: 200px; width: 150px; border-radius: 20px">
        </div>

        <div class="col-2">
          <h5 class="card-title">{{cartItem.name}}</h5>
        </div>

        <div class="col-2 count d-flex align-items-center justify-content-around">
          <div>
            <a class="btn btn-primary" @click="minusNum"><i class="fa fa-minus"></i></a>
          </div>
          <div class="text-center">{{cartItem.number}}</div>
          <div>
            <a class="btn btn-primary" @click="addNum"><i class="fa fa-plus"></i></a>
          </div>
        </div>

        <div class="col-2">
          <p class="card-text text-right">Total price: ${{cartItem.total_price}}</p>
        </div>

        <div class="col-2">
          <a class="btn btn-danger" @click="deleteCartItem(cartItem.uid, cartItem.item_id)"><i class="fa fa-trash"></i></a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {deleteGoods} from 'network/cart'
  export default {
    name: "cartItem",
    props:{
      cartItem:{
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods:{
      deleteCartItem(uid, item_id){
        let params = {
          action: 'delete',
          uid,
          item_id
        }
        deleteGoods(params).then(res =>{
          if (res.code === 200){
            this.$toast.success("delete successful")
          }else{
            this.$toast.error("delete failed")
          }
          setTimeout(()=>{
            this.$router.go(0)
          },500)

        }).catch(error=>{
          console.log(error)
        })
      },
      addNum(){
        let num = parseInt(this.cartItem.number)
        num += 1
        this.cartItem.number = num
        this.cartItem.total_price = num * parseInt(this.cartItem.price.split('$')[1])
      },
      minusNum(){
        if(parseInt(this.cartItem.number) !== 1){
          this.cartItem.number -= 1
          this.cartItem.total_price = this.cartItem.number * parseInt(this.cartItem.price.split('$')[1])
        }
      }
    }
  }
</script>

<style scoped>
.wrap{
  background-color: #ecf0f1;
}
  .col-3, .col-2{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>