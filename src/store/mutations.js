export default {
  /*
  *   User
  * */
  userInfo(state, payload){
    state.userInfo = payload
  },
  clearUserInfo(state){
    state.userInfo = ''
  },
  /*
  *   Goods
  * */
  setGoodsCategory(state,payload){
    state.goodsCategory = payload
  },
  setGoodsItem(state, payload){
    state.storeGoodsList = payload
  },

  /*
  *   Cart
  * */
  setCartGoodsList(state, payload){
    state.cartGoodsList = payload
  },

  /*
  *   Browser History
  * */
  setHistoryGoodsList(state, payload){
    state.historyGoodsList = payload
  }
}