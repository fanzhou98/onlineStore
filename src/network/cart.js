import {request} from "./request";
import qs from 'qs'

// add goods into cart
export function addGoods(payload) {
  return request({
    method: 'post',
    url:'/user/cart/',
    data: qs.stringify({action:'addGoods',goodsItem:payload})
  })
}

// delete cart item
export function deleteGoods(payload) {
  return request({
    method: 'get',
    url:'/user/cart/',
    params:{
      action: payload.action,
      uid: payload.uid,
      item_id: payload.item_id
    }
  })
}


// read cart item
export function getCartItem(param) {
  return request({
    method:'get',
    url:'/user/cart/',
    params:{
      action:param.action,
      uid: param.uid
    }
  })
}

// update cart item
export function updateCartItem(payload) {
  return request({
    method:'post',
    url:'/user/cart/',
    data: qs.stringify({
      action:'updateGoods',
      goods_id: payload.goods_id,
      uid: payload.uid,
      number: payload.number,
      total_price: payload.total_price
    })
  })
}