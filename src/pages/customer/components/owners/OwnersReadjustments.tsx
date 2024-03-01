import { Badge, Callout } from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";
import { useContext } from "react";

import { priceFormatter } from "@/lib/utils/formatter";

import { OwnerContext } from "../../contexts/OwnerContext";

export function OwnersReadjustmentsContainer(){
    // const {data, error, isLoading} = useContext(OwnerContext)

    // if(isLoading){
    //     return null
    // }

    // if(error){
    //     return null
    // }


    // const {leases} = data!

    // const currentMonth = new Date().getMonth()
    // const mustReadjust = leases.filter(lease => {
    //     return lease.readjustment_month === currentMonth
    // })

    // const countLeasesToReajust= mustReadjust.length


    // return(
    //     <div>
    //         <h1 className="text-xl font-semibold text-zinc-500">Reajustes de aluguel</h1>
            
            
    //         <div className="flex flex-col gap-1 mt-5">
    //             <Callout.Root size={"1"}>
    //                 <Callout.Text>
    //                     {countLeasesToReajust} contratos deverão reajustar nesse mês.
    //                 </Callout.Text>
    //             </Callout.Root>


    //             <Callout.Root color="green">
    //                 <Callout.Text>
    //                     Sua renda será incrementada com <span className="font-bold">R$ 123.234,33</span>. Isso equivale a um acrescimo de <span className="font-bold">x,xxx</span> 🤑
    //                 </Callout.Text>
    //             </Callout.Root>
    //         </div>

    //         <ul>
    //             {mustReadjust.map(lease => {
    //                 return(
    //                     <li 
    //                         key={1}
    //                         className="flex flex-col justify-between mt-5 rounded-lg p-2" 

    //                     >
    //                         <div className="flex gap-2">
    //                             <h1 className=" font-semibold text-md truncate max-w-[300px]">{lease.property}</h1>
    //                                 <Badge> <span className="font-bold flex items-center gap-1"><ArrowUpRight size={10}/> 31,23</span> </Badge>
    //                         </div>

    //                         <div className="flex gap-5 mt-2 text-xs items-center">
    //                             <p className="text-zinc-500">Atual: {priceFormatter.format(lease.lease_value)}</p>
    //                             <p className="text-zinc-500">Novo: {priceFormatter.format(34654.54)}</p>
    //                         </div>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //     </div>
    // )
}