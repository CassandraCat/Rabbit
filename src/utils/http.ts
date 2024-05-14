import { useMemberStore } from './../stores/modules/member'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const memberStore = useMemberStore()
const token = memberStore.profile?.token

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    if (!config.url.startsWith('http')) {
      config.url = baseUrl + config.url
    }

    config.timeout = 10000

    config.header = {
      ...config.header,
      'source-client': 'miniapp',
    }

    if (token) {
      config.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(config: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...config,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          memberStore.clearProfile()
          uni.reLaunch({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
          })
        }
      },
      fail: (err) => {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请稍后重试',
        })
        reject(err)
      },
    })
  })
}
