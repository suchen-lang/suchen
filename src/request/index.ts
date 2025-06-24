import request from '@/utils/request'

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 * @returns 
*/
export const login = (username: string, password: string) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
        username,
        password
    }
  })
}
