import axiosClient from "@/lib/axios"
import type { LoginParam, RegistrationData, RegistrationResponse} from "./auth"
import { useMutation, useQuery } from "@tanstack/vue-query"
import { useRoute, useRouter } from "vue-router"
import { QUERY_KEYS } from "@/utils/queryKeys"

const registration = async (data: RegistrationData): Promise<RegistrationResponse> => {
    const response = await axiosClient.post("http://localhost:3000/users/create", data)
    console.log({response})
    return response.data.data
}

export const useRegistration = () => {
    const {push} = useRouter()
    return useMutation({
        mutationFn: registration,
        onSuccess(data) {
        },
    })
}

const login = async (data: LoginParam): Promise<RegistrationResponse> => {
    const response = await axiosClient.post("http://localhost:3000/users/login", data)
    localStorage.setItem("email",data.email)
    return response.data.data
}

export const useLogin = () => {
    const {push} = useRouter()
    return useMutation({
        mutationFn: login,
        onSuccess(data) {
            localStorage.setItem("login", JSON.stringify(data))
            push({name: 'profile'})
        },
    })
}