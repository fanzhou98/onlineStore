<template>
  <div>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-3">
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(key, item) in this.listItem" :key="key">
                <a href="" onclick="return false" class="card-link" @click="ItemClick(key)" >{{item}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    components:{

    },
    data(){
      return{
        listItem:{
          "My order": "/profile/order",
          "Edit Account": "/profile/account",
          "Change Password" : "/profile/password",
          "DeleteAccount" : "/profile/delete-account"
        }
      }
    },
    computed:{

    },
    methods:{
      ItemClick(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>

</style>