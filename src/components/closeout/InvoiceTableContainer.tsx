import { ISharedClouseoutPageData } from "@/lib/axios/api";

import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { InvoiceTable } from "./InvoiceTable";




interface InvoiceTableContainerProps{
    items: ISharedClouseoutPageData[]
}

export function InvoiceTableContainer ({items}: InvoiceTableContainerProps){
    console.log(items)
    const emitedInvoices = items.filter((item) => item.invoice_status === "AUTHORIZED")
    const pendingInvoices = items.filter((item) => item.invoice_status === "PENDING" )
    const notSentInvoices = items.filter((item) => item.invoice_status === null)
    const failedInvoices = items.filter((item) => item.invoice_status === "ERROR")


    return (
        <>
        <Tabs defaultValue="PENDING">
            <TabsList className="w-full gap-3 mb-5">
                    <TabsTrigger value="AUTHORIZED">Enviadas</TabsTrigger>
                    <TabsTrigger value="PENDING-NOT_SENT">Pendentes</TabsTrigger>
                    <TabsTrigger value="ERROR">Falhas<Badge className="rounded-sm ml-2 bg-red-200 flex  border border-red-500 text-red-500">{failedInvoices.length}</Badge></TabsTrigger>
            </ TabsList>
            <TabsContent value="PENDING-NOT_SENT">
                <InvoiceTable items={[...pendingInvoices, ...notSentInvoices]} />
            </TabsContent>
            <TabsContent value="AUTHORIZED">
                <InvoiceTable items={emitedInvoices}/>
            </TabsContent>
            <TabsContent value="ERROR">
                <InvoiceTable items={failedInvoices}/>
            </TabsContent>
        </Tabs>
        
        </>
    
    )}