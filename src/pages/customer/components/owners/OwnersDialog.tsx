import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog } from "@radix-ui/themes";

import { OwnersLeases } from "./OwnersLeases";



export interface OwnersDialogProps {
    children: React.ReactNode;
    contentType: "leases" | "properties"
}

export function OwnersDialog(props: OwnersDialogProps){
    return(
        <Dialog.Root>
            <Dialog.Trigger>
                {props.children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Close>
                    <div  className="flex w-full justify-end">
                        <button><Cross2Icon /></button>
                    </div>
                </Dialog.Close>
                {props.contentType === "leases" ? <OwnersLeases /> : null}
            </Dialog.Content>
        </Dialog.Root>
            
        
    )
}