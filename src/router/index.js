import Vue from 'vue'
import VueRouter from 'vue-router'

// use plugin
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// import components
const Home = ()=>import("../views/home/Home")
const Profile = ()=> import( "../views/profile/Profile")
const Register =()=> import("components/common/register/Register")
const Login = ()=> import("components/common/login/Login")
const Cart = ()=> import("views/cart/Cart")

// router parameters
// const login = [
//
// ]
const routes = [
    // home
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home/home',
    redirect:'/home',
  },
  {
    path:'/home',
    component : Home,
    meta:{
      title: 'Home'
    }
  },

  // register
  {
    path:'/register',
    redirect:'/home/register'
  },
  {
    path:'/home/register',
    component: Register,
  },

  // login
  {
    path:'/login',
    redirect:'/home/login'
  },
  {
    path:'/home/login',
    component:Login
  },

  // profile
  {
    path:'/profile',
    component: Profile,
    meta:{
      title: 'Profile'
    }
  },

  // cart
  {
    path:'/cart',
    component: Cart,
    meta:{
      title: 'Cart'
    }
  },
];

// create Vue-router instance
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router