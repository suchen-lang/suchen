import { createStore } from 'vuex'
import { login } from '@/request'

// 用户信息接口
export interface UserInfo {
  id: string | number
  username: string
  nickname?: string
  avatar?: string
  email?: string
  phone?: string
  role?: string
}

// 全局状态接口
export interface RootState {
  userInfo: UserInfo | null
  isLoggedIn: boolean
  token: string | null
}

export default createStore<RootState>({
  state: (): RootState => ({
    userInfo: null,
    isLoggedIn: false,
    token: localStorage.getItem('token') || null
  }),

  mutations: {
    // 设置用户信息
    SET_USER_INFO(state, userInfo: UserInfo) {
      state.userInfo = userInfo
      state.isLoggedIn = true
    },

    // 设置token
    SET_TOKEN(state, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },

    // 清除用户信息
    CLEAR_USER_INFO(state) {
      state.userInfo = null
      state.isLoggedIn = false
      state.token = null
      localStorage.removeItem('token')
    }
  },

  actions: {
    // 登录
    async login({ commit }, { username, password }) {
      // login
      const res = await login(username, password)
      console.log(res)
    },

    // 登出
    logout({ commit }) {
      commit('CLEAR_USER_INFO')
      return { success: true, message: '已退出登录' }
    }
  },

  getters: {
    // 获取用户信息
    userInfo: (state) => state.userInfo,

    // 获取登录状态
    isLoggedIn: (state) => state.isLoggedIn,

    // 获取token
    token: (state) => state.token,

    // 获取用户名
    username: (state) => state.userInfo?.username || ''
  }
})
