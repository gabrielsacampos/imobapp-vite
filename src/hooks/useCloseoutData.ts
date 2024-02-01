import {useQuery} from '@tanstack/react-query'

import { apiClient } from '@/lib/axios/api'

export function useCloseoutData(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['closeoutData'], queryFn: apiClient.getClouseoutItems }
    )

    return {data, isLoading, error}
}
