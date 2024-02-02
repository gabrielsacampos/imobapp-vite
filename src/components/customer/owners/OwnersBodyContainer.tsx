import { Card } from "@radix-ui/themes"

import { OwnersInvoicesCard } from "./OwnersInvoicesCards"



export function OwnersBodyContainer(){
    return (
        <Card className="w-full">
            <div className="flex flex-col gap-2 h-auto">
                <OwnersInvoicesCard />
            </div>
        </Card>
    )
}
