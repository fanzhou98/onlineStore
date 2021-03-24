import {request} from "./request";

export function getGoods() {
  return request({
    method:'get',
    url:'/Store',
  })
}