<template>
  <div>
    <div class="wrap mb-1 shadow-sm" style="width: 100vw">
      <div class="row no-gutters">
        <!-- image -->
        <div class="col-3 d-flex justify-content-center">
          <img :src="global_const.GoodsImage_Prefix + cartItem.image" class="p-2" alt="" style="height: 200px; width: 150px; border-radius: 20px">
        </div>
        <!-- name -->
        <div class="col-2">
          <h5 class="card-title">{{cartItem.name}}</h5>
        </div>
        <!-- add/minus number -->
        <div class="col-2 count d-flex align-items-center justify-content-around">
          <div>
            <a class="btn btn-primary" @click="minusNum"><i class="fa fa-minus"></i></a>
          </div>
          <div class="text-center">{{cartItem.number}}</div>
          <div>
            <a class="btn btn-primary" @click="addNum"><i class="fa fa-plus"></i></a>
          </div>
        </div>
        <!-- total price -->
        <div class="col-2">
          <p class="card-text text-right">Total price: ${{cartItem.total_price}}</p>
        </div>
        <!-- option button -->
        <div class="col-3">
          <a class="btn btn-danger" @click="deleteCartItem(cartItem.uid, cartItem.item_id)"><i class="fa fa-trash"> delete</i></a>
          <a class="btn btn-success ml-1" data-toggle="modal" data-target="#order_modal"><i class="fa fa-credit-card justify-content-center align-items-center text-center"> pay</i> </a>
        </div>
      </div>
    </div>

    <div class="modal fade" id="order_modal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Header -->
          <div class="modal-header">
            <h4>Complete your purchase</h4>
          </div>
          <!-- Body -->
          <div class="modal-body">

            <div class="form-group">
              <label for="paymentMethod">Select your payment method</label>
              <select class="form-control" id="paymentMethod" v-model="payment_method">
                <option>WeChat</option>
                <option>AliPay</option>
                <option>Credit card</option>
              </select>
            </div>

            <div class="form-group">
              <label for="shippingAddress">Select your shipping address</label>
              <select class="form-control" id="shippingAddress" v-model="shipping_address">
                <option>{{this.$store.state.userInfo.shipping_address}}</option>
              </select>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="submitOrder">Pay</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {deleteGoods} from 'network/cart'
  import {submitOrder} from 'network/order'
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
    data(){
      return{
        payment_method:'WeChat',
        shipping_address:this.$store.state.userInfo.shipping_address
      }
    },
    methods:{
      deleteCartItem(uid, item_id){
        let params = {
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
          },1500)
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
      },
      submitOrder(){
        let payload = {
          uid: this.cartItem.uid,
          goods_id: this.cartItem.goods_id,
          goods_number: this.cartItem.number,
          price: this.cartItem.price,
          total_price: this.cartItem.total_price,
          payment_method: this.payment_method,
          shipping_address: this.shipping_address,
        }
        // Submit order
        submitOrder(payload).then(res=>{
          if (res.code === 200){
            let params = {
              uid: this.cartItem.uid,
              item_id :this.cartItem.item_id
            }

            // Delete goods form cart list
            deleteGoods(params).then(res=>{
              if(res.code === 200){
                this.$toast.success('successfully submit, see you order in the account page')
                setTimeout(()=>{
                  this.$router.go(0)
                },1500)
              }else{
                this.$toast.error('cart clean failed')
              }
            })
          }else {
            this.$toast.error('submit failed')
          }
        })
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