import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // 请求错误时做一些处理
    console.error('请求拦截器错误:', error)
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
