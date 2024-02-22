import { useUser } from "@clerk/clerk-react"
import { useQuery } from "@tanstack/react-query"

import { apiClient } from "@/lib/axios/api"



export function useAuth(){
    let isAuthorizing = true
    let isAuthorized = false
    let user = null;

    
    const {data: registeredUsers} = useQuery(
        { queryKey: ['users'], queryFn: apiClient.getUsers }
    )
    const {user: clerkUser, isLoaded} = useUser()

    user = registeredUsers?.find(registeredUser => registeredUser.email === clerkUser?.emailAddresses[0].emailAddress)

    if(isLoaded){
        isAuthorizing = false
    }
    
    if(!user){
        isAuthorized = false
    }else{
        isAuthorized = true
    }

    return {user, isAuthorizing, isAuthorized }
}