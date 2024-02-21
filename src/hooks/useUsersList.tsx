import { useQuery } from "@tanstack/react-query"

import { apiClient } from "@/lib/axios/api"

export function useUsersList(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['users-list'], queryFn: apiClient.getUsers }
    )

    return {data, isLoading, error}
}