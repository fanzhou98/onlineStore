<template>
  <div>
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,i) in slides" :key="i" class="align-content-center">
          <div class="d-flex justify-content-center">
            <img :src="item" alt="">
          </div>
         </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "HomeSwiper", // 此处不能Swiper作为name，否则报错
    components:{
      swiper,
      swiperSlide,
    },
    props:{
      slides:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: ".swiper-pagination", // 轮播图的点
          loop:true, // 循环
          autoplay:2000,
        },
      };
    },

  };
</script>
<style lang="css" scoped>

  .wrapper >>> .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  /* 图片100% */
  .swiper-slide img {
    width: 80%;
    height: 500px;
  }
</style>