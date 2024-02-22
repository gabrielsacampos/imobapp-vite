
import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/axios/api";

export function useCustomers(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['customers'], queryFn: apiClient.getCustomers }
    )

    return {data, isLoading, error}
}