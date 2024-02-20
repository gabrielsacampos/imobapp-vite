import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { IUsers } from "@/lib/axios/api";
import { OwnersMain } from "@/pages/customer/components/owners/OwnersMain";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";



export function Customer(){
    const {user} = useContext(AuthContext)

    const {role} = user as IUsers;
    
    const userIsTenant = role && role.includes("TENANT");
    const userIsOwner = role && role.includes("OWNER")

    return(
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
    )
}