import request from '@/utils/request'

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 * @returns 
*/
export const login = (username: string, password: string) => {
  return request({
    url: '/admin/dispatcher-terminal/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取今日案件数量以及总案件数量
 * @returns 
*/
export const getCaseCount = () => {
  return request({
    url: '/agent/dispatch/case/statistics',
    method: 'get'
  })
}
