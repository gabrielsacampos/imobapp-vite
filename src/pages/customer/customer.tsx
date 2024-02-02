



import { OwnersBodyContainer } from "@/components/customer/owners/OwnersBodyContainer";
import { OwnersTopCards } from "@/components/customer/owners/OwnersTopCards";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";



export function Customer(){
    return(
        <div  className="w-full flex justify-center">
            <Tabs className="w-full flex flex-col">
                <TabsList defaultValue="owner">
                    <TabsTrigger value='owner' >Proprietário</TabsTrigger>
                    <TabsTrigger value='tenant' >Locatário</TabsTrigger>
                </TabsList>
                <TabsContent defaultValue="owner" value='owner'>
                    <div className="flex flex-col gap-5">
                        <OwnersTopCards />
                        <OwnersBodyContainer />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}