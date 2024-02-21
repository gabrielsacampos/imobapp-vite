import { Badge, Card } from "@radix-ui/themes";
import { DatePicker } from 'antd';

import { OwnersInvoiceDialog } from "./OwnersInvoiceDialog";

const mock = [
    {
        number: 1,
        effective_date: "01/01/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 2,
        effective_date: "01/02/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 3,
        effective_date: "01/03/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 4,
        effective_date: "01/04/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 5,
        effective_date: "01/05/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 6,
        effective_date: "01/06/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 7,
        effective_date: "01/07/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 8,
        effective_date: "01/08/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 9,
        effective_date: "01/09/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 10,
        effective_date: "01/10/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 11,
        effective_date: "01/11/2021",
        value: "R$ 1.000,00"
    },
    {
        number: 12,
        effective_date: "01/12/2021",
        value: "R$ 1.000,00"
    },

]


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

