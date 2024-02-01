import { Button, Dialog } from "@radix-ui/themes";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { ISharedClouseoutPageData } from "@/lib/axios/api";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";


const fakeTable = [
    {id: 1, name: 'João', age: 20},
    {id: 2, name: 'Maria', age: 20},
    {id: 3, name: 'José', age: 20},
    {id: 4, name: 'Pedro', age: 20},
    {id: 5, name: 'Ana', age: 20},
]


function exportToExcel(dataToExcel: unknown[]){
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";



    const ws = XLSX.utils.json_to_sheet(dataToExcel);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, "fileName" + fileExtension);
}


interface GroupedItems {
    owner_document: string;
    owner_name: string;
    onlending: number;
    management_fee: number;
    retained: number;
    totalCredit: number;
    ownerItems: {
        behavior: string;
        property: string;
        paid_at: string;
        description: string;
        value: number;
    }[]
};


export function InvoiceSumary(groupedItems: GroupedItems){
    const {owner_name, totalCredit, management_fee, retained, onlending, ownerItems} = groupedItems;


    let balanceCounter = 0;

    const tableRows = ownerItems.map((item) => {
        
        const {property, description, paid_at, value, behavior} = item;

        const imovel = property;
        const pagamento = dateFormatter.format(new Date(paid_at));
        const descricao = description;
        
        let valor = value;
        let retido = 0;
        let comissao = 0;
        

        if(behavior === "charge_tenant"){
            retido =  - value;
        }

        if(behavior === "management_fee"){
            comissao = value;
            valor = 0;
        }

        balanceCounter += valor - Math.abs(comissao) - retido;

        const row = {
            imovel,
            pagamento,
            descricao,
            valor,
            retido,
            comissao,
            saldo: balanceCounter
        }

        return row
    })
    

console.log(tableRows)

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <Button variant="ghost" size="1">Visualizar</Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <header>
                    <h1 className="text-xl font-bold text-zinc-600">Resumo da Nota</h1>
                </header>
                <div className="flex flex-col gap-2 my-5">
                    <h2 className="text-lg font-semibold text-zinc-500">
                        Proprietário: {owner_name}
                    </h2>
                    <h2 className="text-lg font-semibold text-zinc-500">
                        Total pago: {priceFormatter.format(totalCredit) }
                    </h2>
                    <h2 className="text-lg font-semibold text-zinc-500">
                        Retido: {priceFormatter.format(retained)}
                    </h2>
                    <h2 className="text-lg font-semibold text-zinc-500">
                        Comissão: {priceFormatter.format(management_fee)}
                    </h2>
                    <h2 className="text-lg font-semibold text-zinc-500">
                        Repasse: {priceFormatter.format(onlending)}
                    </h2>
                </div>
                <footer className="flex gap-2">
                    <Dialog.Close>
                        <Button variant="soft">Fechar</Button>
                    </Dialog.Close>
                   <Button color="green" variant="soft" onClick={() => exportToExcel(tableRows)}>Exportar XLSX</Button>
                </footer>
            </ Dialog.Content>
        </Dialog.Root>
    )
}