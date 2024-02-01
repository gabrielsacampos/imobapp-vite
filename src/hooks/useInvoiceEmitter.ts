import {useQuery} from '@tanstack/react-query'

import { apiClient,IPostInvoice } from '@/lib/axios/api'

export function useCloseoutData(invoiceData: IPostInvoice){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['invoiceEmitter'], queryFn: () => apiClient.postInvoice(invoiceData) }
    )

    return {data, isLoading, error}
}
