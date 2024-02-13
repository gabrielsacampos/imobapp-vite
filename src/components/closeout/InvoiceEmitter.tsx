

import { Button, Dialog } from "@radix-ui/themes";
import { useForm} from "react-hook-form";
import { toast } from "sonner";
import {z} from "zod";

import WomanSentCheck from '../../svg/woman-sent-check.svg'


const invoiceEmitterForm = z.object({
    owner_document: z.string(),
    description: z.string(),
    value: z.number(),
})

type invoiceEmitter = z.infer<typeof invoiceEmitterForm>

export interface InvoiceEmitterProps {
    owner_name: string;
    owner_document: string;
    management_fee: number;
    
}
//should be a form
export function InvoiceEmitter(props: InvoiceEmitterProps){
    const {register, handleSubmit, formState: {isSubmitting, isSubmitted}} = useForm<invoiceEmitter>();

    

    async function handleEmitterButtonClick(){
        
        console.log(isSubmitting, isSubmitted)

        
    }
    



    if(isSubmitted){
        return <EmittionSent />
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
        <form onSubmit={handleSubmit(handleEmitterButtonClick)}>
            <div className=" h-3/4 pl-3 mt-5">
                
                <div>
                    <label className="font-semibold text-zinc-600">
                        Proprietário: <span className="text-zinc-500 font-normal">{props.owner_name}</span>
                    </label>
                    
                    <input 
                        id="owner_name" 
                        defaultValue={props.owner_name}
                        className="hidden"
                    />
                </div>
                
                
                <div>
                    <label className="font-semibold text-zinc-600">
                        CPF/CNPJ: <span className="text-zinc-500 font-normal">{props.owner_document}</span>
                    </label>
                    <input 
                        id="owner_document" 
                        {...register('owner_document')}
                        defaultValue={props.owner_document}     
                        className="hidden"
                    />
                </div>
                    
    
                <div>
                    <label className="font-semibold text-zinc-600">
                        Valor da Nota: <span className="text-zinc-500 font-normal">{props.management_fee}</span>
                    </label>
                    
                    <input 
                        id="management_fee" 
                        {...register('value')}
                        className="hidden"
                    />                
                </div>
                
                <label className="font-semibold text-zinc-600">
                    ISS Retido: <span className="text-zinc-500 font-normal">Não</span>
                </label>
                    
                

                <h1 className=" mt-2  text-zinc-600">Descrição:</h1>
                
                    {handleTemplate('dezembro', 2021)}


            </div>
            <footer className=" flex gap-2 justify-center  m-5">                
                <Dialog.Close>
                    <Button 
                        type="submit"
                        className="w-1/2"
                        onClick={handleSubmit(handleEmitterButtonClick)}
                        disabled={isSubmitting}
                    >
                        Emitir
                    </Button>
                </Dialog.Close>
            </footer>
        </form>
           )
}

export function EmittionSent(){
    return (
        <div className="flex flex-col w-full h-full items-center">
            <h1 className="text-xl font-bold text-zinc-500">Nota fiscal enviada para emissão</h1>
            <p className="text-zinc-400"> em breve o status será atualizado</p>
            <img src={WomanSentCheck} width={100} height={100} className="mt-5" />

        </div>
    )
}

