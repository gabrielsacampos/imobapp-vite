import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog } from "@radix-ui/themes";
import React from "react";

import { OwnersLeases } from "./OwnersLeases";
import { OwnersPropertiesContainer } from "./OwnersPropertiesContainer";
import { OwnersReadjustmentsContainer } from "./OwnersReadjustments";



export interface OwnersDialogProps {
    children: React.ReactNode;
    contentType: "leases" | "properties" | "readjustments"
}

export function OwnersDialog(props: OwnersDialogProps){

    let dialogContent: React.ReactNode

    if(props.contentType === "leases"){
        dialogContent = <OwnersLeases />
    }else if(props.contentType === "properties"){
        dialogContent = <OwnersPropertiesContainer />
    }else if(props.contentType === "readjustments"){
        dialogContent = <OwnersReadjustmentsContainer />
    }



    return(
        <Dialog.Root>
            <Dialog.Trigger>
                {props.children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Close>
                    <div  className="flex w-full justify-end">
                        <button> 
                            <Cross2Icon /> 
                        </button>
                    </div>
                </Dialog.Close>
                {dialogContent}
            </Dialog.Content>
        </Dialog.Root>
            
        
    )
}