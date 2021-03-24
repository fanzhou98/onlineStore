<template>
  <div>
    <div class="container-fluid mt-3" @click.stop="hideCart">
      <div class="row">
        <div class="col-3">
          <div class="card">

            <!--Title-->
            <div class="card-body"  >
              <h5>
                select what you want
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
        <div class="col-9 goods_wrap">
          <div class="row">
            <GoodsItem v-for="(item,idx) in this.goodsList[this.currentCate]" :key=idx :item="item"
                       @addToCart="addToCart($event)"></GoodsItem>
          </div>
        </div>
      </div>

      <!--Prop window after clicking the cart button-->
      <Add-to-cart v-show="showAddToCart" :goodsItem="this.selectedGoods"></Add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from "./shopChildComponents/AddToCart";
import GoodsItem from "./shopChildComponents/GoodsItem";
import {getGoods} from 'network/goods'
  export default {
    name: "Shop",
    created() {
      // network request
      getGoods().then(res=>{
        // get category
        for (let item of res.catList){
          this.category.push(item.category);
          this.goodsList[item.category] = [];
        }
        // get goods
        for (let good of res.goodsList){
          this.goodsList[good.category].push(good)
        }
        this.currentCate = this.category[0]
      })
    },
    components:{
      AddToCart,
      GoodsItem
    },
    data(){
      return{
        category:[],
        goodsList:{},
        currentCate:'',
        // selectedGoods needs to set a default image to avoid mounted with undefined value
        selectedGoods:{image:'shirt1.jpeg'},
        showAddToCart:false,
      }
    },
    methods:{
      cateClick(cate){
        this.currentCate = cate
      },
      // Hide props window of addToCart
      hideCart(){
        if (this.showAddToCart === true){
          this.showAddToCart = false
        }
      },
      addToCart(goodsItem){
        this.selectedGoods = goodsItem
        this.showAddToCart = true
      },
    },
  }
</script>

<style scoped>
  .goods_wrap{
    background-color: #f1f2f6;
  }
</style>