import { ISharedClouseoutPageData } from "@/lib/axios/api";

import { Table,TableBody, TableCell,TableHead, TableHeader, TableRow } from "../ui/table";


interface InvoiceStatementProps {
    items: ISharedClouseoutPageData[];
}

export function InvoiceStatement({items}: InvoiceStatementProps) {
    console.log(items)
    return (
        <div className="w-fit">
            <Table className="overflow-x-auto border-2 border-red-500">
            <TableHeader>
                <TableRow>
                    <TableHead>Imóvel</TableHead>   
                    <TableHead>Item</TableHead>
                    <TableHead>Retido</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Saldo</TableHead>
                </ TableRow>
                </TableHeader>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow key={`row-${item.description}`} className="hover:bg-zinc-200/10">
                                    <TableCell className="truncate max-w-[200px]">
                                        {item.property}
                                    </TableCell >
                                    <TableCell className="truncate max-w-[200px]">
                                        {item.description}
                                    </TableCell>
                                    <TableCell>
                                        teste
                                    </TableCell>
                                    <TableCell>
                                        {item.invoice_status}
                                    </TableCell>
                                </TableRow>
                            ))}
                            
                        </TableBody>
                    </ Table>
        </div>
    );
}