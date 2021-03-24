<template>
  <div>
    <div class="container-fluid m-0">
      <div class="row">
        <div class="col login-wrap">
          <form method="post">
            <h1>Login</h1>
            <input type="text" name ="username" placeholder="Username" class="input-form" v-model="username">
            <input type="password" name="password" placeholder="Password" class="input-form" v-model="password">
          </form>
          <div>
            <button  @click="ItemClick">Login</button>
          </div>
          <div>
            <b class="register">Register</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Login} from "network/user";

  // import {mapGetters} from 'vuex'
  export default {
    name: "Login",
    data(){
      return{
        username:'',
        password:''
      }
    },
    computed:{

    },
    methods:{
      ItemClick(){
        let re = /^\w{4,12}$/;
        // check input empty
        if(this.username === '' || this.password === ''){
          this.$toast.error('please fill the form')
        }
        // check legal of username and password
        else if(!(re.test(this.password) && re.test(this.username))){
          this.$toast.error('username or password not legal')
        }
        else{
          Login(this.username, this.password).then(res=> {
            if(res.code === 200){
              console.log(res.user[0])
              // save session
              this.$store.commit('userInfo',res.user[0])
              sessionStorage.setItem('userInfo',JSON.stringify(res.user[0]))

              // toast
              this.$toast.success("login successfully",{
                position:'top-center',
                timeout:2000,
              })

              // refresh
              setTimeout(()=>{
                this.$router.push('/home')
                this.$router.go(0)
              },1500)
              //  Login failed
            }else if (res.code === 400){
              // toast
              this.$toast.error("login failed",{
                position:'top-center',
                timeout:2000,
              })
            }
          }).catch((error) => {
            console.log(error);
          })
        }
      }
    },
  }
</script>

<style scoped>
  .login-wrap{
    width: 100%;
    height: 100vh;
    padding: 40px;
    background: #079992;
    text-align: center;
  }
  /* head text */
  .login-wrap h1{
    color: black;
    font-weight: 300;
  }

  /* input form css */
  .input-form{
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    font-size: 25px;
    border: 2px solid #0a3d62;
    padding: 14px 10px; /*上下14px，左右10px*/
    width: 500px;
    height: 70px;
    outline: none;
    color: black;
    border-radius: 24px;
    transition: 0.25s;
  }
  .input-form:focus{
    width: 800px;
    border-color: #27ae60;  /*当鼠标点击停留在表单时*/
  }

  /* submit button */
  button{
    background: none;
    margin: 20px auto;
    text-align: center;
    font-size: 25px;
    border: 2px solid #0a3d62;
    padding: 14px 40px;
    outline: none;
    border-radius: 24px;
    cursor:pointer;
    width: 150px;
  }
  button:hover{
    background: #27ae60;
  }

  /* Register */
  .register{
    outline: none;
    text-decoration: none;
    color: white;
  }
  .register:hover{
    color: black;
    border-bottom: 1px solid black;
  }
</style>