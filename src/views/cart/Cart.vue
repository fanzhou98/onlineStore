<template>
  <div>
    <div v-if="isEmpty"><h2>Your cart is empty, go add some items!</h2></div>
    <div v-else>
      <cartItem v-for="(item, key) in this.goodsList" :key="key" :cartItem="item"></cartItem>
    </div>
  </div>
</template>

<script>
  import cartItem from "./cartChildComponents/cartItem";
  

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
  }
</script>

<style scoped>

</style>