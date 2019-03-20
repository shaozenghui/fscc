import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'
import { Message } from 'iview'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {

      }
      if (url !== '/finance/login') {
        if (url !== '/finance/forgotPassword/sendCode') {
          if (url !== '/finance/forgotPassword/retrievePassword') {
            config.headers['Authorization'] = `Token ${getToken()}`
          }
        }
      }
      return config
    }, error => {
      Message.error('请求超时!')
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      this.distroy(url)
      const { data } = res
      return data
    }, error => {
      this.distroy(url)
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
