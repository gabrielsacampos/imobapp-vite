import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Separator } from "@radix-ui/themes";
import { AlertCircle, ArrowUpRightIcon, Building, CheckCircle } from "lucide-react";

import { ITopCards } from "@/lib/axios/interfaces/customers/owners/ITopCards";
import { priceFormatter } from "@/lib/utils/formatter";

import { useTopCards } from "../../hooks/useTopCards";
import { OwnersDialog } from "./OwnersDialog";

export function OwnersTopCardsContainer(){


    const {data, error, isLoading} = useTopCards()

     if(isLoading){
        return(<OwnersTopCardsSkeleton countCards={4} />)
    }
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

    const {leases, properties} = data as ITopCards

    console.log(leases, properties)


    const activeLeases = leases.filter(lease  => lease.status === "active")
    const activeLeasesCount = activeLeases.length
    const activeLeasesValue = activeLeases.reduce((acc, lease) => acc + lease.lease_value, 0)
    const leasesToExpireCount = 3;
    

    const availableProperties = properties.filter(property => property.status === "available")
    const availablePropertiesCount = availableProperties.length


    return(
        <OwnersTopCards 
            activeLeasesCount={activeLeasesCount}
            activeLeasesValue={activeLeasesValue}
            leasesToExpireCount={leasesToExpireCount}
            availablePropertiesCount={availablePropertiesCount}
        />
    )


}

export interface OwnersTopCardsProps {
    activeLeasesCount: number;
    activeLeasesValue: number;
    leasesToExpireCount: number;
    availablePropertiesCount: number;

}

export function OwnersTopCards(props: OwnersTopCardsProps){    

    const topCards = [
        {
            title: "Contratos Ativos",
            contentType: "leases",
            value_1: priceFormatter.format(props.activeLeasesValue),
            value_2: props.activeLeasesCount,
            icon: <CheckCircle size={15}/>
        },
        {
            title: "Contratos a vencer",
            contentType: "leases",
            value_1: priceFormatter.format(props.leasesToExpireCount+1000),
            value_2: props.leasesToExpireCount,
            icon: <AlertCircle size={15}/>
        },
        {
            title: "Reajustes",
            contentType: "leases",
            value_1: priceFormatter.format(props.leasesToExpireCount+1000),
            value_2: <div className="flex items-center gap-1 text-blue-400 font-semibold"><ArrowUpRightIcon size={10}/>  {props.leasesToExpireCount}%</div>,
            icon: <ArrowUpRightIcon size={15}/>
        },
        {
            title: "Imóveis disponíveis",
            contentType: "properties",
            value_1: props.availablePropertiesCount,
            value_2: props.availablePropertiesCount+10,
            icon: <Building size={15}/>
        },
    
    ]


   

    return(
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-3 place-items-center">
            {topCards.map((card) => {
                return (
                        <Card color="gray" className="w-[300px] sm:w-[210px] h-[80px]">
                            <div className="flex flex-col justify-between h-full" >
                                <header className="flex items-center justify-between">
                                    <h1 className="font-semibold text-zinc-500">{card.title}</h1>
                                    {card.icon}
                                </header>
                                <div className="flex items-center gap-1 justify-between" >

                                    <p className="text-xl font-bold text-zinc-500">{card.value_1}</p> 

                                <div className="flex gap-2 items-center">
                                    <Separator orientation="vertical" />
                                    <p className="text-sm font-light italic text-zinc-400 flex items-center gap-1">{card.value_2}</p>
                                </div>
                                    
                                </div>
                            </div>
                        </Card>
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