<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-around" id="header-wrap">

        <!--Welcome and cart basic information-->
        <div class="col-md-6 align-items-center d-flex">
          <button type="button" class="btn btn-success text-nowrap" @click="itemClick('/home')">WELCOME</button>
          <div v-show="isLogged">
            <div class="text ml-2">{{cartLength}} items in your cart</div>
            <div class="text ml-2">Total price: $ {{totalPrice}}</div>
          </div>
        </div>

        <!--Right hand view when not logged-->
        <div class="col-md-5 d-flex align-items-center justify-content-end text-white" v-if="!isLogged">
          <a href="" onclick="return false;" class="mr-4"
             v-for="(value, name) in this.nameList" :key="value"
             @click="itemClick(value)">{{name}}</a>
        </div>

        <!--Right hand veiw when logged-->
        <div v-else class="col-md-6 d-flex align-items-center justify-content-end text-white">
          <a href="" onclick="return false;" @click="itemClick('/profile')">My Account</a>
          <a href="" onclick="return false;" @click="itemClick('/cart')" class="ml-2">Go To Cart</a>
          <a href="" onclick="return false;" @click="itemClick('/history')" class="mr-3 ml-2">Browser History</a>

          <img :src="userPhoto" alt="" style="width: 40px; height: 40px">

          <div>
            <a>{{username}}</a>
            <a class="btn btn-secondary" @click="LogOut" >log out</a>
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
          'Login':'/home/login'
        },
        Logged: !this.$store.state.userInfo === ''
      }
    },
    computed:{
      userPhoto(){
        if (sessionStorage.getItem('userInfo')){
          return this.global_const.UserPhoto_Prefix + this.$store.state.userInfo.photo
        }else {
          return null
        }
      },
      username(){
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
      },
      cartLength(){
        return this.$store.state.cartGoodsList.length
      },
      totalPrice(){
        let totalPrice = 0
        for(let i of this.$store.state.cartGoodsList){
          totalPrice += parseInt(i.total_price)
      }
        return totalPrice
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
    }
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