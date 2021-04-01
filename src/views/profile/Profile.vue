<template>
  <div>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-3">
          <div class="card shadow-sm" style="width: 18rem;">
            <!-- user info -->
            <img :src="global_const.UserPhoto_Prefix + this.userInfo.photo" class="card-img-top p-2" style="border-radius: 20px" alt="">
            <div class="card-body">
              <h5 class="card-title text-center">{{this.userInfo.nick_name}}</h5>
              <p class="card-text text-center">{{this.userInfo.email}}</p>
            </div>

            <!-- Profile Item list-->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(key, item) in this.listItem" :key="key">
                <a href="" onclick="return false" class="card-link" @click="ItemClick(key)" >{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created(){
      this.userInfo = this.$store.state.userInfo
    },
    data(){
      return{
        listItem:{
          "My order": "/profile/order",
          "Edit Account": "/profile/account",
          "Change Password" : "/profile/password",
          "DeleteAccount" : "/profile/delete-account"
        },
        userInfo:null
      }
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