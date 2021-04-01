import {request} from "./request";

export function getHomeMultidata(action) {
  return request({
    method:'get',
    url:'/home',
    params:{
      action
    }
  })
}

