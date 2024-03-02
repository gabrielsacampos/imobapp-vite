
import { Button, Table } from "@radix-ui/themes";
import { Collapse, CollapseProps } from 'antd';
import { File } from "lucide-react";

import { IPaidPayments } from "@/lib/axios/api";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";
import SelectDate from '@/svg/select-date.svg';



export  interface OwnersPaymentsStatementProps {
    payments: IPaidPayments[];
} 

export function OwnersPaymentsStatement({payments}: OwnersPaymentsStatementProps){


    const countPayments = payments?.length
    const totalPaid = payments?.reduce((acc, payment) => acc += payment.total_value, 0)
    const totalOnlending = payments?.reduce((acc, payment) => acc += payment.onlending_value, 0)
    
    
    const collapseItems: CollapseProps['items'] = payments!.map((payment) => {
        const key = payment.id
        const label = <OwnersPaymentsAccordionLabel payment={payment}/>
        const children = <OwnersPaymentsItemsList items={payment.items}/>

        return {key, label, children}
    })


    if(payments.length === 0){
        return <OwnersNotFoundPayments />
    }

    return (
        <div className="my-5">
            <div className="flex justify-between bg-zinc-200/10 p-3 mb-2  rounded-md">
                <div className="flex gap-1 items-end">
                    <h1 className="text-zinc-500">{countPayments} faturas pagas</h1>
                    <Button size="1" color="gray" variant="soft"><File size={10} /></Button>
                </div>
                <div className="flex flex-col text-xs font-semibold text-zinc-500 text-end">
                    <h1> Entrada: {priceFormatter.format(totalPaid!)}</h1>
                    <h1 className="text-green-600 "> Saldo: {priceFormatter.format(totalOnlending!)}</h1>
                </div>
            </div>
            <Collapse items={collapseItems}/>
        </div>
    )
}


export interface OwnersPaymentsAccordionLabelProps {
    payment: {
        property: string;
        paid_at: Date;
        total_value: number;
        onlending_value: number;
        tenant_name: string;
    }
}
export function OwnersPaymentsAccordionLabel({payment}: OwnersPaymentsAccordionLabelProps){
    return(
        <div>
            <div className="flex justify-between" >
                    <div className=" max-w-[100px] sm:max-w-[300px]">
                        <h1 className=" flex font-semibold text-md flex-wrap ">{payment.property}</h1>
                        <h2 className="text-xs truncate">{payment.tenant_name}</h2>
                    </div>                                                        
                    <div className="flex flex-col text-xs items-center">
                    <p className="text-end  w-full">Pagamento: {dateFormatter.format(new Date(payment.paid_at))}</p>
                    <p className="text-end  w-full">Valor: {priceFormatter.format(payment.total_value)}</p>
                    <p className="text-end font-semibold text-green-600 w-full">Saldo: {priceFormatter.format(payment.onlending_value)}</p>
                </div>
            </div>
        </div>
    )
}


export interface OwnersPaymentsItemsListProps {
   items: IPaidPayments["items"]
}

export function OwnersPaymentsItemsList({items}: OwnersPaymentsItemsListProps){
    
    return(
        <Table.Root mt="-5">
            <Table.Row>
                <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Entrada</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Desconto</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Retido</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Administração</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Saldo</Table.ColumnHeaderCell>
            </Table.Row>
            {items.map((item) => {
                return(
                    <Table.Row key={item.description + " | " + item.value}>
                        <Table.Cell>{item.description}</Table.Cell>
                        <Table.Cell>{item.entry}</Table.Cell>
                        <Table.Cell>{item.discount}</Table.Cell>
                        <Table.Cell>{item.retained}</Table.Cell>
                        <Table.Cell>{item.management_fee}</Table.Cell>
                        <Table.Cell>{item.balance}</Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Root>
    )
}



export function OwnersNotFoundPayments(){
    return (
        <div className="h-full flex flex-col items-center justify-center mt-10" >
            <h1 className="text-semibold text-zinc-500">Não há nada por aqui. Selecione outro período.</h1>
            <img src={SelectDate} width={100} height={100} className="mt-5" />
        </div>    
    )
}

