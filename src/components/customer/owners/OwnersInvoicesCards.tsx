import { Badge, Card } from "@radix-ui/themes";

import { mock } from "@/pages/customer/mock";

import { OwnersInvoiceDialog } from "./OwnersInvoiceDialog";




export function OwnersInvoicesCard(){
    return (
        <>
        {mock.map((item) => {
            return(
                <OwnersInvoiceDialog key={item.number}>
                    <Card className="hover:bg-zinc-50 hover:cursor-pointer">
                        <header className="w-full mb-2">
                            <Badge> Nota {item.number}</Badge>
                        </header>
                            <div className="flex flex-col gap-2 sm:flex-row sm:gap-5 text-zinc-500 w-auto ">
                                <h1 className="">Emissão: {item.effective_date}</h1>
                                <h1 className="flex items-center gap-1">Nota:  {item.value}</h1>
                                <h1 className="flex items-center gap-1">Repasse:  35.098,68</h1>
                            </div>   
                    </Card>           
                </OwnersInvoiceDialog>
                    )
                })}        
       </>
    )
}

