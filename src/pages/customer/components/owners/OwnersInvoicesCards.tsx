import { Badge, Card } from "@radix-ui/themes";
import { DatePicker } from 'antd';

import { mock } from "@/pages/customer/mock";

import { OwnersInvoiceDialog } from "./OwnersInvoiceDialog";




export function OwnersInvoicesCard(){
    return (
        <div className="my-5">
            <div className="flex flex-col sm:flex-row justify-center gap-2 items-center">
                <h1 className="font-semibold text-zinc-500">Listagem de notas fiscais emitidas no período</h1>
                    <DatePicker 
                        className="w-[200px]"
                        placeholder="Selecione o mês"
                        onChange={() => console.log("changed")} 
                        picker="month" 
                    />

            </div>
            
            <ul>
            {mock.map((item) => {
                return(
                    <li key={item.number}>
                        <OwnersInvoiceDialog >
                            <Card className="hover:bg-zinc-50 hover:cursor-pointer" mt="2">
                                <header className="w-full mb-2">
                                    <Badge> Nota {item.number}</Badge>
                                </header>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-5 text-zinc-500 text-xs w-auto ">
                                        <h1 className="">Emissão: {item.effective_date}</h1>
                                        <h1 className="flex items-center gap-1">Nota:  {item.value}</h1>
                                        <h1 className="flex items-center gap-1">Repasse:  35.098,68</h1>
                                    </div>   
                            </Card>           
                        </OwnersInvoiceDialog>
                    </li>
                        )
                    })}        
           </ul>
        </div>
    )
}

