import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import { useRoute, useRouter } from "vue-router"
import { AxiosError } from "axios"
import type { DiaknakFeleletData, Felelet } from "./felelet"

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