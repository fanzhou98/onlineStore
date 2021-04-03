import axios from "axios";

export function request(config) {
  // create request instance
  const instance = axios.create({
     // baseURL:'http://mydevstoreAPI.com:8888/api/',
    baseURL:'/api/',
    timeout:1000,
  });

  // intercept when requesting
  instance.interceptors.request.use(config=>{
    return config
  }, err=>{   // return error if request was rejected
    console.log(err);
  })

  //  intercept when server make response
  instance.interceptors.response.use(result=>{
    console.log(result);
    return result.data
  },err => { // return error if response failed
    console.log(err);
  })

  //3.发送请求,axios实例的返回值是一个promise
  return instance(config)
}

