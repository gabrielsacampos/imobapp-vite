import { Badge } from "@radix-ui/themes";

export function OwnersLeases(){

    return(
        <div>
            <h1 className="text-xl font-bold text-zinc-500">Contratos</h1>
            <div className="flex flex-col gap-1 w-[200px] mt-2">
                <Badge color="green">Ativos: R$ 123.098,78 <span className="italic font-light"> / 19</span></Badge>
                <Badge color="red">Vencendo: R$ 45.876,54 <span className="italic font-light"> / 19</span></Badge>
            </div>
            <ul>
                <li className="flex justify-between mt-5 border-b">
                    
                    <div className="text-zinc-500">
                        <h1 className=" font-semibold">Francisca da silva Júnior</h1>
                        <h2 className="text-xs">Rua joao franicos, 349</h2>
                    </div>
                    
                    <div className="flex gap-2 text-xs items-center">
                        <p className="text-zinc-500">Fim: 01/01/2022</p>
                    </div>
                </li>
                <li className="flex justify-between mt-5 border-b">
                    
                    <div className="text-zinc-500">
                        <h1 className=" font-semibold">Francisca da silva Júnior</h1>
                        <h2 className="text-xs">Rua joao franicos, 349</h2>
                    </div>
                    
                    <div className="flex gap-2 text-xs items-center">
                        
                        <p className="text-zinc-500">Fim: 01/01/2022</p>
                    </div>
                </li>
                <li className="flex justify-between mt-5 border-b">
                    
                    <div className="text-zinc-500">
                        <h1 className=" font-semibold">Francisca da silva Júnior</h1>
                        <h2 className="text-xs">Rua joao franicos, 349</h2>
                    </div>
                    
                    <div className="flex gap-2 text-xs items-center">
                        <p className="text-zinc-500">Fim: 01/01/2022</p>
                    </div>
                </li>
                <li className="flex justify-between mt-5 border-b">
                    
                    <div className="text-zinc-500">
                        <h1 className=" font-semibold">Francisca da silva Júnior</h1>
                        <h2 className="text-xs">Rua joao franicos, 349</h2>
                    </div>
                    
                    <div className="flex gap-2 text-xs items-center">
                        <p className="text-zinc-500">Fim: 01/01/2022</p>
                    </div>
                </li>
                <li className="flex justify-between mt-5 border-b">
                    
                    <div className="text-zinc-500">
                        <h1 className=" font-semibold">Francisca da silva Júnior</h1>
                        <h2 className="text-xs">Rua joao franicos, 349</h2>
                    </div>
                    
                    <div className="flex gap-2 text-xs items-center">
                        <p className="text-zinc-500">Fim: 01/01/2022</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}