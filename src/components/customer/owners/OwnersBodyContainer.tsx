import { FileIcon } from "@radix-ui/react-icons"
import { Card, Tabs } from "@radix-ui/themes"

import { OwnersInvoicesCard } from "./OwnersInvoicesCards"



export function OwnersBodyContainer(){
    return (
        <Card className="w-full">
            <Tabs.Root mb="2" defaultValue="invoices">
                <Tabs.List>
                    <Tabs.Trigger value="invoices" >
                        <div  className="text-zinc-600 flex gap-1 items-center">
                            <FileIcon /> <span>Notas</span>
                        </div>
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            <div className="flex flex-col gap-2 h-auto">
                <OwnersInvoicesCard />
            </div>
        </Card>
    )
}
