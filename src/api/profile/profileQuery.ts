import axiosClient from '@/lib/axios'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { ChangeData, ChangeResponse, Kep, Profile, User } from './profile'

const getLoggedUser = async (): Promise<Profile> => {
  const email = localStorage.getItem('email')
  const response = await axiosClient.post(`http://localhost:3000/users/user`, { email })
  localStorage.setItem('id', response.data.id)
  return response.data
}

export const useGetLoggedUser = () => {
  return useQuery({
    queryKey: ['getLoggedUser'],
    queryFn: getLoggedUser,
  })
}

const change = async (data: ChangeData): Promise<ChangeResponse> => {
  const response = await axiosClient.post('http://localhost:3000/users/mod', data)
  console.log({ response })
  return response.data.data
}

export const usechange = () => {
  return useMutation({
    mutationFn: change,
    onSuccess(data) {},
    onError(error: any) {
      throw new Error(error.response.data.error)
    },
  })
}

const getKepek = async (): Promise<Kep[]> => {
  const response = await axiosClient.get(`http://localhost:3000/kepek/`)
  return response.data
}

export const useGetKepek = () => {
  return useQuery({
    queryKey: ['getKepek'],
    queryFn: getKepek,
  })
}

const getUserek = async (): Promise<User[]> => {
  const response = await axiosClient.get(`http://localhost:3000/users/`)
  return response.data
}

export const useGetUserek = () => {
  return useQuery({
    queryKey: ['getUserek'],
    queryFn: getUserek,
  })
}
