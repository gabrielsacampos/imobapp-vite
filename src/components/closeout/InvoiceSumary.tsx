import { Button } from "@radix-ui/themes";

import { exportToExcel } from "@/lib/fileSaver/exportToXLSX";
import { dateFormatter, priceFormatter } from "@/lib/utils/formatter";

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
    

    return(
        <div>
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
            <footer className="flex w-full justify-center">
                <Button color="green" variant="soft" onClick={() => exportToExcel(tableRows)}>Exportar XLSX</Button>
            </footer>
        </div>
    )
}