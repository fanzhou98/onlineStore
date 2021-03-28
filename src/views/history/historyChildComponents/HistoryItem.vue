<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="global_const.GoodsImage_Prefix + history_item.image" class="card-img" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <a class="btn btn-danger" @click="deleteHistoryItem(history_item.goods_id, history_item.uid)"><i class="fa fa-trash"></i></a>
        </div>
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