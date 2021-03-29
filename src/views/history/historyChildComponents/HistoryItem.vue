<template>
  <div class="row no-gutters card mb-1" style="width: 100%; height: 200px;">
      <div class="col-md-4 d-flex justify-content-center">
        <img :src="global_const.GoodsImage_Prefix + history_item.image" class="p-2" alt="" style="height: 200px; width: 150px; border-radius: 20px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{history_item.name}}</h3>
          <p class="card-text text-muted">{{history_item.price}}</p>
          <a class="btn btn-danger" @click="deleteHistoryItem(history_item.goods_id, history_item.uid)"><i class="fa fa-trash fa-2x"></i></a>
        </div>
      </div>
</div>
</template>

<script>
  import {deleteHistoryItem} from 'network/user'
  export default {
    name: "HistoryItem",
    props:{
      history_item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        isEmpty: true
      }
    },
    methods:{
      deleteHistoryItem(goods_id, uid){
        deleteHistoryItem(goods_id, uid).then(res =>{
          if (res.code === 200){
            this.$toast.success("delete successful")
          }else{
            this.$toast.error("delete failed")
          }
          setTimeout(()=>{
            this.$router.go(0)
          },150)
        })
      }
    }
  }
</script>

<style scoped>

</style>