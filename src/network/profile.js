import {request} from "./request";
import qs from 'qs'

// get user info
export function getUserInfo(uid) {
  return request({
    method: 'get',
    url: '/user/profile/',
    params:{action:'getUserInfo',uid:uid}
  })
}

// edit account
export function editAccount(payload) {
  return request({
    method:'post',
    url:'/user/profile/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data: qs.stringify({
      'action':'editAccount',
      'uid':payload.uid,
      'nickName':payload.nickName,
      'shippingAddress':payload.shippingAddress,
      'receiptAddress': payload.receiptAddress,
      'country':payload.country,
      'email':payload.email
    })
  })
}

// update password
export function changePassword(uid, password) {
  return request({
    method:'post',
    url:'/user/profile/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data: qs.stringify({
      'action':'changePassword',
      'uid':uid,
      'password':password
    })
  })
}

