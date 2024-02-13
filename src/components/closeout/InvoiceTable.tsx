

import { Card, Table } from "@radix-ui/themes";

import { ISharedClouseoutPageData } from "@/lib/axios/api";
import { priceFormatter } from '@/lib/utils/formatter';

import { InvoiceDialog } from "./InvoiceDialog";
import { InvoiceEmitter } from "./InvoiceEmitter";
import { InvoiceSumary } from "./InvoiceSumary";



interface InvoiceTableProps{
    items: ISharedClouseoutPageData[]
}



export function InvoiceTable({items}: InvoiceTableProps){
    
    const ownersMainData = items.reduce((acc: {owner_document: string, owner_name:string}[], curr) => {
        const { owner_document, owner_name } = curr;
        const existingOwner = acc.find(owner => owner.owner_document === owner_document && owner.owner_name === owner_name);
        if (!existingOwner) {
            acc.push({ owner_document, owner_name });
        }
        return acc;
    }, []);




    const itemsGroupedByOwner = ownersMainData.map((owner) => {
        const {owner_document, owner_name} = owner;
        let management_fee = 0
        let retained = 0
        let totalCredit = 0
        const groupedItems = items.filter((item) => {
            return item.owner_document === owner_document
             
        })

        const ownerItems = groupedItems.map((item) => {
            const {behavior, description, paid_at, property, value} = item;
            behavior === "management_fee" ? management_fee += Math.abs(value) : null;
            behavior === "charge_tenant" ? retained += value : null;

            if(
                behavior === "credit_tenant_and_charge_landlord" || 
                behavior === "charge_tenant_and_onlend" || 
                behavior === "charge_tenant"
            ){
                totalCredit += value;
            }

            return {property, paid_at, description, value, behavior}
        })

        const onlending = totalCredit - management_fee - retained;

        return {owner_document, owner_name, management_fee, retained, totalCredit, onlending, ownerItems}
    })

    const totalMagementFee = itemsGroupedByOwner.reduce((acc, curr) => acc+= curr.management_fee, 0)
    const totalPaid = itemsGroupedByOwner.reduce((acc, curr) => acc+= curr.totalCredit, 0)
    const totalOnlending = itemsGroupedByOwner.reduce((acc, curr) => acc += curr.onlending, 0)

    return(    
        <>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.RowHeaderCell> Proprietário </Table.RowHeaderCell>   
                    <Table.RowHeaderCell>Nota</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Repasse</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Detalhes</Table.RowHeaderCell>
                    <Table.RowHeaderCell>Extrato</Table.RowHeaderCell>
                </ Table.Row>
            </Table.Header>
                        <Table.Body>
                            {itemsGroupedByOwner.map((group, index) => (
                                <Table.Row key={`row-${index}`} className="hover:bg-zinc-200/10">
                                    <Table.RowHeaderCell className="truncate max-w-[100px] sm:max-w-[200px] md:w-full">
                                        {group.owner_name}
                                    </Table.RowHeaderCell>
                                    <Table.Cell>
                                        {priceFormatter.format(group.management_fee)}
                                    </Table.Cell>
                                    
                                    <Table.Cell>
                                        {priceFormatter.format(group.onlending)}
                                    </Table.Cell>
                                    
                                    <Table.Cell>
                                        <InvoiceDialog contentType="emitter" invoiceStatus={"PENDING"}>
                                            <InvoiceEmitter {...group} />
                                        </InvoiceDialog>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <InvoiceDialog contentType="statement" invoiceStatus={"PENDING"}>
                                            <InvoiceSumary {...group}/>
                                        </InvoiceDialog>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                            
                        </Table.Body>
                    </ Table.Root>
                    <footer className="pt-3">   
                        <Card className="w-full">
                            <div className="flex flex-col gap-2 md:flex-row justify-between">
                                <h1 className="">Comissão total: <span className="font-bold"> {priceFormatter.format(totalMagementFee)}</span></h1>
                                <h1 className="flex items-center gap-1">Total pago: <span className="font-bold"> {priceFormatter.format(totalPaid)}</span></h1>
                                <h1 className="flex items-center gap-1">Repasse: <span className="font-bold"> {priceFormatter.format(totalOnlending)}</span></h1>
                            </div>
                        </Card>         
                    </footer>
        </>
            
    )
}















