
import { DialogClose } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Dialog } from "@radix-ui/themes";
import { ButtonProps } from "node_modules/@radix-ui/themes/dist/esm/components/button";

import { ISharedClouseoutPageData } from "@/lib/axios/api";



export interface InvoiceDialogDetailsProps {
    children: React.ReactNode;
    invoiceStatus: ISharedClouseoutPageData['invoice_status'];
    contentType: 'emitter' | 'statement';
}

export function InvoiceDialog(props: InvoiceDialogDetailsProps) {
    
    return (
        <Dialog.Root>
            <InvoiceDialogTrigger 
                contentType={props.contentType} 
                invoiceStatus={props.invoiceStatus}
            />
            <Dialog.Content className="h-auto">
                <DialogClose className="w-full flex justify-end">
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                </DialogClose>
                {props.children}
            </Dialog.Content>
        </Dialog.Root>
    );
}



export interface InvoiceDialogTriggerProps {
    contentType: InvoiceDialogDetailsProps['contentType'];
    invoiceStatus: ISharedClouseoutPageData['invoice_status'];
}

export function InvoiceDialogTrigger({contentType, invoiceStatus}: InvoiceDialogTriggerProps){


    if(contentType === 'statement'){
        return (
            <Dialog.Trigger>
                <Button 
                    variant="ghost" 
                    size="1"
                    >
                    Visualizar
                </Button>
            </Dialog.Trigger>
        )
    }

    let openDialoglabel: string = ''
    let opendDialogButtonColor: ButtonProps['color'];
    let openDialogButtonVariant: ButtonProps['variant'];
    
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
        <Dialog.Trigger>
            <Button
                color={opendDialogButtonColor}
                variant={openDialogButtonVariant}
                style={{ height: '20px'}}
            >
                {openDialoglabel}
            </Button>
        </Dialog.Trigger>
    )
}
