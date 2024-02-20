import { api, apiClient } from "@/lib/axios/api"
import { useUser } from "@clerk/clerk-react"
import { useQuery } from "@tanstack/react-query"



export function useAuth(){
    let isAuthorizing = true
    let isAuthorized = false

    
    const {data: registeredUsers, isLoading} = useQuery(
        { queryKey: ['users'], queryFn: apiClient.getUsers }
    )
    const {user, isLoaded, isSignedIn} = useUser()

    const foundRegisteredUser = registeredUsers?.find(registeredUser => registeredUser.email === user?.emailAddresses[0].emailAddress)

// isAuthorizing: isLoading(true) e isLoaded(false)

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