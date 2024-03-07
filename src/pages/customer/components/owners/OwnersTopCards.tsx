import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Separator } from "@radix-ui/themes";
import { AlertCircle, ArrowUpRightIcon, Building, CheckCircle } from "lucide-react";
import { useContext } from "react";

import { priceFormatter } from "@/lib/utils/formatter";

import { OwnerContext } from "../../contexts/OwnerContext";
import { OwnersDialog } from "./OwnersDialog";


export function OwnersTopCardsContainer(){

    const {data, isLoading, error} = useContext(OwnerContext)

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

    const {leases, buildings_and_properties} = data!


    const daysToExpireParam = 60
    const activeLeases = leases.filter(lease  => lease.status === "active")
    const activeLeasesCount = activeLeases.length
    const activeLeasesValue = activeLeases.reduce((acc, lease) => acc + lease.lease_value, 0)
    const leasesToExpire = activeLeases.filter(lease => lease.days_to_expire <= daysToExpireParam)
    const leasesToExpireValue = leasesToExpire.reduce((acc, lease) => acc + lease.lease_value, 0)
    const leasesToExpireCount = leasesToExpire.length
    

    const countProperties = buildings_and_properties.reduce((acc, curr) => acc+=curr.count_properties , 0)
    const availablePropertiesCount = buildings_and_properties.reduce((acc, curr) => acc+=curr.count_available , 0)

    const leasesToReadjust = leases.filter((lease) => {
        if(lease.need_readjustment ){
            return true
        }
    })

    const leasesToReadjustCount = leasesToReadjust.length;
    const leasesToReadjustTotalValue =  leasesToReadjust?.reduce((acc, lease) => {
        return acc + lease.lease_value;
    }, 0);
        

    return(
        <OwnersTopCards 
            activeLeasesCount={activeLeasesCount}
            activeLeasesValue={activeLeasesValue}
            leasesToExpireCount={leasesToExpireCount}
            leasesToExpireValue={leasesToExpireValue}
            availablePropertiesCount={availablePropertiesCount}
            leasesToReadjustCount={leasesToReadjustCount}
            leasesToReadjustTotalValue={leasesToReadjustTotalValue}
            countPropereties={countProperties}
        />
    )


}

export interface OwnersTopCardsProps {
    activeLeasesCount: number;
    activeLeasesValue: number;
    leasesToExpireCount: number;
    leasesToExpireValue: number;
    leasesToReadjustCount: number;
    leasesToReadjustTotalValue: number;
    availablePropertiesCount: number;
    countPropereties: number;

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
            value_1: priceFormatter.format(props.leasesToExpireValue),
            value_2: props.leasesToExpireCount,
            icon: <AlertCircle size={15}/>
        },
        {
            title: "Reajustes",
            contentType: "readjustments",
            value_1: priceFormatter.format(props.leasesToExpireCount),
            value_2: <div className="flex items-center gap-1 text-blue-400 font-semibold"><ArrowUpRightIcon size={10}/>  {props.leasesToExpireCount}%</div>,
            icon: <ArrowUpRightIcon size={15}/>
        },
        {
            title: "Imóveis disponíveis",
            contentType: "properties",
            value_1: props.availablePropertiesCount,
            value_2: props.countPropereties,
            icon: <Building size={15}/>
        },
    
    ]



    return(
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-3 place-items-center">
            {topCards.map((card) => {
                return (
                    <OwnersDialog 
                        key={card.title}
                        contentType={card.contentType as "leases" | "properties"}
                    >
                            <Card  
                                className="w-[300px] sm:w-[210px] h-[80px] 
                                hover:cursor-pointer hover:shadow-sm transition-all
                                hover:bg-zinc-50 hover:-translate-y-0.5 

                                "
                            >
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