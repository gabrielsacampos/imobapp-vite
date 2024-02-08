import {useQuery} from '@tanstack/react-query'

import { apiClient } from '@/lib/axios/api'

export function useOwnersBodyContainer(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['pending-payments'], queryFn: apiClient.getPendingPayments}
    )

    return {data, isLoading, error}
}
