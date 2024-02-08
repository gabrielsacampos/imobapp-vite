import { EyeOpenIcon, FileIcon } from "@radix-ui/react-icons";
import { Card, Tabs } from "@radix-ui/themes";

import { useOwnersBodyContainer } from "@/hooks/useOwnersBodyContainer";

import { OwnersInvoicesCard } from "./OwnersInvoicesCards";
import { OwnersPendingPaymentsCard } from "./OwnersPendingPaymentsCards";




export function OwnersBodyContainer(){
    const {data, error, isLoading} = useOwnersBodyContainer()

    if(isLoading){
        return 'carregando'
    }

    return (
        <Card className="max-w-[300px] sm:max-w-full">
            <Tabs.Root mb="2" defaultValue="invoices">
                <Tabs.List>
                    <Tabs.Trigger value="invoices" >
                        <div  className="text-zinc-600 flex gap-1 items-center">
                            <FileIcon /> <span>Notas</span>
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
                        <OwnersInvoicesCard />
                    </div>
                </Tabs.Content>
                <Tabs.Content value="pending">
                    <OwnersPendingPaymentsCard data={data!} />
                </Tabs.Content>
            </Tabs.Root>
        </Card>
    )
}




