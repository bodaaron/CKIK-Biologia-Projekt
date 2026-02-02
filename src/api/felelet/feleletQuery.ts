import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import { useRoute, useRouter } from "vue-router"
import { AxiosError } from "axios"
import type { DiaknakFeleletData, Felelet, Valasz, Valaszok } from "./felelet"

const diakFelelet = async (data: DiaknakFeleletData) => {
    const response = await axiosClient.post("/api/feleletek/diak", data)
    return response.data.data
}

export const useDiakFelelet = () => {
    return useMutation({
        mutationFn: diakFelelet,
    })
}

const getDiakFeleletek = async (id:number): Promise<Felelet[]> => {
    const response = await axiosClient.get(`/api/feleletek/${id}`)
    return response.data
}

export const useGetDiakFeleletek = () => {
    return useMutation({
        mutationFn: (id: number) => getDiakFeleletek(id)
    })
};

const valaszLeadas = async (data: Valasz) => {
    const response = await axiosClient.post("/api/valaszok/valasz", data)
    return response.data.data
}

export const useValaszLeadas = () => {
    return useMutation({
        mutationFn: valaszLeadas,
        onError(error: any) {
            console.log(error);
            throw new Error(error.response.data.error);
        },
    })
}

const feleletDateUpdate = async (id: Number) => {
    const response = await axiosClient.post(`/api/feleletek/date/${id}`)
    return response.data.data
}

export const useFeleletDateUpdate = () => {
    return useMutation({
        mutationFn: feleletDateUpdate,
        onError(error: any) {
            console.log(error);
            throw new Error(error.response.data.error);
        },
    })
}


const getValaszok = async (id:number): Promise<Valaszok[]> => {
    const response = await axiosClient.get(`/api/valaszok/${id}`)
    return response.data
}

export const useGetValaszok = () =>{
    return useMutation({
        mutationFn: (id: number) => getValaszok(id)
    })
}

const kijavitas = async (data: Valaszok) => {
    const response = await axiosClient.post(`/api/valaszok/javitas`,data)
    return response.data
}

export const useKijavitas = () =>{
    return useMutation({
        mutationFn: (data: Valaszok) => kijavitas(data)
    })
}