import { Card } from "@radix-ui/themes";
import { AlertCircle, Building, CheckCircle, DollarSign } from "lucide-react";

import { OnwersPropertiesDialog } from "./OwnersPropertiesDialog";

export function OwnersTopCards(){
    return(
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center">
            <OnwersPropertiesDialog>
                <Card className="w-[300px] hover:bg-zinc-50 hover:cursor-pointer">
                    <header className="flex items-center justify-between">
                        <h1>Contratos Ativos</h1>
                        <CheckCircle size={15}/>
                    </header>
                    <p>10</p>
                </Card>
            </OnwersPropertiesDialog>
            <Card className="w-[300px]">
                <header className="flex items-center justify-between">
                    <h1>Total em contratos</h1>
                    <DollarSign size={15}/>
                </header>
                <p>10</p>
            </Card>
            <Card className="w-[300px]">
                <header className="flex items-center justify-between">
                    <h1>Imóveis disponíveis</h1>
                    <Building size={15}/>
                </header>
                <p>10</p>
            </Card>
            <Card className="w-[300px]">
                <header className="flex items-center justify-between">
                    <h1>Contratos a vencer</h1>
                    <AlertCircle size={15}/>
                </header>
                <p>10</p>
            </Card>
        </div>
    )
}