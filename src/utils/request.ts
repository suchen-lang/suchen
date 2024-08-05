import axios from 'axios'
const request = axios.create({
  baseURL: '',
  timeout: 3000
})
request.interceptors.request.use(
  (config) => {
    // 在请求发出之前做一些处理
    return config
  },
  (error) => {
    // 请求错误时做一些处理
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    // 请求成功时做一些处理
    return response
  },
  (error) => {
    // 请求错误时做一些处理
    return Promise.reject(error)
  }
)

export default request
