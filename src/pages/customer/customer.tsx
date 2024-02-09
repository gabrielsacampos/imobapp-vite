



import { OwnersBodyContainer } from "@/components/customer/owners/OwnersBodyContainer";
import { OwnersTopCards } from "@/components/customer/owners/OwnersTopCards";
import { useOwnersBodyContainer } from "@/hooks/useOwnersBodyContainer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";



export function Customer(){
    const ownersBodyContainerQuery = useOwnersBodyContainer()




    return(
        <div  className="w-full flex justify-center">
            <Tabs className="w-full flex flex-col" defaultValue="owner">
                <TabsList>
                    <TabsTrigger value='owner' >Proprietário</TabsTrigger>
                    <TabsTrigger value='tenant' >Locatário</TabsTrigger>
                </TabsList>
                <TabsContent defaultValue="owner" value='owner'>
                    <div className="flex flex-col gap-5">
                        <OwnersTopCards />
                        <OwnersBodyContainer {...ownersBodyContainerQuery} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}