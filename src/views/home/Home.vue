<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <home-swiper :slides="slides"></home-swiper>
        </div>
      </div>
      <h2>This is home</h2>
    </div>
</template>

<script>
  import HomeSwiper from "./homeChildComponents/HomeSwiper";

  // network request
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      HomeSwiper
    },
    data(){
      return{
        slides:[]
      }
    },
    created() {
      this.getHomeMultidata('load')
    },
    activated(){

    },
    methods:{
      // request for home slides
      getHomeMultidata(params){
        getHomeMultidata(params).then(res=>{
          for(let item of res.slides){
            this.slides.push(this.global_const.Slides_Prefix + item['location'])
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>