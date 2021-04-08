import Vue from 'vue'
import VueRouter from 'vue-router'

// use plugin
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// import components
const Home = ()=>import("views/home/Home")
const Profile = ()=> import( "views/profile/Profile")
const Register =()=> import("components/common/register/Register")
const Login = ()=> import("components/common/login/Login")
const Cart = ()=> import("views/cart/Cart")
const Shop = ()=> import("views/shop/Shop")

// Profile
const Order = ()=> import("views/profile/profileChildComponents/MyOrders")
const EditAccount = ()=> import("views/profile/profileChildComponents/EditAccount")
const ChangePassword = ()=> import("views/profile/profileChildComponents/ChangePassword")
const DeleteAccount = ()=> import("views/profile/profileChildComponents/DeleteAccount")
const ShippingTrack = ()=> import("views/profile/profileChildComponents/ShippingTrack")

const History = ()=> import("views/history/History")
const ContactUs = ()=> import("views/contactus/ContactUs")

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
    },
    children:[
      {
        path:'',
        redirect:'/profile/order',
        component:Order
      },
      {
        path:'profile',
        redirect:'/profile/order'
      },
      {
        path:'order',
        component:Order,
      },
      {
        path:'account',
        component: EditAccount
      },
      {
        path:'password',
        component: ChangePassword
      },
      {
        path:'delete-account',
        component: DeleteAccount
      },
      {
        path:'shipping',
        component:ShippingTrack
      }
    ]
  },

  // cart
  {
    path:'/cart',
    component: Cart,
    meta:{
      title: 'Cart'
    }
  },

    // shop
  {
    path:'/shop',
    component:Shop
  },

    // browser history
  {
    path:'/history',
    component:History

  },

  // Contact Us
  {
    path:'/contact',
    component:ContactUs

  }
];

// create Vue-router instance
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router