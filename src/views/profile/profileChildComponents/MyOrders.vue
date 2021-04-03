<template>
  <div>
    <div class="container-fluid" v-if="this.orderList.length">
      <div class="row">
        <div class="col" v-for="item in this.cateList" :key="item">
          <div>
            {{item}}
          </div>
        </div>
        <div class="col-2">
          Options
        </div>
      </div>
      <div class="row" v-for="(item,key) in this.orderList" :key="key">
        <div class="col">
          {{key+1}}
        </div>

        <div class="col">
          {{item.name}}
        </div>

        <div class="col">
          <img :src="global_const.GoodsImage_Prefix + item.image" width="50px" height="50px">
        </div>

        <div class="col">
          {{item.goods_number}}
        </div>

        <div class="col">
          {{item.price}}
        </div>

        <div class="col">
          ${{item.total_price}}
        </div>

        <div class="col">
          {{item.payment_method}}
        </div>

        <div class="col">
          {{item.shipping_address}}
        </div>

        <div class="col">
          {{item.order_status}}
        </div>

        <div class="col">
          {{item.creat_time.split('.')[0]}}
        </div>

        <div class="col-2">
          <button class="btn btn-danger" @click="deleteOrder(item.order_id)"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-4">
      <h2>Your order is empty</h2>
    </div>
  </div>
</template>

<script>
  import {askOrderList} from 'network/order'
  import {deleteOrder} from 'network/order'
  export default {
    name: "MyOrders",
    created() {
      askOrderList(this.$store.state.userInfo.uid).then(res =>{
        this.orderList = res.orderList
      })
    },
    data(){
      return{
        orderList:[],
        cateList:[
            'No', 'Name', 'Image', 'Goods Number', 'Price', 'Total Price', 'Payment Method',
            'Shipping Address', 'Order Status', 'Created Time'
        ]
      }
    },
    methods:{
      deleteOrder(order_id){
        deleteOrder(order_id).then(res=>{
          if (res.code === 200){
            this.$toast.success('successfully delete order')
            setTimeout(()=>{
              this.$router.go(0)
            },1500)
          }else{
            this.$toast.error('failed delete order')
          }
        })
      }
    }

  }
</script>

<style scoped>
.col {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
  font-size: 20px;
}

.col-2{
  font-size: 20px;
  padding: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
</style>