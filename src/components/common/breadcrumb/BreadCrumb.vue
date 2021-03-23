<template>
  <div>
    <nav aria-label="breadcrumb" >
      <ol class="breadcrumb pl-3">
        <li class="breadcrumb-item active " aria-current="page" v-for="(item,keys) in getURL" :key="keys">
          <a href="" @click="itemClick(item)" v-if="!isActive(item)">{{item}}</a>
          <i  @click="itemClick(item)" v-else>{{item}}</i>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "BreadCrumb",
    data(){
      return{
        active: true
      }
    },
    computed:{
      getURL: function(){
        return this.$route.path.split('/')
      }
    },
    methods:{
      itemClick(path){
        console.log(path)
        this.$router.push(path)
      },
      isActive(item){
        return this.active =  item == 'login' || item == 'register'
      }
    },
    mounted: function () {

    }
  }
</script>

<style scoped>

</style>