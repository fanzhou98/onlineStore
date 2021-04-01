<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col register-wrap">
          <form class="" action="" method="post">
            <h1>Register</h1>
            <input type="text" name="username"  placeholder="User name" v-model="username" class="input-form">
            <p class="pid">The user name is a combination of 4 to 12 digit letters and numbers</p>
            <input type="password" name="password"  id="password" placeholder="password"  v-model="password"  class="input-form">
            <p class="pid">The password is a combination of 4 to 12 digit letters and numbers</p>
            <input type="password" name="repassword" placeholder="please type your password again"  v-model="repassword" :class="{error:errors}" class="input-form">
            <small>check your password again</small>
          </form>
          <div><button class="submit" @click="submits">
            submit
          </button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Register} from "../../../network/user";

  export default {
    name: "Register",
    data(){
      return{
        username:'',
        password:'',
        repassword:'',
      }
    },
    computed:{
      errors(){
        return this.password !== this.repassword;
      }
    },
    methods:{
      submits(){
        let re = /^\w{4,12}$/;
        // check input empty
        if(this.username === '' || this.password === ''){
          this.$toast.error('please fill the form')
        }
        // check matchable of  two password
        else if (this.password !== this.repassword){
          this.$toast.error('passwords do not match')
        }
        // check legal of username and password
        else if(!(re.test(this.password) && re.test(this.username))){
          this.$toast.error('username or password not legal')
        }
        // pass the test and register the user
        else{
          Register(this.username, this.password).then(res =>{
            if(res['code'] === 200){
              this.$toast.success("register successfully");
              setTimeout(()=>{
                this.$router.push('/home');
                this.$router.go(0)
              },1500)
            }else if(res['code'] === 207){
              this.$toast.error("register failed, user exist");
            }else{
              this.$toast.error("register failed");
            }
          }).catch((error)=>{
            console.log(error)
          })
        }
      }
    }
  }
</script>

<style scoped>
  /* wrap */
  .register-wrap {
    width: 100%;
    height: 100vh;
    padding: 30px;
    background-color: #079992;
    text-align: center;
  }
  /* text */
  h1{
    color: black;
    font-weight: 300;
  }

  /* input-form style */
  .input-form{
    display: block;
    background: none;
    text-align: center;
    width: 500px;
    height: 70px;
    padding: 15px 5px;
    margin:20px auto;
    border:2px solid #0a3d62;
    border-radius: 24px;
    outline: none;
    transition: 0.25s;
  }

  /* submit button style*/
  .submit{
    background-color: #079992;
    display: block;
    margin: 20px auto;
    text-align: center;
    font-size: 25px;
    border: 2px solid #0a3d62;
    padding: 14px 40px;
    outline: none;
    color: black;
    border-radius: 24px;
    cursor:pointer;
  }
  /* input-form transformation*/
  .input-form:focus{
    width: 800px;
    border-color: #27ae60;
  }
  .submit:hover{
    background-color: #27ae60;
  }

  /* alert text*/
  .pid{
    display: block;
    margin: 0;
    padding: 0;
    font-size: 20px;
    color:black;
  }

  /* style if password wrong*/
  .error{
    border-color:red;;
    color: red;
  }
</style>