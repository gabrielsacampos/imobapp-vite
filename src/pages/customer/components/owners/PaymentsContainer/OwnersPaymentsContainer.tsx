import { TabsContent } from "@radix-ui/themes";
import { DatePicker, Spin } from "antd";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePayments } from "@/pages/customer/hooks/usePayments";

import { OwnersPaymentsChartGrouped } from "./OwnersPaymentsChartGrouped";
import { OwnersPaymentsStatement } from "./OwnersPaymentsStatement";

export function OwnersPaymentsContainer() {
    const currentMonthString = format(new Date(), "MMMM 'de' yyyy", {locale: ptBR})

    const [selectMonthString, setSelectedMonthString] = useState(currentMonthString)
    const [selectMonth, setSelectedMonth] = useState(new Date())

    const periodMonth = selectMonth.getMonth()
    const periodYear = selectMonth.getFullYear()

   const {data, error, isLoading} = usePayments(periodMonth, periodYear)

    function handleMonthChange(e){
        const newYear = e.$y;
        const newMonth = e.$M;

        const newMonthString = format(new Date(newYear, newMonth), "MMMM 'de' yyyy", {locale: ptBR})

        setSelectedMonthString(newMonthString)
        setSelectedMonth(new Date(newYear, newMonth))
    }


    if(error){
        return <div>error</div>
    }

    return (
        <div>
         <div className="flex flex-col sm:flex-row justify-center gap-2 items-center my-5">
                <h1 className="font-semibold text-zinc-500">Recebimentos no período</h1>
                    <DatePicker 
                        className="w-[200px]"
                        placeholder={selectMonthString}
                        onChange={handleMonthChange} 
                        picker="month" 
                        format="MM/YYYY"
                    />

            </div>
            <Tabs defaultValue="statement"> 
                <TabsList className="w-full justify-between">
                    <TabsTrigger  className="self-justify  w-full"value='statement'>Extrato</TabsTrigger>
                    <TabsTrigger className="self-justify  w-full" value="grouped-by-building">Agrupados por empreendimento</TabsTrigger>
                </TabsList>
                <TabsContent value="statement">
                    {
                        isLoading? 
                        <div className="w-full h-full flex items-center justify-center mt-10"> <Spin size="large"/> </div>:
                            <OwnersPaymentsStatement payments={data!} />
                            
                    }
                </TabsContent>
                <TabsContent value="grouped-by-building">
                    {
                        isLoading? 
                            <div className="w-full h-full flex items-center justify-center mt-10"> <Spin size="large"/> </div>:
                            <OwnersPaymentsChartGrouped  payments={data!}/>
                    }
                </TabsContent>
            </Tabs>
        </div>
    )
}