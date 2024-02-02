import { Card } from "@radix-ui/themes";
import { AlertCircle, Building, CheckCircle, DollarSign } from "lucide-react";

export function OwnersTopCards(){
    return(
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
            <Card className="w-[300px]">
                <header className="flex items-center justify-between">
                    <h1>Contratos Ativos</h1>
                    <CheckCircle size={15}/>
                </header>
                <p>10</p>
            </Card>
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