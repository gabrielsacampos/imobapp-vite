import { Badge, Button, Card, Dialog } from "@radix-ui/themes";

import { mock } from "@/pages/customer/mock";
import { CheckCircle2Icon, XIcon } from "lucide-react";
import { useState } from "react";
import { exportToExcel } from "@/lib/fileSaver/exportToXLSX";

import { Link } from "react-router-dom";




export function OwnersInvoicesCard(){
    return (
        <>
        {mock.map((item) => {
            return(
                <OwnerInvoiceDialog key={item.number}>
                    <Card >
                        <header className="w-full mb-2">
                            <Badge> Nota {item.number}</Badge>
                        </header>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-zinc-600 w-auto ">
                                <h1 className="">Emissão: <span className="font-bold"> {item.effective_date}</span></h1>
                                <h1 className="flex items-center gap-1">Nota: <span className="font-bold"> {item.value}</span></h1>
                                <h1 className="flex items-center gap-1">Repasse: <span className="font-bold"> 35.098,68</span></h1>
                            </div>   
                    </Card>           
                </OwnerInvoiceDialog>
                    )
                })}        
       </>
    )
}


export interface OwnerInvoiceDialogProps {
    children: React.ReactNode;

}

export function OwnerInvoiceDialog({children}: OwnerInvoiceDialogProps){
    
    
    
    
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content>
                <OnwerInvoiceDialogContent />
            </Dialog.Content>    
        </Dialog.Root>
    )
}





export function OnwerInvoiceDialogContent(){

    const data = [{a: 123, b: 321}, {a:21, b: 54}]


    const [actionDone, setActionDone] = useState<boolean>(false)
    

        
        
        function handleStatementButtonClick(){
            exportToExcel(data)
            setActionDone(true)
        }


    if(actionDone){
        return (
            <div className=" flex flex-col items-center gap-5">
                <h1>Arquivo baixado!</h1>
                <CheckCircle2Icon color="green" size={50}/>
            </div>
        )
    }


    return(
            <>
                <Dialog.Close className="mb-2">
                    <XIcon color="gray"/>
                </Dialog.Close>
                <div className="flex flex-col gap-5 items-center">
                    <p className="font-semibold text-zinc-500">Selecione qual arquivo você quer baixar</p>
                    <div className="flex flex-col gap-5">
                        <Link to={"https://nebulafy.dev"} target="_blank">
                            <Button name="invoice-button"  className="rounded-sm" >
                                Nota Fiscal
                            </Button>
                        </Link>
                        <Button name="statement-button" onClick={handleStatementButtonClick}  variant="outline"  className="rounded-sm" >Extrato</Button>
                    </div>
                </div>
            </>
    )
}