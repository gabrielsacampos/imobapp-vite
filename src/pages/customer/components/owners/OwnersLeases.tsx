import { Badge, HoverCard } from "@radix-ui/themes";
import { InfoIcon } from "lucide-react";
import { useContext } from "react";

import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";

import { OwnerContext } from "../../contexts/OwnerContext";


export function OwnersLeases(){

    const {data, isLoading, error} = useContext(OwnerContext)

    if(error){
        return <p>error</p>
    }

    if(isLoading){
        return null
    }

    const {leases} = data as IMeOwner;
    
    const activeLeases = leases.filter(lease  => lease.status === "active")
    const activeValue = activeLeases.reduce((acc, lease) => acc + lease.lease_value, 0)
    const activeCount = activeLeases.length
    
    const daysToExpireParam = 60
    const expiringLeases = activeLeases.filter(lease => {
        return lease.days_to_expire <= daysToExpireParam
    })

    const expiringLeasesCount = expiringLeases.length
    const expiringLeasesValue = expiringLeases.reduce((acc, lease) => acc + lease.lease_value, 0)
    

    return(
        <div>
            <h1 className="text-xl font-bold text-zinc-500">Contratos</h1>
            <div className="flex flex-col md:flex-row gap-1 w-full mt-2">
                <Badge color="green" className="w-full md:w-1/2 flex justify-center">Ativos: {priceFormatter.format(activeValue)} <span className="italic font-light"> / {activeCount}</span></Badge>
                <Badge color="red" className="w-full md:w-1/2 flex justify-center">
                    <InfoHover /> Vencendo: {priceFormatter.format(expiringLeasesValue) } <span className="italic font-light"> / {expiringLeasesCount}</span>
                </Badge>
            </div>
            <ul>
                { activeLeases.map(lease => {
                    const isExpiring = lease.days_to_expire <= daysToExpireParam
                    

                    return(
                        <li 
                            key={lease.code}
                            className={`flex justify-between mt-5 rounded-lg p-2
                                ${isExpiring ? 
                                    "bg-red-50 shadow-sm cursor-pointer text-red-400  animate-pulse" : 
                                    "text-zinc-500"
                                }
                                
                            
                            `}
                            // hover:bg-zinc-50 hover:shadow-sm hover:cursor-pointer

                        >
                            
                            <div className=" w-1/2">
                                <h1 className=" font-semibold text-md truncate max-w-[300px]">{lease.tenant_name}</h1>
                                <h2 className="text-xs ">{lease.property}</h2>
                            </div>
                            
                            <div className="flex justify-between text-xs items-center w-1/3">
                                <p className="">Fim: {dateFormatter.format(new Date(lease.end_at))}</p>
                                <p className="">Valor: {priceFormatter.format(lease.lease_value)}</p>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}


export function InfoHover(){
    return(
        <HoverCard.Root>
            <HoverCard.Trigger>
                <InfoIcon size={12} />
            </HoverCard.Trigger>
            <HoverCard.Content side="top" sideOffset={5} align="center" alignOffset={5}>
                <p className="text-zinc-500 text-xs">Contratos com menos de 60 dias para o expirar</p>
            </HoverCard.Content>
        </HoverCard.Root>
    )
}