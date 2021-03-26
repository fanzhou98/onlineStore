import {request} from "./request";
import qs from 'qs'

export function Login(username, password){
  return request({
    method:'post',
    url:'/User/login/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data:qs.stringify({'username': username, 'password':password})
  })
}

export function Register(username, password){
  return request({
    method:'post',
    url:'/User/register/',
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    data:qs.stringify({'username': username, 'password':password })
  })
}