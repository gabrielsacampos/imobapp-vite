import { useUser } from "@clerk/clerk-react"
import { useQuery } from "@tanstack/react-query"

import { apiClient } from "@/lib/axios/api"



export function useAuth(){
    let isAuthorizing = true
    let isAuthorized = false

    
    const {data: registeredUsers} = useQuery(
        { queryKey: ['users'], queryFn: apiClient.getUsers }
    )
    const {user, isLoaded} = useUser()

    console.log(user, isLoaded)

    const foundRegisteredUser = registeredUsers?.find(registeredUser => registeredUser.email === user?.emailAddresses[0].emailAddress)

    if(isLoaded){
        isAuthorizing = false
    }
    
    if(!foundRegisteredUser){
        isAuthorized = false
    }else{
        isAuthorized = true
    }

    return {user, isAuthorizing, isAuthorized }
}