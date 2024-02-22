
import { Select } from "@radix-ui/themes";
import { useContext } from "react";

import { AuthContext, AuthContextType } from "@/contexts/AuthContext";
import { useUsersList } from "@/hooks/useUsersList";
import { IUsers } from "@/lib/axios/api";
import { OwnersMain } from "@/pages/customer/components/owners/OwnersMain";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";



// export function AutoCompleteUsers(){
//     const {user} = useContext<AuthContextType>(AuthContext)
 
    
//     const {data, error, isLoading} = useUsersList()


//     if(isLoading){
//         return null
//     }



//     const formatedUsers = data!.map(user => {
//         return {value: user.firstname + " " + user.lastname}
//     })

//     return (
//         <Select.Root onValueChange={handleSelectValueChange}>
//             <Select.Trigger style={{width: "300px"}} placeholder="Selecione usuário"/>
//             <Select.Content>
//                 <Select.Group>
//                 <Select.Label>Selecione usuário</Select.Label>
//                     {formatedUsers.map(user => (
//                         <Select.Item 
//                             key={user.value} value={user.value} 
//                         >
//                             {user.value}
//                         </Select.Item>
//                     ))}
//                 </Select.Group>
//             </Select.Content>
//         </Select.Root>    
//     )
// }


export function Customer(){
    const {user} = useContext<AuthContextType>(AuthContext)

    const {role} = user as IUsers;
    
    const userIsTenant = role && role.includes("TENANT");
    const userIsOwner = role && role.includes("OWNER")
    // const userIsAdmin = role && role.includes("ADMIN")

    return(
        <div className="w-full flex flex-col items-center gap-2">
            {/* {userIsAdmin ? <AutoCompleteUsers /> : null} */}
            <div  className="w-full flex justify-center">
                <Tabs className="w-screen max-w-4xl flex flex-col" defaultValue="owner">
                    <TabsList>
                        {userIsTenant ? 
                            <TabsTrigger value='tenant' >Locatário</TabsTrigger> : null
                        }
                        {userIsOwner ? 
                            <TabsTrigger value='owner' >Proprietário</TabsTrigger>:
                            null
                        }
                    </TabsList>
                    <TabsContent 
                        style={{width: "100%"}}
                        defaultValue="owner" 
                        value='owner'
                    >
                        <OwnersMain />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}