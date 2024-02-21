import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

import { AuthContext } from "@/contexts/AuthContext"
import { apiClient } from "@/lib/axios/api"
import { ITopCards } from "@/lib/axios/interfaces/customers/owners/ITopCards"

export function useTopCards(){
    const {user} = useContext(AuthContext)

    const { data, isLoading, error } = useQuery<ITopCards>(
        {
            queryKey: ['customer-top-cards'], 
            queryFn: () => apiClient.getCustomerOwnersTopCards(user! as string)
        }
    )

    console.log(isLoading)
    return {data, isLoading, error}
    
}