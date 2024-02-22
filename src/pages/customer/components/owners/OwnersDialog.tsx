import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog } from "@radix-ui/themes";
import React from "react";

import { OwnersLeases } from "./OwnersLeases";
import { OwnersPropertiesList } from "./OwnersPropertiesList";



export interface OwnersDialogProps {
    children: React.ReactNode;
    contentType: "leases" | "properties"
}

export function OwnersDialog(props: OwnersDialogProps){

    let dialogContent: React.ReactNode

    if(props.contentType === "leases"){
        dialogContent = <OwnersLeases />
    }else if(props.contentType === "properties"){
        dialogContent = <OwnersPropertiesList />
    }



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
                {dialogContent}
            </Dialog.Content>
        </Dialog.Root>
            
        
    )
}