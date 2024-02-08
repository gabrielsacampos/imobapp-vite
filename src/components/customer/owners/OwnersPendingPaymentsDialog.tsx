import { Badge, Card, Dialog, Link } from "@radix-ui/themes";
import { Building, User, XIcon } from "lucide-react";

import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";

import { OwnersPendingPaymentsProps } from "./OwnersPendingPaymentsCards";

export interface OwnersPendingPaymentDialogProps extends OwnersPendingPaymentsProps{
    children: React.ReactNode;
}


export function OwnersPendingPaymentDialog(props: OwnersPendingPaymentDialogProps){

    const totalPending = props.pending_payments.reduce((acc, curr) => acc+= curr.value, 0)

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                {props.children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Close>
                    <XIcon size={15} />    
                </Dialog.Close>
                <Dialog.Description>
                    <div className="flex justify-between w-full">
                        <h1>Relaçao de faturas inadimplentes</h1> 
                        <Link 
                            className="text-zinc-600" href="www.google.com" target="_blank">Contrato: {props.lease_code} </Link>
                    </div>

                    <div className="my-2">
                        <p className="font-ligth italic text-xs truncate text-zinc-500 flex gap-1 items-center">{<User size={10}/>} <span>{props.tenant_name}</span></p>
                        <p className="font-ligth italic text-xs  truncate text-zinc-500 flex gap-1 items-center">{<Building size={10}/>} {props.property}</p>
                    </div>

                    <div className="flex gap-2 text-xs italic text-red-600">
                        <h1 className="">{props.pending_payments.length} faturas em aberto</h1>
                        <p className="underline">({priceFormatter.format(totalPending)} )</p>
                    </div>
                </Dialog.Description>
                <ul>
                {props.pending_payments.map((payment) => {
                    return (
                            <li key={payment.id}>
                                <p>Vencimento: {dateFormatter.format(new Date(payment.due_date))}</p>
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
                    //                 <span className="font-semibold text-zinc-500">{priceFormatter.format(payment.value)}</span>
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