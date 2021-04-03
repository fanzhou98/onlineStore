<template>
    <div class="container-fluid" style="height: 100vh">
      <!-- Slides -->
      <div class="row">
        <div class="col">
          <home-swiper :slides="slides"></home-swiper>
        </div>
      </div>

      <!-- Apple header -->
      <div class="row shadow-lg mt-4">
        <div class="col apple d-flex justify-content-center align-items-center">
          <h2  class="m-0" style="color: white"><i class="fa fa-apple"> Apple</i></h2>
        </div>
      </div>
      <!-- Video -->
      <div class="row d-flex justify-content-center align-items-center mt-3 shadow-sm">
        <div class="col-6">
          <div class="apple-wrap shadow-sm">
            <div><i class="fa fa-apple mr-1"></i>WWDC 2021</div>
            <span style="font-size: 20px">The Worldwide Developers Conference </span>
            <p>is coming. Join us June 7-11</p>
          </div>
          <video src="@/assets/img/home/small_2x.mp4" autoplay="autoplay" muted loop width="100%"></video>
        </div>
        <!--Image-->
        <div class="col-6">
          <div>
            <div class="iphone-wrap">
              <div><i class="fa fa-apple mr-1"></i> iPhone12 Pro</div>
            </div>
            <img src="@/assets/img/home/iphone_12_pro.jpg" width="100%" height="100%" alt="">
          </div>
        </div>
      </div>

      <!-- Footer -->
      <Footer></Footer>
    </div>
</template>

<script>
  import HomeSwiper from "./homeChildComponents/HomeSwiper";
  import Footer from "components/content/footer/Footer";

  // network request
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      Footer
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
  .container-fluid{
    background-color: #ecf0f1;
  }
  .apple-wrap{
    position: absolute;
    color: white;
    left: 40px;
    top: 20px;
  }
  .iphone-wrap{
    position: absolute;
    color: white;
    left: 100px;
    top: 20%;
    font-size: 40px;
  }
  .apple{
    height: 70px;
    background-color: black;
  }
</style>