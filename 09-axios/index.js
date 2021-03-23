const axios = require('axios')

// 全局设置
axios.default.baseUrl = 'http://123.207.32.32:8000'
// 超时时间，毫秒
axios.default.timeout = 5000
// 默认为get请求
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios.get({})

// 合并发送请求
axios.all([axios({}), axios({})]).then(result => {
  // result为数组
})

// 封装
export function request(config) {
  const instance = axios.create({
    // 全局设置
    baseUrl:'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance(config)
}
request({
  url: '/home/multidata',
  params: {
    type: 'pop',
    page: 1
  }
}).then(result => {})

// 拦截过滤
const instance = axios.create({
  // 全局设置
  baseUrl:'http://123.207.32.32:8000',
  timeout: 5000
})
instance.interceptors.request.use(config => {
  // 过滤配置
  return config
}, err => {})
instance.interceptors.response.use(result => {
  // 过滤结果
  return result
}, err => {})
