import { Badge, Callout } from "@radix-ui/themes";
import { ArrowUpRight, BadgeInfo } from "lucide-react";
import { useContext } from "react";

import { priceFormatter } from "@/lib/utils/formatter";

import { OwnerContext } from "../../contexts/OwnerContext";

export function OwnersReadjustmentsContainer(){
    const {data, error, isLoading} = useContext(OwnerContext)

    if(isLoading){
        return null
    }

    if(error){
        return null
    }


    const {leases, indexes} = data!

    const currentMonth = new Date().getMonth()
    const mustReadjust = leases.filter(lease => {
        return lease.readjustment_month === currentMonth
    })

    const countLeasesToReajust= mustReadjust.length
    const hasNegativeReadjustment = mustReadjust.some(lease => lease.need_readjustment!.percentage < 0)

    const totalLeasesValue = mustReadjust.reduce((acc, lease) => acc += lease.lease_value, 0)
    const totalReadjustmentValue = mustReadjust.reduce((acc, lease) => acc += lease.need_readjustment!.new_value, 0)

    const earningsValue = totalReadjustmentValue - totalLeasesValue
    const earningsPercent = ((earningsValue / totalLeasesValue) * 100).toFixed(2) + "%"


    return(
        <div>
            <h1 className="text-xl font-semibold text-zinc-500">Reajustes de aluguel</h1>
            <div className="flex gap-2 mt-2 ">
            {indexes.map(index => {
                const formatPercent = (index.last_accumulated_value * 100).toFixed(2) + "%"
                const badgeColor = index.last_accumulated_value > 0 ? "blue" : "orange"
                return(
                        <Badge 
                            key={index.name}
                            color={badgeColor}
                        >
                            <p>{index.name} <span>{formatPercent}</span></p>
                        </Badge>
                )
            })}
            </div>
            
            <div className="flex flex-col gap-1 mt-5">
                <Callout.Root size={"1"}>
                    <Callout.Text>
                        {countLeasesToReajust} contratos deverão reajustar nesse mês.
                    </Callout.Text>
                </Callout.Root>

                {hasNegativeReadjustment ? 
                    <Callout.Root size={"1"} color="orange">
                        <Callout.Icon>
                            <BadgeInfo size={10} />
                        </Callout.Icon>
                        <Callout.Text>
                            Existem contratos com reajuste negativo. O valor permanecerá o mesmo.
                        </Callout.Text>
                    </Callout.Root> : null
                }


                {earningsValue > 0 ?
                    <Callout.Root color="green">
                        <Callout.Text>
                            Sua renda será incrementada com <span className="font-bold">{priceFormatter.format(earningsValue)}</span>. Isso equivale a um acrescimo de <span className="font-bold">{earningsPercent}</span> 🤑
                        </Callout.Text>
                    </Callout.Root>
                    : null
                }
            </div>

            <ul>
                {mustReadjust.map(lease => {
                    const negativeReadjustment = lease.need_readjustment!.percentage < 0
                    return(
                        <li 
                            key={1}
                            className="flex flex-col justify-between mt-5 rounded-lg p-2" 

                        >
                            <div className="flex gap-2">
                                <h1 className=" font-semibold text-md truncate max-w-[300px]">{lease.property}</h1>
                                <IndexBagde percentage={lease.need_readjustment!.percentage}/>
                            </div>

                            <div className="flex gap-5 mt-2 text-xs items-center">
                                <p className="text-zinc-500">Antigo: {priceFormatter.format(lease.lease_value)}</p>
                                <p className="font-semibold text-zinc-500">Novo: {" "}
                                    <span className={`${negativeReadjustment ? "line-through" : "" }`}>
                                        {priceFormatter.format(lease.need_readjustment!.new_value)}
                                    </span>
                                    {negativeReadjustment ? 
                                        <span>
                                            {" "}{priceFormatter.format(lease.lease_value)}
                                        </span>
                                     : null}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export interface IndexBagdeProps {
    percentage: number;

}

export function IndexBagde({percentage}: IndexBagdeProps){
    let icon: React.ReactNode = null
    let color = "blue" as "blue" | "orange";

    if (percentage > 0) {
        icon = <ArrowUpRight size={10} />;
        color = "blue";
    } else if (percentage < 0) {
        icon = <BadgeInfo size={10} />;
        color = "orange";
    }

    return(
        <Badge
            color={color}
        > 
            <span className="font-light text-xs flex items-center gap-1"> 
                {icon} 
                {percentage >= 0 ? percentage: "Índice negativo"}
                </span> </Badge>
    )
}