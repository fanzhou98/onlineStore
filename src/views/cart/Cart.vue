<template>
  <div>
    <div v-if="isEmpty" class="text-center mt-3">
      <h2>Your cart is empty, go add some items!</h2>
    </div>
    <div v-else  style="height: 100vh;">
      <cartItem v-for="(item, key) in this.goodsList" :key="key" :cartItem="item"></cartItem>
    </div>
  </div>
</template>

<script>
  import cartItem from "./cartChildComponents/cartItem";

  import {updateCartItem} from 'network/cart'
  export default {
    name: "Cart",
    components:{
      cartItem
    },
    created() {
      this.goodsList = this.$store.state.cartGoodsList
    },
    data(){
      return{
        goodsList:[],
      }
    },
    computed:{
      isEmpty(){
        return this.goodsList.length === 0;
      }
    },
    beforeRouteLeave(to, from, next){
      for (let item of this.goodsList){
        updateCartItem(item)
      }
      next()
    }
  }
</script>

<style scoped>

</style>