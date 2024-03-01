import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Card, Tabs } from "@radix-ui/themes";
import { DollarSign } from "lucide-react";
import { useContext } from "react";

import { IPendingPayments } from "@/lib/axios/api";

import { OwnerContext } from "../../contexts/OwnerContext";
import { OwnersPendingPaymentsCard } from "./OwnersPendingPaymentsCards";
import { OwnersPaymentsContainer } from "./PaymentsContainer/OwnersPaymentsContainer";


export interface OwnersBodyContainerProps {
    data: IPendingPayments[] | undefined;
    error: Error | null;
    isLoading: boolean;
}

export function OwnersBodyContainer(){
    
    const {isLoading} = useContext(OwnerContext)

    if(isLoading){
        return <OwnersBodyContainerSkeleton />
    }

    return (
            
        <Card className="w-full" mx="2">
            <Tabs.Root mb="2" defaultValue="invoices">
                <Tabs.List>
                    <Tabs.Trigger value="invoices" >
                        <div  className="text-zinc-600 flex gap-1 items-center">
                         <DollarSign size={15}  /><span>Recebido</span>
                        </div>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="pending" >
                        <div  className="text-zinc-600 flex gap-1 items-center">
                            <EyeOpenIcon /> <span>Inadimplência</span>
                        </div>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="invoices">
                    <div className="flex flex-col gap-2 h-auto">
                        <OwnersPaymentsContainer />
                    </div>
                </Tabs.Content>
                <Tabs.Content value="pending">
                    <OwnersPendingPaymentsCard/>
                </Tabs.Content>
            </Tabs.Root>
        </Card>
    )
}


export function OwnersBodyContainerSkeleton(){
    return(
        <div className="max-w-[300px] sm:max-w-full  bg-zinc-50 p-2 rounded-md animate-pulse">
            <div className="flex gap-2 w-full">
                <div className="h-[20px] w-24 bg-zinc-200 rounded-md mb-2"></div>
                <div className="h-[20px] w-24 bg-zinc-200 rounded-md mb-2"></div>
            </div>
            <div>
                
                <div className="h-[60px] w-full bg-zinc-200 rounded-md mb-2"></div>
                <div className="h-[60px] w-full bg-zinc-200 rounded-md mb-2"></div>
                <div className="h-[60px] w-full bg-zinc-200 rounded-md mb-2"></div>
                <div className="h-[60px] w-full bg-zinc-200 rounded-md mb-2"></div>
                <div className="h-[60px] w-full bg-zinc-200 rounded-md mb-2"></div>
            </div>
        </div>
    )
}