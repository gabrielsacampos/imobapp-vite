
import { Button, Dialog } from "@radix-ui/themes";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { InvoiceDialogDetailsProps } from "./InvoiceDialog";



export interface InvoiceEmitterProps {
    owner_name: string;
    owner_document: string;
    management_fee: number;
    
}
//should be a form
export function InvoiceEmitter(props: InvoiceEmitterProps){
    
    
    const [emittButtonDisabled, setEmittButtonDisabled] = useState(false); 
    const [emittButtonLabel, setEmittButtonLabel] = useState('Emitir');
    


    async function handleEmitterButtonClick(event: FormEvent<HTMLFormElement>){
        setEmittButtonDisabled(true)
        setEmittButtonLabel('Aguarde')
        event.preventDefault()
        toast.success("Nota fiscal enviada para emissão.")
        
    }
    
    
    
    function handleTemplate(month: string, year: number | string){
        return (
            <div className="text-sm mr-2 rounded-md p-4 border bg-zinc-100 italic text-zinc-500">
                <p>SERVIÇO DE CORRETAGEM NO ALUGUEL DE IMÓVEIS NO MÊS DE {month}/{year} </p>
                <p>EMPRESA OPTANTE PELO SIMPLES NACIONAL</p>
                <p>Recolhimento de Tributos pelo ANEXO III, da LC no. 123/06.</p>
                <p>SEM RETENÇÃO do IRPJ, CSLL, PIS E COFINS</p>
                <p>nos termos das Instruções Normativas RFB no. 459/2004 e 480/2004, ambas alteradas pela IN-RFB no. 765/07;</p>
                <p>Recolhimento de tributos pelo anexo III, nos termos do art. 18, parágrafo 4o., III, da LC no. 123/2006;</p>
                <p> SEM RETENÇÃO de INSS nos termos do art. 191-caput da IN-RFB no. 971/2009.</p>
            </div>
        )  
    }
    return(
        <div>
            <div className=" h-3/4 pl-3 mt-5">
                <p className="font-semibold text-zinc-600">Proprietário: <span className="font-normal">{props.owner_name}</span></p>
                <p className="font-semibold text-zinc-600">CPF/CNPJ: <span>{props.owner_document}</span></p>
                <p className="font-semibold text-zinc-600">Valor da Nota: <span>{props.managemet_fee}</span></p>
                <p className="font-semibold text-zinc-600">ISS Retido: <span>Não</span></p>

                <h1 className=" mt-2  text-zinc-600">Descrição:</h1>
                
                    {handleTemplate('dezembro', 2021)}


            </div>
            <footer className=" flex gap-2 justify-center  m-5">
                
                <Dialog.Trigger>
                    <Button 
                        className="w-1/2"
                        variant="outline"
                    >
                        Cancelar
                    </Button>
                </Dialog.Trigger>
                <Dialog.Close >
                <Button 
                    className="w-1/2"
                    onClick={handleEmitterButtonClick}
                    disabled={emittButtonDisabled}
                >
                    {emittButtonLabel}</Button>
                </Dialog.Close>
            </footer>
        </div>
           )
}



