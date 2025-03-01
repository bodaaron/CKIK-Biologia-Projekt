import axiosClient from "@/lib/axios"
import { useQuery } from "@tanstack/vue-query"
import type { Adat } from "./kep"

const getAdatok = async (id:number): Promise<Adat[]> => {
    const response = await axiosClient.get(`http://localhost:3000/adatok/${id}`)
    return response.data
}

export const useGetAdatok = (id: number) => {
    return useQuery({
        queryKey: ["getAdatok", id],
        queryFn: () => getAdatok(id),
        enabled: !!id
    });
};