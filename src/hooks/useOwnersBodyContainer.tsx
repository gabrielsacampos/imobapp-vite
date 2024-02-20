import {useQuery} from '@tanstack/react-query'

import { apiClient } from '@/lib/axios/api'
import { useUser } from '@clerk/clerk-react'

export function useOwnersBodyContainer(){

    const {user} = useUser()

    const {data, isLoading, error} = useQuery(        
        { queryKey: ['pending-payments'], queryFn: () => apiClient.getPendingPayments(user!.id)}
    )

    return {data, isLoading, error}
}
