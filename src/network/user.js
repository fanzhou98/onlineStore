import {request} from "./request";
import qs from 'qs'

// request when user login
export function Login(username, password){
  return request({
    method:'post',
    url:'/user/login/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data:qs.stringify({'username': username, 'password':password})
  })
}

// request when user sign up
export function Register(username, password){
  return request({
    method:'post',
    url:'/user/register/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data:qs.stringify({'username': username, 'password':password })
  })
}

// request for user browser history
export function readBrowserHistory(uid) {
  return request({
    method: 'post',
    url:'/user/history/',
    data:qs.stringify({
      'action': 'read',
      'uid':uid})
  })
}

// saving while user look through goods
export function saveBrowserHistory(goods_id, uid) {
  return request({
    method: 'post',
    url:'/user/history/',
    data:qs.stringify({
      'action': 'save',
      'goods_id':goods_id,
      'uid':uid})
  })
}

// delete user history information
export function deleteHistoryItem(goods_id, uid) {
  return request({
    method: 'post',
    url:'/user/history/',
    data:qs.stringify({
      'action': 'delete',
      'goods_id':goods_id,
      'uid':uid})
  })
}