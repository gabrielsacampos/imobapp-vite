import { InfoCircledIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Separator, Table } from "@radix-ui/themes"
import { Collapse, CollapseProps } from "antd"
import { useContext } from "react"

import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner"

import { OwnerContext } from "../../contexts/OwnerContext"
import { BedIcon, Building, CarIcon, DollarSign, FileTextIcon, InfoIcon, Ruler } from "lucide-react"
import { priceFormatter } from "@/lib/utils/formatter"






export function OwnersPropertiesContainer(){
    const {data, isLoading, error} = useContext(OwnerContext)

    if(isLoading){
        return null
    }

    if(error){
        return <p>error</p>
    }
    const {buildings_and_properties} = data as IMeOwner
    
    const countAvailable = buildings_and_properties.reduce((acc, curr) => acc+= curr.count_available, 0)
    const countProperties = buildings_and_properties.reduce((acc, curr) => acc+= curr.count_properties, 0)

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
            
            <div className={`flex p-0.5 px-2 rounded-sm justify-between mt-1 ${countAvailable > 0 ? "bg-green-100 text-green-600" : ""}`}>
                <p className="flex gap-1">
                    <InfoCircledIcon />
                    <h2 className="italic text-xs">{headerMessage}</h2>
                </p>
                <span className="italic text-xs">/ {countProperties}</span>
                
            </div>
            
            <OwnersPropertiesAccordions />
        </div>
    )
}


export function OwnersPropertiesAccordions(){
    const {data, isLoading, error} = useContext(OwnerContext)

    if(isLoading){
        return null
    }

    if(error){
        return <p>error</p>
    }

    
    const items: CollapseProps['items'] = data?.buildings_and_properties.map((building, index) => {
        const key = index.toString()
        const label = 
            <OwnersPropertiesAccordionLabel 
                building_name={building.name} 
                countProperties={building.count_properties} 
                countAvailable={building.count_available}
            />
        const children = <OwnersPropertiesPerBuildingList properties={building.properties} />

        return {key, label, children}
        })



    


    return(
        
        <Collapse 
            className="mt-5"
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

export function OwnersPropertiesAccordionLabel({building_name, countProperties, countAvailable}: OwnersPropertiesAccordionLabelProps){
    const hasAvailable = countAvailable > 0
    const displayCountAvailable = hasAvailable ? 
        `${countAvailable} disponíveis` :
        "nenhum disponível"
    
    return(
        <div className=" flex flex-col md:flex-row justify-between items-center">
            
            <p>{building_name}</p>
            
            <div className="
                flex gap-2 items-center
            ">
                
                <div className={`p-0.5 px-1 rounded-sm ${hasAvailable ? "bg-green-100 text-green-600" : "text-zinc-400"}`}>
                    <p className="text-xs italic">
                        {displayCountAvailable}
                    </p>
                </div>

                <Separator orientation="vertical" />
                <p className="text-xs italic">{countProperties}</p>
            </div>
        </div>
    )
}


export interface OwnersPropertiesPerBuildingListProps {
    properties: IMeOwner['buildings_and_properties'][0]['properties']
}
export function OwnersPropertiesPerBuildingList({properties}: OwnersPropertiesPerBuildingListProps){
    return(
        <Table.Root mt="-5">
            <Table.Row className="text-xs italic">
            <Table.RowHeaderCell><span className="flex gap-1 items-center text-zinc-500 "> <Building size={10} /> Imov.</span></Table.RowHeaderCell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"> <Ruler size={10} /> m²</span></Table.Cell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"> <CarIcon size={10} /> vagas</span></Table.Cell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"> <BedIcon size={10} />  qts </span></Table.Cell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"><DollarSign size={10} /> tabela</span></Table.Cell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"><FileTextIcon size={10} /> contrato</span></Table.Cell>
                <Table.Cell><span className="flex gap-1 items-center text-zinc-500"> status</span></Table.Cell>
            </Table.Row>

                
                {properties.map(property => {
                    const {unity, block, area, garage, room, suite, rental_value, rented_value, status} = property

                    const statusPt = status === "available" ? "Disp." : "Alug."
                    const style = status === "available" ? "bg-green-100" : ""



                    return(
                        <Table.Row 
                            key={property.id} 
                            className={`text-xs ${style}`}>
                            <Table.Cell><span className="flex gap-1 items-center">{unity} {block ? " - ": ""} {block}</span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"><Ruler size={10} />{area} </span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"> <CarIcon size={10} />  {garage}</span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"> <BedIcon size={10} />  {room} </span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"><DollarSign size={10} /> {rental_value}</span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"><FileTextIcon size={10} /> {rented_value}</span></Table.Cell>
                            <Table.Cell> <span className="flex gap-1 items-center"> {statusPt}</span></Table.Cell>
                            
                        </Table.Row>
                    )
                })}
        </Table.Root>
    )

}