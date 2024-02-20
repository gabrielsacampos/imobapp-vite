import { api } from "@/lib/axios/api";
import { useUser } from "@clerk/clerk-react";




// export function useCustomers(){
//     const {user} = useUser()

//     console.log(user)


//     return api.get('/me', {headers: {user: user?.id}})
// }