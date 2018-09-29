import axios from 'axios'
// import qs from 'qs'
// import store from '@/store'
import { getToken } from '@/utils/auth'
axios.defaults.headers.common['token'] = getToken()
// 创建axios实例
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

const instanceUpload = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarywHzbrpNcVvUhEInA'
  }
})

// request拦截器
instance.interceptors.request.use(config => {
  // Do something before request is sent
  // Do something before request is sent
  // console.log('request拦截器 ==== token=== ', getToken())
  // console.log(store.getters.token)
  // if (store.getters.token) {
  config.headers['token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doGet(url, data) {
    // data: qs.stringify(data)
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: url,
        params: data
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doPut(url, data) {
    // data: qs.stringify(data)
    return new Promise((resolve, reject) => {
      instance({
        method: 'put',
        url: url,
        params: JSON.stringify(data)
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doDelete(url, data) {
    // data: qs.stringify(data)
    return new Promise((resolve, reject) => {
      instance({
        method: 'delete',
        url: url,
        params: data
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doPost(url, data) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: url,
        data: data
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  doUpLoadFile(url, data) {
    return new Promise((resolve, reject) => {
      instanceUpload({
        method: 'post',
        url: url,
        data: data
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
