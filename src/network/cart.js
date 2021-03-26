import {request} from "./request";
import qs from 'qs'

export function addGoods(payload) {
  return request({
    method: 'post',
    url:'/User/cart/',
    data: qs.stringify({goodsItem:payload})
  })
}
export function deleteGoods(payload) {
  return request({
    method: 'get',
    url:'/User/cart/',
    params:{
      action: payload.action,
      uid: payload.uid,
      item_id: payload.item_id
    }
  })
}

export function getCartItem(param) {
  return request({
    method:'get',
    url:'/User/cart/',
    params:{
      action:param.action,
      uid: param.uid
    }
  })
}