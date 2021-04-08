<template>
  <div>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-3">
          <div class="card">

            <!--Title-->
            <div class="card-body">
              <h5>
                Categories
              </h5>
            </div>

            <!--Category-->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="item of this.category" :key="item">
                <a href="" onclick="return false" class="card-link" @click="cateClick(item)" >{{item}}</a>
              </li>
            </ul>

          </div>
        </div>

        <!--Goods List-->
        <div class="col-sm-9 goods_wrap">
          <div class="row">
            <GoodsItem v-for="(item,idx) in this.goodsList[this.currentCate]" :key=idx :item="item"
                       @addToCart="addToCart($event)"></GoodsItem>
          </div>
        </div>
      </div>

      <!--Prop window after clicking the cart button-->
      <PopUp v-show="showAddToCart" :goodsItem="this.selectedGoods" @closeWindow="closeWindow"></PopUp>
    </div>
  </div>
</template>

<script>
import PopUp from "./shopChildComponents/PopUp";
import GoodsItem from "./shopChildComponents/GoodsItem";

  export default {
    name: "Shop",
    components:{
      PopUp,
      GoodsItem
    },
    created() {
      // get goods use $store
      // // get category
      // for (let item of this.$store.state.goodsCategory){
      //   this.category.push(item.category);
      //   this.goodsList[item.category] = [];
      // }
      // // get goods
      // for (let good of this.$store.state.storeGoodsList){
      //   this.goodsList[good.category].push(good)
      // }
      // this.currentCate = this.category[0]

      // get goods using sessionStorage
      // get category
      for (let item of JSON.parse(sessionStorage.getItem('storeGoodsCategory'))){
        this.category.push(item.category);
        this.goodsList[item.category] = [];
      }
      // get goods
      for (let good of JSON.parse(sessionStorage.getItem('storeGoodsList'))){
        this.goodsList[good.category].push(good)
      }
      this.currentCate = this.category[0]
    },
    data(){
      return{
        category:[],
        goodsList:{},
        currentCate:'',
        // selectedGoods needs to set a default image to avoid mounted with undefined value
        selectedGoods:{image:'shirt1.jpeg', price:'$10'},
        showAddToCart:false,
      }
    },
    methods:{
      // change category
      cateClick(cate){
        this.currentCate = cate
      },

      // user click cart button on the Shop page (GoodsItem pass addToCart(selectedGoods) event to Shop ->
      // Shop get the event by addToCart() ->  Shop pass the param as selectedGoods to PopUp to display
      addToCart(goodsItem){
        this.selectedGoods = goodsItem
        this.showAddToCart = true
      },

      // close the pop up window
      closeWindow(){
        this.showAddToCart = false
      }
    }
  }
</script>

<style scoped>
  .goods_wrap{
    background-color: #f1f2f6;
  }
</style>