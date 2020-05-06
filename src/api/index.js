import http from '@/utils/http'

// 微信小程序会员登录接口
export const weChatLogin = (params) => http.post('/api-customer/customer/security/2056/v1/weChatLogin', params)
