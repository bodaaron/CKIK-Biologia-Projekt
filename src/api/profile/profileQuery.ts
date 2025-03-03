import axiosClient from '@/lib/axios'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { ChangeData, JelszoValtoztato, Kep, Profile, User } from './profile'

const getLoggedUser = async (): Promise<Profile> => {
  const email = localStorage.getItem('email')
  const response = await axiosClient.get(`http://localhost:3000/users/user/${email}`)
  return response.data
}

export const useGetLoggedUser = () => {
  return useQuery({
    queryKey: ['getLoggedUser'],
    queryFn: getLoggedUser,
  })
}

const change = async (data: ChangeData) => {
  const response = await axiosClient.post(`http://localhost:3000/users/mod/${data.id}`, data)
}

export const usechange = () => {
  return useMutation({
    mutationFn: change,
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

const deleteUser = async (id: number) => {
  await axiosClient.delete(`http://localhost:3000/users/delete/${id}`)
}

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
  })
}

const giveJogToUser = async (id: number) => {
  await axiosClient.post(`http://localhost:3000/users/jog/${id}`)
}

export const useGiveJogToUser = () => {
  return useMutation({
    mutationFn: (id: number) => giveJogToUser(id),
  })
}

const jelszoValtoztatas = async (data: JelszoValtoztato) => {
  await axiosClient.post(`http://localhost:3000/users/jelszo/${data.email}`, data)
}

export const UseJelszoValtoztatas = () => {
  return useMutation({
    mutationFn: jelszoValtoztatas,
  })
}
