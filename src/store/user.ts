import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('userStore', () => {
  const token = ref<string>('')
  const setToken = (token1: string) => {
    token.value = token1
  }

  const userInfo = ref<any>({})
  const setUserInfo = (userInfo1: any) => {
    userInfo.value = userInfo1
  }

  const logout = () => {
    token.value = ''
    userInfo.value = {}
  }

  return {
    token,
    setToken,
    userInfo,
    setUserInfo,
    logout,
  }
})