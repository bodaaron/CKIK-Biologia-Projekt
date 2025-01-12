import axiosClient from "@/lib/axios"
import { useMutation, useQuery } from "@tanstack/vue-query"
import type { Kep } from "./kep"

// const getKep = async (): Promise<Kep> => {
//     const response = await axiosClient.post(`http://localhost:3000/users/user`,{email})
//     return response.data
// }

// export const useGetKep= () => {
//     return useQuery(
//         {
//             queryKey: ["getKep"],
//             queryFn: getKep,
//         }
//     )
// }

// const getKep = async (data: Kep): Promise<> => {
//     const response = await axiosClient.post("http://localhost:3000/users/login", data)
//     return response.data.data
// }


// export const usegetKep = () => {
//     const {push} = useRouter()
//     return useMutation({
//         mutationFn: login,
//         onSuccess(data) {
//             localStorage.setItem("login", JSON.stringify(data))
//             if(jog == 1){
//                 push({name: 'tanar'})
//             }
//             else{
//                 push({name: 'tanulo'})
//             }
//         },
//         onError(error: any) {
//             throw new Error(error.response.data.error);
//         },
//     })
// }