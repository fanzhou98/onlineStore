<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-around" id="header-wrap">

        <!--Welcome and cart basic information-->
        <div class="col-md-6 align-items-center d-flex">
          <button class="btn-success" @click="itemClick('/home')">WELCOME</button>
          <div class="text ml-2">4 items in your cart</div>
          <div class="text">Total price: $300</div>
        </div>

        <!--Right hand link-->
        <div class="col-md-5 d-flex align-items-center justify-content-end text-white" v-if="!isLogged">
          <a href="" onclick="return false;" class="mr-4"
             v-for="(value, name) in this.nameList" :key="value"
             @click="itemClick(value)">{{name}}</a>
        </div>

        <div v-else class="col-md-6 d-flex align-items-center justify-content-end text-white">
          <a href="" onclick="return false;" @click="itemClick('/profile')">My Account</a>
          <a href="" onclick="return false;" @click="itemClick('/cart')" class="mr-5 ml-2">Go To Cart</a>
          <img :src="userphoto" alt="" style="width: 40px; height: 40px">

          <div>
            <a>{{username}}</a>
            <button @click="LogOut" >log out</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        nameList: {
          'Register': '/home/register',
          // 'My Account': '/profile',
          // 'Go To Cart':'/cart',
          'Login':'/home/login'
        },
      }
    },
    computed:{
      userphoto(){
        if (sessionStorage.getItem('userInfo')){
          return this.global_const.UserPhoto_Prefix + this.$store.state.userInfo.photo
        }else {
          return null
        }
      },
      username(){
        // console.log(sessionStorage.getItem('userInfo'))
        if (sessionStorage.getItem('userInfo') !== null){
          return JSON.parse(sessionStorage.getItem('userInfo')).uname
        }else {
          return 'null'
        }
      },
      isLogged(){
        if (sessionStorage.getItem('userInfo')){
          return true
        }else{
          return false
        }
      }
    },
    methods:{
      itemClick(path){
        this.$router.push(path)
      },
      LogOut(){
        sessionStorage.removeItem('userInfo')
        sessionStorage.clear();
        this.$router.push('/home')
        this.$router.go(0)
      }
    },

  }
</script>

<style scoped>
  #header-wrap{
    background-color: #57606f;
    line-height: 30px;

}
  .text{
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
    margin: 4px;
  }
  a:hover{
    color: #fff200;
  }
  button {
    border: none;
    border-radius: 5px;
    outline: none;
    margin: 10px;
  }
</style>