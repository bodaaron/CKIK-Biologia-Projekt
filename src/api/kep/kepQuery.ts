import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import type { Adat } from "./kep"

const getAdatok = async (id:number): Promise<Adat[]> => {
    const response = await axiosClient.get(`http://localhost:3000/adatok/${id}`)
    return response.data
}

export const useGetAdatok = () => {
    return useMutation({
        mutationFn: (id: number) => getAdatok(id)
    })
};