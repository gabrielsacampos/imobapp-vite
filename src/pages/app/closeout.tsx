


import {  InvoiceTableContainer } from "@/components/closeout/InvoiceTableContainer";
import { TopInfo } from "@/components/closeout/TopInfo";
import { useCloseoutData } from "@/hooks/useCloseoutData";



export function Closeout(){
const {data, isLoading, error} = useCloseoutData();

    if(isLoading) return <h1 className=" flex items-center justify-center">
        <>carregando</>
    </h1>

    return (
        <div>
            <h1 className="text-2xl md:text-4xl mt-10 font-semibold text-zinc-500 pl-2">Fechamento de mês</h1>
           <h1 className="pl-5 font-extralight">e emissão de <span className=" border-b dark:border-white/10 border-zinc-900/10">notas fiscais</span></h1>
           <TopInfo /> 
           
           <h1 className="text-2xl font-semibold text-zinc-500 border-b border-black/10 pl-2 my-5">Notas Fiscais consolidadas</h1>
       
           {/* <TableContainer items={data!}/> */}


        <div>

        </div>

            <InvoiceTableContainer items={data!} />

        </div>
    )
}


