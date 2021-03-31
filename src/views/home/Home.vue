<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <home-swiper :slides="slides"></home-swiper>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>

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

</style>