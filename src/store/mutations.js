export default {
  userInfo(state, payload){
    state.userInfo = payload
  },
  setGoodsCategory(state,payload){
    state.goodsCategory = payload
  },
  setGoodsItem(state, payload){
    state.storeGoodsList = payload
  },
  setCartGoodsList(state, payload){
    state.cartGoodsList = payload
  },
  setHistoryGoodsList(state, payload){
    state.historyGoodsList = payload
  }
}