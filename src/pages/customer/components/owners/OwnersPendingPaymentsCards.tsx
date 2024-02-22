import { Badge, Card } from "@radix-ui/themes";
import { Building, InfoIcon } from "lucide-react";

import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner";
import { priceFormatter } from "@/lib/utils/formatter";

import { useMeAsOwner } from "../../hooks/useMeAsOwner";
import { OwnersPendingPaymentDialog } from "./OwnersPendingPaymentsDialog";

export function OwnersPendingPaymentsCard(){
    const {data, isLoading, error} = useMeAsOwner()

    if(isLoading){
        return;
    }

    if(error){
        return <p>error</p>;
    }

    const { properties_with_pendings } = data as IMeOwner
    console.log(properties_with_pendings)
    const totalPending = properties_with_pendings.reduce((acc, curr) => acc+= curr.total_pending, 0)
    const countPending = properties_with_pendings.reduce((acc, curr) => acc+= curr.count_pending, 0)
   
    
    return (        
            <div className="py-4">
                <header className="flex gap-1 items-center">
                    <Badge
                        color="red"
                        variant="surface"
                        className="py-2 w-full flex justify-center" 
                    >

                            <InfoIcon size={10}/>
                            <p className="text-">
                                {countPending} faturas em aberto ({priceFormatter.format(totalPending)})
                            </p>

                    </Badge>
                </header>

                <div className="flex flex-col gap-2 mt-2">
                    {properties_with_pendings!.map((lease) => {
                        const totalPending = lease.pending_payments.reduce((acc, curr) => acc+= curr.value, 0)
                        const countPending = lease.pending_payments.length;



                        return (
                            <OwnersPendingPaymentDialog
                                key={lease.lease_code} 
                                data={lease}
                            >
                                <Card 
                                    key={lease.lease_code} 
                                    className="hover:bg-zinc-50 hover:cursor-pointer h-[60px]"
                                >
                                    <div className="flex justify-between">
                                        <div className="flex flex-col w-1/2">
                                            
                                            <p className="text-zinc-600 text-sm">Contrato: <span className="font-semibold">{lease.lease_code}</span></p>
                                            
                                            
                                                <p className="truncate flex gap-1 items-center text-zinc-500 italic text-xs">  
                                                    <span><Building size={10} className="text-zinc-500"/></span> 
                                                    {lease.property}
                                                </p>
                                            
                                                
                                        </div>

                                        <div className="flex flex-col justify-center w-1/2 items-end text-zinc-600 italic text-end text-xs">
                                            <p>{countPending} faturas pendentes</p>
                                            <p>({priceFormatter.format(totalPending)})</p>
                                        </div>
                                    </div>
                                </Card>
                            </OwnersPendingPaymentDialog>
                        )
                    })}
                    
                </div>
            </div>
    )
}

