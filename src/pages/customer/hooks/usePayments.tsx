import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { apiClient } from "@/lib/axios/api";

export function usePayments(month: number | string, year: number | string){

    const {user} = useContext(AuthContext)

    const {data, error, isLoading} = useQuery(
        {
            queryKey: ['paid-payments-as-owner', month, year], 
            queryFn: () => apiClient.getPayments(month, year, user.customer_id)
        }
    )

    return {data, error, isLoading}
}