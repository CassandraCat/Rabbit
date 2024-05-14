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
