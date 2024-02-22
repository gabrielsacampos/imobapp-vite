import { Badge } from "@radix-ui/themes";
import { useContext } from "react";
import { OwnerContext } from "../../contexts/OwnerContext";
import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";


export function OwnersLeases(){

    const {data, isLoading, error} = useContext(OwnerContext)

    if(isLoading){
        return null
    }

    const {leases} = data as IMeOwner;
    const activeLeases = leases.filter(lease  => lease.status === "active")
    const activeValue = activeLeases.reduce((acc, lease) => acc + lease.lease_value, 0)
    const activeCount = activeLeases.length


    return(
        <div>
            <h1 className="text-xl font-bold text-zinc-500">Contratos</h1>
            <div className="flex gap-1 w-full mt-2">
                <Badge color="green" className="w-1/2 flex justify-center">Ativos: {priceFormatter.format(activeValue)} <span className="italic font-light"> / {activeCount}</span></Badge>
                <Badge color="red" className="w-1/2 flex justify-center">Vencendo: R$ 45.876,54 <span className="italic font-light"> / 19</span></Badge>
            </div>
            <ul>
                { activeLeases.map(lease => {
                    return(
                        <li 
                            key={lease.code}
                            className="flex justify-between mt-5 rounded-lg p-2
                            " 
                            // hover:bg-zinc-50 hover:shadow-sm hover:cursor-pointer

                        >
                            
                            <div className="text-zinc-500 w-1/2">
                                <h1 className=" font-semibold text-md truncate max-w-[300px]">{lease.tenant_name}</h1>
                                <h2 className="text-xs ">{lease.property}</h2>
                            </div>
                            
                            <div className="flex justify-between text-xs items-center w-1/3">
                                <p className="text-zinc-500">Fim: {dateFormatter.format(new Date(lease.end_at))}</p>
                                <p className="text-zinc-500">Valor: {priceFormatter.format(lease.lease_value)}</p>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}