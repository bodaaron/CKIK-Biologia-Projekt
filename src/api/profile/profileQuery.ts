import axiosClient from "@/lib/axios"
import { useQuery } from "@tanstack/vue-query"
import type { Profile } from "./profile"

const getLoggedUser = async (): Promise<Profile> => {
    const email = localStorage.getItem("email");
    const response = await axiosClient.post(`http://localhost:3000/users/user`,{email: email})
    return response.data.data
}

export const useGetLoggedUser = () => {
    return useQuery(
        {
            queryKey: ["getLoggedUser"],
            queryFn: getLoggedUser,
        }
    )
}