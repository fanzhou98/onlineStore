<template>
  <div>
    <div class="wrap p-3 mt-5">

      <div class="form-row">
        <div class="form-group col">
          <label for="uname">Name</label>
          <input type="email" class="form-control" id="uname" :placeholder="this.$store.state.userInfo.uname" v-model="uname">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" :placeholder="this.$store.state.userInfo.email" v-model="email">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="country">Country</label>
          <input type="password" class="form-control" id="country" :placeholder="this.$store.state.userInfo.country" v-model="country">
        </div>
      </div>

      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" :placeholder="this.$store.state.userInfo.address" v-model="address">
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" v-model="city">
        </div>
      </div>
      <button class="btn btn-primary" @click="updateProfile" >Update</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "EditAccount",
    data(){
      return{
        uname:'',
        email:'',
        country:'',
        address:'',
        city:''
      }
    },
    methods:{
      updateProfile(){
        if(this.uname && this.email && this.country && this.address && this.city){
          console.log('next')
        }else{
          this.$toast.error('please fill in the blank')
        }
      }
    }
  }
</script>

<style scoped>
  .wrap{
    background-color: #ecf0f1;
    border-radius: 20px;
  }
</style>