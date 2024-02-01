

import { Button, Card } from "@radix-ui/themes";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { AlertCircle, Building, CheckCircle, DollarSign } from "lucide-react";
import { EyeOpenIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";


export function Customer(){
    return(
        <div  className="w-full flex justify-center">
            <Tabs className="w-full flex flex-col">
                <TabsList className="">
                    <TabsTrigger value='owner' >Proprietário</TabsTrigger>
                    <TabsTrigger value='tenant' >Locatário</TabsTrigger>
                </TabsList>
                <TabsContent defaultValue="owner" value='owner'>
                    <div className="flex flex-col gap-5">
                        <OwnersTopCards />
                        <OwnersInvoicesCard />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}


export function OwnersTopCards(){
    return(
        <div className=" grid grid-cols-4 gap-3">
            <Card className="w-[320px]">
                <header className="flex items-center justify-between">
                    <h1>Contratos Ativos</h1>
                    <CheckCircle size={15}/>
                </header>
                <p>10</p>
            </Card>
            <Card>
                <header className="flex items-center justify-between">
                    <h1>Total em contratos</h1>
                    <DollarSign size={15}/>
                </header>
                <p>10</p>
            </Card>
            <Card>
                <header className="flex items-center justify-between">
                    <h1>Imóveis disponíveis</h1>
                    <Building size={15}/>
                </header>
                <p>10</p>
            </Card>
            <Card>
                <header className="flex items-center justify-between">
                    <h1>Contratos a vencer</h1>
                    <AlertCircle size={15}/>
                </header>
                <p>10</p>
            </Card>
        </div>
    )
}


export function OwnersInvoicesCard(){
    return (
        <Card className="w-full">
            <div className="flex flex-col gap-2 h-auto">
                <Card className="w-full">
                    <div className="flex gap-5">
                        <h1 className="">Emissão: <span className="font-bold"> 10-01-2024</span></h1>
                        <h1 className="flex items-center gap-1">Nota: <span className="font-bold"> 35.098,68</span> <OpenInNewWindowIcon /></h1>
                        <h1 className="flex items-center gap-1">Repasse: <span className="font-bold"> 35.098,68</span> <EyeOpenIcon /></h1>
                    </div>
                        
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
                <Card className="w-full">
                        invoice 1
                </Card>
            </div>
        </Card>
    )
}