import { Badge, Card, Dialog, Link, Separator } from "@radix-ui/themes";
import { Building, User, XIcon } from "lucide-react";

import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";

import { OwnersPendingPaymentsProps } from "./OwnersPendingPaymentsCards";
import { IPendingPayments } from "@/lib/axios/api";

export interface OwnersPendingPaymentDialogProps {
    children: React.ReactNode;
    data: IPendingPayments
}


export function OwnersPendingPaymentDialog({data, children}: OwnersPendingPaymentDialogProps){

    const totalPending = data.pending_payments.reduce((acc, curr) => acc+= curr.value, 0)

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Close>
                    <XIcon size={15} />    
                </Dialog.Close>
                <Dialog.Description>
                    <div className="flex justify-between w-full">
                        <h1>Relaçao de faturas inadimplentes</h1> 
                        <Link
                            color="gray"
                            className="text-zinc-600" href="www.google.com" target="_blank">Contrato: {data.lease_code} </Link>
                    </div>

                    <div className="my-2">
                        <p className="font-ligth italic text-xs truncate text-zinc-500 flex gap-1 items-center">{<User size={10}/>} <span>{data.tenant_name}</span></p>
                        <p className="font-ligth italic text-xs  truncate text-zinc-500 flex gap-1 items-center">{<Building size={10}/>} {data.property}</p>
                    </div>

                    <div className="flex gap-2 text-xs italic text-red-600">
                        <h1 className="">{data.pending_payments.length} faturas em aberto</h1>
                        <p className="underline">({priceFormatter.format(totalPending)} )</p>
                    </div>
                <Separator size="4" my="2"/>
                </Dialog.Description>
                <ul className="mt-2">
                {data.pending_payments.map((payment) => {
                    return (
                            <li 
                                key={payment.id}
                                className="text-zinc-500 border-b border-zinc-200 py-2 flex justify-between  text-xs"
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="sm:flex gap-1">
                                        <p>
                                            Vencimento: {dateFormatter.format(new Date(payment.due_date))} 
                                        </p>
                                            <span className="italic text-zinc-400">
                                                {" "}({payment.arrears_days}4 dias em atraso)
                                            </span>
                                    </div>
                                
                                
                                
                                    <p>
                                        Pendente: {priceFormatter.format(payment.value)} 
                                    </p>
                                </div>

                                <Link
                                    href={payment.bank_slip_url}
                                    target="_blank"
                                    className="text-xs flex gap-1 items-center italic content-end">
                                    Acesse a fatura
                                    </Link>
                                
                            </li>
                    //     <Card key={payment.id} my="1">
                    //         <div className="flex gap-3 items-center">
                    //             <p className="italic text-xs text-zinc-500">Vencimento: {dateFormatter.format(new Date(payment.due_date))}</p>
                    //             <Badge 
                    //                 color="red"
                    //                 variant="soft"
                    //             >
                    //             {payment.arrears_days} dias em atraso</Badge>
                    //         </div>
                    //         <div className="flex " key={payment.id}>
                    //             <div className="flex flex-col gap-1">
                    //                 <span className="font-semibold text-zinc-500"></span>
                    //                 <Link
                    //                     href={payment.bank_slip_url}
                    //                     target="_blank"
                    //                     className="text-xs flex gap-1 items-center italic"
                    //                 >
                    //                     Acesse a fatura aqui
                    //                 </Link>
                    //             </div>
                    //         </div>
                    // </Card>
                    )
                })}
                </ul>

            </Dialog.Content>

        </Dialog.Root>
    )
}