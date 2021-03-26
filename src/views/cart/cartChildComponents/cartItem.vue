<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="global_const.GoodsImage_Prefix + cartItem.image" class="card-img" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a class="btn btn-danger" @click="deleteCartItem(cartItem.uid, cartItem.item_id)"><i class="fa fa-trash"></i></a>
          </div>
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
      }
    }
  }
</script>

<style scoped>

</style>