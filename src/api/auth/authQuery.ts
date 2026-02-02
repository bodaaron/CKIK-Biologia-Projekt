import axiosClient from '@/lib/axios'
import type { LoginParam, RegistrationData } from './auth'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

const registration = async (data: RegistrationData) => {
  const response = await axiosClient.post('/api/users/', data)
  return response.data.data
}

export const useRegistration = () => {
  return useMutation({
    mutationFn: registration,
    onError(error: any) {
      console.log(error)
      throw new Error(error.response.data.error)
    },
  })
}

var jog: number

const login = async (data: LoginParam) => {
  const response = await axiosClient.post('/api/users/login', data)
  sessionStorage.setItem('email', data.email)
  sessionStorage.setItem('userData', JSON.stringify(response.data))
  jog = response.data.jogosultsag
  return response.data.data
}

export const useLogin = () => {
  const { push } = useRouter()
  return useMutation({
    mutationFn: login,
    onSuccess() {
      if (jog == 1) {
        push({ name: 'tanar' })
      } else {
        push({ name: 'tanulo' })
      }
    },
    async onError(error: any) {
      throw new Error(error.response.data.error)
    },
  })
}
