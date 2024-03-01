import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

import { AuthContext } from "@/contexts/AuthContext"
import { apiClient } from "@/lib/axios/api"
import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner"

export function useMeAsOwner(){
    const {user} = useContext(AuthContext)

    const { data, isLoading, error } = useQuery<IMeOwner>(
        {
            queryKey: ['me-owner-data'], 
            queryFn: () => apiClient.getMeData(user.id)
        }
    )

    return {data, isLoading, error} 
}