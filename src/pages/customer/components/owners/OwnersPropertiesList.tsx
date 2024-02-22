import { InfoCircledIcon } from "@radix-ui/react-icons"
import { Separator } from "@radix-ui/themes"
import { Collapse, CollapseProps } from "antd"
import { useContext } from "react"

import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner"

import { OwnerContext } from "../../contexts/OwnerContext"


const text = "smething in here"

const items: CollapseProps['items'] = [
    {
        key: "1",
        label: 
            <div className=" p-2 flex justify-between items-center">
                
                <p>Comercial</p>
                
                <div className="flex justify-between gap-2 items-center">
                    <p className="text-xs italic">3 imóveis disponíveis</p>
                    <Separator orientation="vertical" />
                    <p className="text-xs italic">4</p>
                </div>
            </div>,
        children: <p>{text}</p>
    },
    {
        key: "2",
        label: 'Eko Home Club',
        children: <p>{text}</p>
    },
    {
        key: "3",
        label: 'Itália',
        children: <p>{text}</p>
    }
]



export function OwnersPropertiesList(){
    const {data, isLoading, error} = useContext(OwnerContext)

    if(isLoading){
        return null
    }

    const {buildings_and_properties} = data as IMeOwner
    
    const countAvailable = buildings_and_properties.reduce((acc, curr) => acc+= curr.count_available, 0)

    let headerMessage: string;

    switch(countAvailable){
        case 0:
            headerMessage = "Você não possui imóveis disponíveis"
            break
        case 1:
            headerMessage = "Você possui 1 imóvel disponível"
            break
        default:
            headerMessage = `Você possui ${countAvailable} imóveis disponíveis`
    }


    return(
        <div className="w-full ">
            <h1 className="font-semibold text-xl text-zinc-500">Relação de Imóveis</h1>
            
            <div className="flex gap-1 mt-1">
                <InfoCircledIcon />
                <h2 className="italic text-xs">{headerMessage}</h2>
            </div>
            
            <OwnersPropertiesAccordions items={items}/>
        </div>
    )
}



export interface OwnersPropertiesAccordionsProps{
    items: CollapseProps['items']
}

export function OwnersPropertiesAccordions({items}: OwnersPropertiesAccordionsProps){

    return(
        <Collapse 
            items={items} 
            ghost={true}
        />
    )

}


export interface OwnersPropertiesAccordionLabelProps {
    building_name: string;
    countProperties: number;
    countAvailable: number;
}

export function OwnersPropertiesAccordionLabel({building_name, countProperties, countAvailable}: OwnersPropertiesListAccordionProps){
    return(
        <div className=" p-2 flex justify-between items-center">
            
            <p>{building_name}</p>
            
            <div className="flex justify-between gap-2 items-center">
                <p className="text-xs italic">{countAvailable} imóveis disponíveis</p>
                <Separator orientation="vertical" />
                <p className="text-xs italic">{countProperties}</p>
            </div>
        </div>
    )
}

