

import { Button, Dialog } from "@radix-ui/themes";

import WomanSentCheck from '@/svg/woman-sent-check.svg';


export interface InvoiceEmitterProps {
    owner_name: string;
    owner_document: string;
    management_fee: number;
    
}
//should be a form
export function InvoiceEmitter(props: InvoiceEmitterProps){
    
    const dataToPost = {
        owner_name: props.owner_name,
        owner_document: props.owner_document,
        management_fee: props.management_fee,
        description: createDescription('dezembro', 2021)
    }
    
    async function handleEmitterButtonClick(){
        console.log(dataToPost)
    }
    
    
    
    function createDescription(month: string, year: number | string){
        return `
            SERVIÇO DE CORRETAGEM NO ALUGUEL DE IMÓVEIS NO MÊS DE ${month}/${year}.
            EMPRESA OPTANTE PELO SIMPLES NACIONAL.
            Recolhimento de Tributos pelo ANEXO III, da LC no. 123/06.
            SEM RETENÇÃO do IRPJ, CSLL, PIS E COFINS
            nos termos das Instruções Normativas RFB no. 459/2004 e 480/2004, ambas alteradas pela IN-RFB no. 765/07;
            Recolhimento de tributos pelo anexo III, nos termos do art. 18, parágrafo 4o., III, da LC no. 123/2006;
             SEM RETENÇÃO de INSS nos termos do art. 191-caput da IN-RFB no. 971/2009.
        `
    }
    return(
        <form onSubmit={handleEmitterButtonClick}>
            <div className=" h-3/4 pl-3 mt-5">
                
                
                    <h1 className="font-semibold text-zinc-600">
                        Proprietário: <span className="text-zinc-500 font-normal">{props.owner_name}</span>
                    </h1>
                  
                    <h1 className="font-semibold text-zinc-600">
                        CPF/CNPJ: <span className="text-zinc-500 font-normal">{props.owner_document}</span>
                    </h1>
                              
                    <h1 className="font-semibold text-zinc-600">
                        Valor da Nota: <span className="text-zinc-500 font-normal">{props.management_fee}</span>
                    </h1>
                
                    <h1 className="font-semibold text-zinc-600">
                        ISS Retido: <span className="text-zinc-500 font-normal">Não</span>
                    </h1>
                    
                    <h1 className=" mt-2  text-zinc-600">Descrição:</h1>
                    <div className="text-sm mr-2 rounded-md p-4 border bg-zinc-100 italic text-zinc-500">
                        {createDescription('dezembro', 2021)}
                    </div>


            </div>
            <footer className=" flex gap-2 justify-center  m-5">                
                <Dialog.Close>
                    <Button 
                        type="submit"
                        className="w-1/2"
                        onClick={handleEmitterButtonClick}
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

