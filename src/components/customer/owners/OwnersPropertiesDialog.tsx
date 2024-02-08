import { Dialog, TableHeader, Tabs } from "@radix-ui/themes";
import React from "react";

import { Table, TableBody, TableHead } from "@/components/ui/table";

export interface OnwersPropertiesDialogProps {
    children: React.ReactNode
}

export function OnwersPropertiesDialog({children}: OnwersPropertiesDialogProps){
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content>
                <Tabs.Root>
                    <Tabs.List defaultValue="availables">
                        <Tabs.Trigger value="availables">Disponíveis</Tabs.Trigger>
                        <Tabs.Trigger value="unavailables">Alugados</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="availables">
                        <OwnersPropertiesDialogContent propertiesStatus="availables" />
                    </Tabs.Content>
                    <Tabs.Content value="unavailables">
                        <OwnersPropertiesDialogContent propertiesStatus="unavailables"  />
                    </Tabs.Content>
                </Tabs.Root>    
            </Dialog.Content>
        </Dialog.Root>
    )
}



export interface OwnersPropertiesDialogContentProps{
    propertiesStatus: "availables" | "unavailables"
}
export function OwnersPropertiesDialogContent({propertiesStatus}: OwnersPropertiesDialogContentProps){
    return (
        
            
        <Table>
            <TableHeader>
                <TableHead>Emp.</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Quartos</TableHead>
                <TableHead>Valor</TableHead>
            </TableHeader>
            <TableBody>

            </TableBody>
        </Table>
    )
}