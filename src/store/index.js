import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = new Vuex.Store({
  state:{
    userInfo:'',
    goodsCategory:[],
    storeGoodsList:[],
    cartGoodsList:[]
  },
  mutations,
  getters,
  actions
})

export default store