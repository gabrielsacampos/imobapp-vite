import { TabsContent } from "@radix-ui/themes";
import { DatePicker } from "antd";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { OwnersPaymentsStatement } from "./OwnersPaymentsStatement";

export function OwnersPaymentsContainer() {
    const currentMonthString = format(new Date(), "MMMM 'de' yyyy", {locale: ptBR})
    return (
        <div>
         <div className="flex flex-col sm:flex-row justify-center gap-2 items-center my-5">
                <h1 className="font-semibold text-zinc-500">Recebimentos no período</h1>
                    <DatePicker 
                        className="w-[200px]"
                        placeholder={currentMonthString}
                        onChange={() => console.log("changed")} 
                        picker="month" 
                    />

            </div>
            <Tabs defaultValue="statement"> 
                <TabsList className="w-full justify-between">
                    <TabsTrigger  className="self-justify  w-full"value='statement'>Extrato</TabsTrigger>
                    <TabsTrigger className="self-justify  w-full" value="grouped-by-building">Agrupados por empreendimento</TabsTrigger>
                </TabsList>
                <TabsContent value="statement">
                   <OwnersPaymentsStatement />
                </TabsContent>
                <TabsContent value="grouped-by-building">
                    grouped by building
                </TabsContent>
            </Tabs>
        </div>
    )
}