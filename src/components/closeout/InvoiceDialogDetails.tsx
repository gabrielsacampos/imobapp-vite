
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button,Callout, Dialog } from "@radix-ui/themes";
import { CheckCircle, Circle } from "lucide-react";
import { ButtonProps } from "node_modules/@radix-ui/themes/dist/esm/components/button";
import { CalloutRootProps } from "node_modules/@radix-ui/themes/dist/esm/components/callout";

import { ISharedClouseoutPageData } from "@/lib/axios/api";

import { InvoiceEmitter } from "./InvoiceEmitter";


export interface InvoiceDialogDetailsProps {
    items: ISharedClouseoutPageData[];
    invoiceStatus: 'PENDING' | 'AUTHORIZED' | 'ERROR' | null;
}

export function InvoiceDialogDetails(props: InvoiceDialogDetailsProps) {
    const invoiceStatus = props.invoiceStatus;
    let openDialoglabel: string = ''
    let opendDialogButtonColor: ButtonProps['color'];
    let openDialogButtonVariant: ButtonProps['variant'];
    let dialogContentComponent: React.ReactNode = <></>
    
    

    switch(invoiceStatus){
        case 'AUTHORIZED':
            openDialoglabel = 'Autorizada';
            opendDialogButtonColor = 'green';
            openDialogButtonVariant = 'soft';
            
            break;
        case 'PENDING':
            openDialoglabel = 'Pendente';
            opendDialogButtonColor = 'yellow';
            openDialogButtonVariant = 'outline';
            dialogContentComponent = <InvoiceEmitter {...props} />
            break;
        case 'ERROR':
            openDialoglabel = 'Falha';
            opendDialogButtonColor = 'red';
            openDialogButtonVariant = 'soft';
            break;   
        case null:
            openDialoglabel = 'Emitir';
            opendDialogButtonColor = 'blue';
            openDialogButtonVariant = 'solid';
            break;
    }

    
    return (
        <Dialog.Root>
            <Dialog.Trigger>
               <Button
                    color={opendDialogButtonColor}
                    variant={openDialogButtonVariant}
                    className="h-[10px]"
               >{openDialoglabel}</Button>
            </Dialog.Trigger>
            <Dialog.Content className="h-auto">
                <header>
                    {InvoiceDialogInfo(invoiceStatus)}
                </header>
                {dialogContentComponent}
            </Dialog.Content>
        </Dialog.Root>
    );
}



function InvoiceDialogInfo(invoiceStatus: InvoiceDialogDetailsProps['invoiceStatus']){
    let message: string = '';
    let color: CalloutRootProps['color'] = 'blue'; 
    let icon: React.ReactNode;

    switch(invoiceStatus){
        case 'AUTHORIZED':
            message = 'Nota fiscal emitida com sucesso!';
            color = 'green';
            icon = <CheckCircle size={10} />
            break;
        case 'PENDING':
            message = 'Nota fiscal enviada para processamento';
            color = 'blue';
            icon = <Circle size={10} />
            break;
        case "ERROR":
            message = 'Falha ao emitir nota fiscal. Contate o desenvolvedor';
            color = 'red';
            icon = <ExclamationTriangleIcon />
            break;   
    }


    return(
        <Callout.Root color={color} variant="soft">
            <Callout.Icon>
                {icon}
            </Callout.Icon>
            <Callout.Text>
                {message}
            </Callout.Text>
        </Callout.Root>
    )

}
