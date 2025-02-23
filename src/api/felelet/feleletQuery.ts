import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import { useRoute, useRouter } from "vue-router"
import { AxiosError } from "axios"
import type { DiaknakFeleletData, Felelet, Valasz } from "./felelet"

const diakFelelet = async (data: DiaknakFeleletData) => {
    const response = await axiosClient.post("http://localhost:3000/feleletek/diak", data)
    return response.data.data
}

export const useDiakFelelet = () => {
    const {push} = useRouter()
    return useMutation({
        mutationFn: diakFelelet,
        onSuccess(data) {
        },
        onError() {
        },
    })
}

const getDiakFeleletek = async (id:number): Promise<Felelet[]> => {
    const response = await axiosClient.get(`http://localhost:3000/feleletek/${id}`)
    return response.data
}

export const useGetDiakFeleletek = (id: number) => {
    return useQuery({
        queryKey: ["getDiakFeleletek", id],
        queryFn: () => getDiakFeleletek(id),
        enabled: !!id
    });
};

const valaszLeadas = async (data: Valasz) => {
    const response = await axiosClient.post("http://localhost:3000/valaszok/valasz", data)
    return response.data.data
}

export const useValaszLeadas = () => {
    const {push} = useRouter()
    return useMutation({
        mutationFn: valaszLeadas,
        onSuccess(data) {
        },
        onError(error: any) {
            console.log(error);
            throw new Error(error.response.data.error);
        },
    })
}

const feleletDateUpdate = async (id: Number) => {
    const response = await axiosClient.post(`http://localhost:3000/feleletek/date/${id}`)
    return response.data.data
}

export const useFeleletDateUpdate = () => {
    const {push} = useRouter()
    return useMutation({
        mutationFn: feleletDateUpdate,
        onSuccess(data) {
        },
        onError(error: any) {
            console.log(error);
            throw new Error(error.response.data.error);
        },
    })
}
