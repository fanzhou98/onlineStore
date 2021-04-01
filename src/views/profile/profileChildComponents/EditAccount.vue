<template>
  <div>
    <div class="wrap p-3 ">
      <!--  Name  -->
      <div class="form-row">
        <div class="form-group col">
          <label for="uname">Name</label>
          <input type="email" class="form-control" id="uname" v-model="uname" disabled>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="nickName">Nick Name</label>
          <input type="email" class="form-control" id="nickName" v-model="nickName">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4"  v-model="email">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country"  v-model="country">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="shippingAddress">Shipping Address</label>
          <input type="text" class="form-control" id="shippingAddress" v-model="shippingAddress">
        </div>
      </div>

      <div class="form-group">
        <label for="receiptAddress">Receipt Address</label>
        <input type="text" class="form-control" id="receiptAddress"  v-model="receiptAddress">
      </div>

      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-primary mr-4" @click="editAccount" >Update</button>
      </div>

    </div>

  </div>
</template>

<script>
  import {editAccount} from 'network/profile'
  import {getUserInfo} from 'network/profile'
  export default {
    name: "EditAccount",
    data(){
      return{
        uname:this.$store.state.userInfo.uname,
        nickName:this.$store.state.userInfo.nick_name,
        email:this.$store.state.userInfo.email,
        country:this.$store.state.userInfo.country,
        shippingAddress: this.$store.state.userInfo.shipping_address,
        receiptAddress:this.$store.state.userInfo.receipt_address
      }
    },
    methods:{
      editAccount(){
        if(this.uname && this.email && this.country && this.shippingAddress && this.receiptAddress){
          let payload = {
            uid: this.$store.state.userInfo.uid,
            nickName: this.nickName,
            email: this.email,
            country: this.country,
            shippingAddress: this.shippingAddress,
            receiptAddress: this.receiptAddress
          }

          /*
          *  network request
          * */
          editAccount(payload).then(res =>{
            // edit successful
            if(res.code === 200){
              /*
              * reload updated userInfo
              * */
              getUserInfo(payload.uid).then(result =>{
                // save session
                this.$store.commit('userInfo',result.userInfo[0])
                sessionStorage.setItem('userInfo',JSON.stringify(result.userInfo[0]))
                // refresh
                setTimeout(()=>{
                  this.$router.go(0)
                },1500)
              })
              this.$toast.success('update successfully')
            }else{
              this.$toast.error('update failed')
            }
          }).catch(error =>{
            console.log(error)
          })
        }else{ // if there is line blank
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