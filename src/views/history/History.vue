<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
        <div class="text-center mt-3" v-if="isEmpty">
          <h2>Your browser history is empty, go look some goods!</h2>
        </div>
        <HistoryItem class="wrap shadow-sm" v-for="(item, key) in this.history_item" :key="key" :history_item="item" v-else></HistoryItem>
    </div>
  </div>
</template>

<script>
  import HistoryItem from "./historyChildComponents/HistoryItem";

  import {readBrowserHistory} from 'network/user'
  export default {
    name: "History",
    components:{
      HistoryItem
    },
    created() {
      // check user status
      if (sessionStorage.getItem("userInfo")){
        // read user browser history
        let uid = JSON.parse(sessionStorage.getItem("userInfo")).uid
        readBrowserHistory(uid).then(res =>{
          if(res.history_item.length){
            this.$store.commit('setHistoryGoodsList', res.history_item)
            this.history_item = this.$store.state.historyGoodsList
          }else {
            this.isEmpty = true
          }
        })
      }
    },
    data(){
      return{
        history_item:[],
        isEmpty: false
      }
    }
  }
</script>

<style scoped>
.wrap {
  background-color:  #ecf0f1;
  border-radius: 10px;;
}
</style>