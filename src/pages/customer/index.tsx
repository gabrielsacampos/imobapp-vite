
import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { IUsers } from "@/lib/axios/api";
import { OwnersMain } from "@/pages/customer/components/owners/OwnersMain";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Select } from "@radix-ui/themes";
import { useUsersList } from "@/hooks/useUsersList";



export function AutoCompleteUsers(){

    const {data, error, isLoading} = useUsersList()

    if(isLoading){
        return null
    }



    const formatedUsers = data!.map(user => {
        return {value: user.firstname + " " + user.lastname}
    })

    return (
        <Select.Root>
            <Select.Trigger style={{width: "300px"}}/>
            <Select.Content>
                <Select.Group>
                    {formatedUsers.map(user => (
                        <Select.Item 
                            key={user.value} value={user.value} >
                            {user.value}
                        </Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select.Root>    
    )
}


export function Customer(){
    const {user} = useContext(AuthContext)

    const {role} = user as IUsers;
    
    const userIsTenant = role && role.includes("TENANT");
    const userIsOwner = role && role.includes("OWNER")
    const userIsAdmin = role && role.includes("ADMIN")



    return(
        <div className="w-full flex flex-col items-center gap-2">
            {userIsAdmin ? <AutoCompleteUsers /> : null}
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