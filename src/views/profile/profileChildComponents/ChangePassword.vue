<template>
  <div class="wrap p-4">
      <div class="form-row">
        <div class="form-group col">
          <label for="change_password">Type your old password</label>
          <input type="password" class="form-control" id="change_password" v-model="old_password">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="new_pass">Type your new password</label>
          <input type="password" class="form-control" id="new_pass" v-model="new_password">
        </div>
      </div>

    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-primary  mr-4" @click="updatePassword">Update</button>
    </div>
  </div>
</template>

<script>
  import {changePassword} from 'network/profile'
  import {getUserInfo} from 'network/profile'
  export default {
    name: "ChangePassword",
    data(){
      return{
        uid:this.$store.state.userInfo.uid,
        u_pass:this.$store.state.userInfo.password,
        old_password:'',
        new_password:''
      }
    },
    methods:{
      updatePassword(){
        let re = /^\w{4,12}$/;

        if (this.old_password && this.new_password){
          if(this.old_password === this.$store.state.userInfo.password){
            if(re.test(this.new_password)){
              changePassword(this.uid, this.new_password).then(()=>{
                /*
                * reload updated userInfo
                * */
                getUserInfo(this.uid).then(result =>{
                  // save session
                  this.$store.commit('userInfo',result.userInfo[0])
                  sessionStorage.setItem('userInfo',JSON.stringify(result.userInfo[0]))
                  // refresh
                  setTimeout(()=>{
                    this.$router.go(0)
                  },1500)
                })
                this.$toast.success('update successfully')
              })
            }else {
              this.$toast.error('new password format wrong')
            }
          }else {
            this.$toast.error('old password wrong')
          }
        }else {
          this.$toast.error('please fill the blank')
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