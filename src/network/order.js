import {request} from "./request";
import qs from 'qs'

export function submitOrder(payload) {
  return request({
    method: 'post',
    url:'/order/',
    data: qs.stringify({
      action:'submitOrder',
      uid: payload.uid,
      goods_id: payload.goods_id,
      goods_number: payload.goods_number,
      price: payload.price,
      total_price: payload.total_price,
      payment_method: payload.payment_method,
      shipping_address: payload.shipping_address,
      order_status: 'paid'
    })
  })
}

export function askOrderList(uid) {
  return request({
    method: 'get',
    url:'/order/',
    params:{
      action:'askOrderList',
      uid
    }
  })
}


export function deleteOrder(order_id) {
  return request({
    method: 'get',
    url:'/order/',
    params:{
      action:'deleteOrder',
      order_id
    }
  })
}

export function getShippingTrack(uid) {
  return request({
    method: 'get',
    url:'/order/',
    params:{
      action:'getShippingTrack',
      uid
    }
  })
}