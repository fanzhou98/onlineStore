<template>
  <div>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col">
          <div>
            <h2>Are you sure you want to delete the account?</h2>
          </div>

          <div class="d-flex justify-content-center align-items-center" style="margin-top: 40px">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Confirm delete
            </button>
          </div>

        </div>
      </div>
    </div>



    <!-- First pop up Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Notice</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            Please make sure again, all the information in your account will be delete
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#insertPass">next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Second pop up modal-->
    <div class="modal" id="insertPass">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <h5 class="modal-title">Notice</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <div class="form-group col">
              <label for="change_password">Type your password</label>
              <input type="password" class="form-control" id="change_password" v-model="password">
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="deleteAccount">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {deleteAccount} from 'network/profile'
  export default {
    name: "DeleteAccount",
    data(){
      return{
        password:''
      }
    },
    methods:{
      deleteAccount(){
        if (this.password === this.$store.state.userInfo.password){
          deleteAccount(this.$store.state.userInfo.uid, this.password).then(res =>{
            console.log(res)
            this.$store.commit("clearUserInfo")
            sessionStorage.removeItem('userInfo')
            sessionStorage.clear();
            this.$router.push('/home')
            this.$router.go(0)
          })
        }else {
          this.$toast.error('password wrong, try again')
        }
      }
    },
  }
</script>

<style scoped>
  .container-fluid{
    height: 400px;
  }
</style>