import {request} from "./request";

export function getHomeMultidata(action) {
  return request({
    method:'get',
    url:'/Home',
    params:{
      action
    }
  })
}

