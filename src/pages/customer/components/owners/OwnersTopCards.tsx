import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Badge, Callout, Card } from "@radix-ui/themes";
import { AlertCircle, ArrowUpLeftIcon, ArrowUpRightIcon, Building, CheckCircle, DollarSign } from "lucide-react";

import { priceFormatter } from "@/lib/utils/formatter";
import { OwnersDialog } from "./OwnersDialog";


const isLoading = false;
const data = {
    active_leases: [
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
        },
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
        },
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
        },
        {
            code: "123",
            value: 123000,
            tenant_name: "John Doe",
            property: "Rua das Flores",
        }
    ],
    properties_list: [
        {
            property: "Rua das Flores",
            available: true,
            rental_value: 123,
            rooms: 3,
            area: 123,
            garage: 1,
        },
        {
            property: "Rua das Flores",
            available: true,
            rental_value: 123,
            rooms: 3,
            area: 123,
            garage: 1,
        },
        {
            property: "Rua das Flores",
            available: true,
            rental_value: 123,
            rooms: 3,
            area: 123,
            garage: 1,
        },
        {
            property: "Rua das Flores",
            available: true,
            rental_value: 123,
            rooms: 3,
            area: 123,
            garage: 1,
        }
    ],
    leases_to_expire: [
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
            expiration_date: "2022-12-12"
        },
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
            expiration_date: "2022-12-12"
        },
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
            expiration_date: "2022-12-12"
        },
        {
            code: "123",
            value: 123,
            tenant_name: "John Doe",
            property: "Rua das Flores",
            expiration_date: "2022-12-12"
        }
    ]


}

const error = false;


export function OwnersTopCards(){



    const {active_leases, leases_to_expire, properties_list} = data;

    const activeLeasesCount = active_leases.length
    const activeLeasesValue = active_leases.reduce((acc, curr) => acc+= curr.value, 0)
    const availablePropertiesCount = properties_list.filter(property => property.available).length
    const leasesToExpireCount = leases_to_expire.length



    if(error){
        return(
            <Callout.Root color="red">
                <Callout.Icon>
                    <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                    Erro ao carregar os dados. Contate o desenvolvedor.
                </Callout.Text>
            </Callout.Root>
        )
    }


    const topCards = [
        {
            title: "Contratos Ativos",
            contentType: "leases",
            value_1: priceFormatter.format(activeLeasesValue),
            value_2: activeLeasesCount,
            icon: <CheckCircle size={15}/>
        },
        {
            title: "Contratos a vencer",
            contentType: "leases",
            value_1: priceFormatter.format(leasesToExpireCount+1000),
            value_2: leasesToExpireCount,
            icon: <AlertCircle size={15}/>
        },
        {
            title: "Reajustes",
            contentType: "leases",
            value_1: priceFormatter.format(leasesToExpireCount+1000),
            value_2: <div className="flex items-center gap-1 text-blue-400 font-semibold"><ArrowUpRightIcon size={10}/>  {leasesToExpireCount}%</div>,
            icon: <ArrowUpRightIcon size={15}/>
        },
        {
            title: "Imóveis disponíveis",
            contentType: "properties",
            value_1: availablePropertiesCount,
            value_2: availablePropertiesCount+10,
            icon: <Building size={15}/>
        },
    
    ]


    if(isLoading){
        return(<OwnersTopCardsSkeleton countCards={topCards.length} />)
    }

    return(
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-3 place-items-center">
            {topCards.map((card) => {
                return (
                    <OwnersDialog 
                        contentType={card.contentType}
                        
                    >
                        <Card color="gray" className="w-[300px] sm:w-[210px] h-[80px]">
                            <div className="flex flex-col justify-between h-full" >
                                <header className="flex items-center justify-between">
                                    <h1>{card.title}</h1>
                                    {card.icon}
                                </header>
                                <div className="flex items-center gap-1 justify-between" >
                                    <p className="text-xl font-bold text-zinc-500">{card.value_1}</p> 
                                    <p className="text-sm font-light italic text-zinc-400 flex items-center gap-1"> /  {card.value_2}</p>
                                </div>
                            </div>
                        </Card>
                    </OwnersDialog>
                )
            })}
        </div>
    )
}


export interface OwnersTopCardsSkeletonProps {
    countCards: number;
}

export function OwnersTopCardsSkeleton({countCards}: OwnersTopCardsSkeletonProps){
    return(
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center animate-pulse">
            { Array(countCards).fill(0).map((_, index) => {
                return (
                    <Card color="gray" className="w-[300px] h-[80px] rounded-md" key={index}>
                        <header className="flex items-center justify-between">
                            <div className="w-24 h-4 bg-zinc-200 rounded-xl"></div>
                            <div className="w-8 h-8 bg-zinc-200 rounded-full"></div>
                        </header>
                        <div className="w-16 h-4 bg-zinc-200 rounded-xl"></div>
                    </Card>
                )
            })}
        </div>
    )
}