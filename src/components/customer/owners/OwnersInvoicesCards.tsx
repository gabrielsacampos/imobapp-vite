import { Badge, Card } from "@radix-ui/themes";

import { mock } from "@/pages/customer/mock";

import { OwnersInvoiceDialog } from "./OwnersInvoiceDialog";




export function OwnersInvoicesCard(){
    return (
        <>
        {mock.map((item) => {
            return(
                <OwnersInvoiceDialog key={item.number}>
                    <Card >
                        <header className="w-full mb-2">
                            <Badge> Nota {item.number}</Badge>
                        </header>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-zinc-600 w-auto ">
                                <h1 className="">Emissão: <span className="font-bold"> {item.effective_date}</span></h1>
                                <h1 className="flex items-center gap-1">Nota: <span className="font-bold"> {item.value}</span></h1>
                                <h1 className="flex items-center gap-1">Repasse: <span className="font-bold"> 35.098,68</span></h1>
                            </div>   
                    </Card>           
                </OwnersInvoiceDialog>
                    )
                })}        
       </>
    )
}

