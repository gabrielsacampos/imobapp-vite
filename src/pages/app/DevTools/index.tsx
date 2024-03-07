import { Checkbox } from "@radix-ui/themes";

export function DevTools(){
    return (
        <div className='flex'>
            <div className='text-2xl font-bold flex gap-5'>
                <h1>Backup</h1>


                <div className="text-xs text-zinc-500 flex items-center gap-1">
                    <label htmlFor="contacts">Contacts</label>
                    <Checkbox id="contacts"/>
                </div>

                <div className="text-xs text-zinc-500 flex items-center gap-1">
                    <label htmlFor="properties">Properties</label>
                    <Checkbox id="properties"/>
                </div>

                <div className="text-xs text-zinc-500 flex items-center gap-1">
                    <label htmlFor="buildings">Buildings</label>
                    <Checkbox id="buildings"/>
                </div>

                <div className="text-xs text-zinc-500 flex items-center gap-1">
                    <label htmlFor="leases">Leases</label>
                    <Checkbox id="leases"/>
                </div>

                <div className="text-xs text-zinc-500 flex items-center gap-1">
                    <label htmlFor="payments">Payments</label>
                    <Checkbox id="payments"/>
                </div>
                
            </div>

        </div>
    )
}