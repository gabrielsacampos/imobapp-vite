import { Button, Dialog } from "@radix-ui/themes";
import { CheckCircle2Icon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { exportToExcel } from "@/lib/fileSaver/exportToXLSX";

export interface OwnerInvoiceDialogProps {
    children: React.ReactNode;

}

export function OwnersInvoiceDialog({children}: OwnerInvoiceDialogProps){
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

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Close className="mb-2">
                    <XIcon color="gray"/>
                </Dialog.Close>
            
                <div className="flex flex-col gap-5 items-center">
                    <p className="font-semibold text-zinc-500">Selecione o arquivo</p>
                    <div className="flex flex-col gap-5">
                        <Link to={"https://nebulafy.dev"} target="_blank">
                            <Button name="invoice-button"  className="rounded-sm" >
                                Nota Fiscal
                            </Button>
                        </Link>
                        <Button name="statement-button" onClick={handleStatementButtonClick}  variant="outline"  className="rounded-sm" >Extrato</Button>
                    </div>
                </div>

            </Dialog.Content>    
        </Dialog.Root>
    )
}


