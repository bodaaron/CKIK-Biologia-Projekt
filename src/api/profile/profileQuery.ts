import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import type { ChangeData, ChangeResponse, Profile } from "./profile"

const getLoggedUser = async (): Promise<Profile> => {
    const email = localStorage.getItem("email");
    const response = await axiosClient.post(`http://localhost:3000/users/user`,{email})
    return response.data
}


export const useGetLoggedUser = () => {
    return useQuery(
        {
            queryKey: ["getLoggedUser"],
            queryFn: getLoggedUser,
        }
    )
}

const change = async (data: ChangeData): Promise<ChangeResponse> => {
    const response = await axiosClient.post("http://localhost:3000/users/mod", data)
    console.log({response})
    return response.data.data
}

export const usechange = () => {
    return useMutation({
        mutationFn: change,
        onSuccess(data) {
        },
    })
}