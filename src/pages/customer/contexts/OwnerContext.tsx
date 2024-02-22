import { createContext } from "react";

import { IMeOwner } from "@/lib/axios/interfaces/customers/owners/IMeOwner";

import { useMeAsOwner } from "../hooks/useMeAsOwner";

export interface OwnerContextType{
    data: IMeOwner | undefined;
    isLoading: boolean;
    error: Error | null;

}

export const OwnerContext = createContext({} as OwnerContextType)

export interface OwnerProviderProps{
    children: React.ReactNode;
}

export function OwnerProvider({children}: OwnerProviderProps){
    const {data, isLoading, error} = useMeAsOwner()

    return (
        <OwnerContext.Provider 
            value={
                {
                    data,
                    isLoading,
                    error
                }
            }>
            {children}
        </OwnerContext.Provider>
    )
}