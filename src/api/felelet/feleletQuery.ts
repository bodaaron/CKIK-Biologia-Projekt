import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import { useRoute, useRouter } from "vue-router"
import { AxiosError } from "axios"
import type { DiaknakFeleletData } from "./felelet"

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
