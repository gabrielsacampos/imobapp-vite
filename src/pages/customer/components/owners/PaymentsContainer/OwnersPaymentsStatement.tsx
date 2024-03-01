
import { Badge, Card, Table } from "@radix-ui/themes";
import { Collapse, CollapseProps, DatePicker } from 'antd';
import {format} from "date-fns";
import { ptBR } from "date-fns/locale";

import NoDataSVG from '@/svg/no-data.svg'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import { usePayments } from "../../../hooks/usePayments";
import { OwnersInvoiceDialog } from "../OwnersInvoiceDialog";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";
import { IPaidPayments } from "@/lib/axios/api";

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


export function OwnersPaymentsStatement(){
    const currentMonthNumber = new Date().getMonth()
    const currentYearNumber = new Date().getFullYear()

    // falta incluir alteracao de mes
   const {data, error, isLoading} = usePayments(currentMonthNumber, currentYearNumber)

    if(isLoading){
        return null
    }

    if(error){
        return <h1>Erro ao carregar dados</h1>
    }


    const countPayments = data?.length
    const totalPaid = data?.reduce((acc, payment) => acc += payment.total_value, 0)
    const totalOnlending = data?.reduce((acc, payment) => acc += payment.onlending_value, 0)
    
    
    const collapseItems: CollapseProps['items'] = data!.map((payment) => {
        const key = payment.id
        const label = <OwnersPaymentsAccordionLabel payment={payment}/>
        const children = <OwnersPaymentsItemsList items={payment.items}/>

        return {key, label, children}
    })

    return (
        <div className="my-5">
            <div className="flex justify-between bg-zinc-200/10 p-3 mb-2  rounded-md">
                <h1 className="text-zinc-500">{countPayments} faturas pagas</h1>
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
    payment: {property: string;
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



export function OwnersNotFoundInvoices(){
    return (
        <div className="h-full flex flex-col items-center justify-center mt-10" >
            <h1 className="text-semibold text-zinc-500">Não há notas para esse período.</h1>
            <img src={NoDataSVG} width={100} height={100} className="mt-5" />
        </div>    
    )
}

