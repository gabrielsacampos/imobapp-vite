import { createContext } from "react";

interface CustomerContextType{
    active_leases: {
        code: string;
        value: number;
        tenant_name: string;
        property: string;
    }[],
    properties_list: {
        property: string;
        available: boolean;
        rental_value: number;
        rooms: number;
        area: number;
        garage: number;
    }[]
    leases_to_expire: {
        code: string;
        value: number;
        tenant_name: string;
        property: string;
        expiration_date: string;
    }[],
}

interface CustomerProviderProps{
    children: React.ReactNode
}

const CustomerContext = createContext({} as CustomerContextType)

export function CustomerProvider({children}: CustomerProviderProps){
    return (
        <CustomerContext.Provider value={{active_leases: [], properties_list: [], leases_to_expire: []}}>
            {children}
        </CustomerContext.Provider>
    )
}