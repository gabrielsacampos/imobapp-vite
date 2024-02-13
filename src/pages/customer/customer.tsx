



import { OwnersMain } from "@/components/customer/owners/OwnersMain";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";



export function Customer(){
    

    return(
        <div  className="w-full flex justify-center">
            <Tabs className="w-screen max-w-4xl flex flex-col" defaultValue="owner">
                <TabsList>
                    <TabsTrigger value='owner' >Proprietário</TabsTrigger>
                    <TabsTrigger value='tenant' >Locatário</TabsTrigger>
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