
import { Badge } from "../ui/badge";


export interface InvoiceBadgeStatusProps{
    invoiceStatus: 'AUTHORIZED' | 'PENDING' | 'ERROR';

}

export function InvoiceBadgeStatus({invoiceStatus}: InvoiceBadgeStatusProps){
    let color: undefined | 'red' | 'green' | 'blue' ;
    let label = '';

    switch(invoiceStatus){
        case 'AUTHORIZED':
            color = 'green';
            label = 'Enviada';
            break;
        case 'PENDING':
            color = 'blue';
            label = 'Pendente';
            break;
        default:
            color = 'red';
            label = 'Falha';
            break;   
    }

    

    return (
    <>
       <Badge 
        className={`rounded-sm max-w-[100px] flex justify-center self-end -mt-8 -mr-5 bg-${color}-400 `}        
        >{label}</Badge>
    </>
    )
}