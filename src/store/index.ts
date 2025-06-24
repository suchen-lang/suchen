import { defineStore } from 'pinia'

// 用户信息接口
export interface UserInfo {
  userId: string | number
  username: string
  token?: string
  avatar?: string
  nickname?: string
  email?: string
}

// 用户 store
export const useUserStore = defineStore('user', {
  state: () => {
    const token = sessionStorage.getItem('token')
    return {
      userInfo: null as UserInfo | null,
      isLoggedIn: !!token,
      token: token
    }
  },

  actions: {
    // 设置用户信息
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      this.isLoggedIn = true
    },

    // 设置token
    setToken(token: string) {
      this.token = token
      sessionStorage.setItem('token', token)
    },

    // 清除用户信息
    clearUserInfo() {
      this.userInfo = null
      this.isLoggedIn = false
      this.token = null
      sessionStorage.removeItem('token')
    },

    // 登出
    logout() {
      this.clearUserInfo()
      return { success: true, message: '已退出登录' }
    }
  },

  getters: {
    // 获取用户名
    username: (state) => state.userInfo?.username || ''
  }
})
