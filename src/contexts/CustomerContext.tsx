import { useCustomers } from "@/hooks/useCustomers";
import { useUser } from "@clerk/clerk-react";
import { createContext } from "react";

interface CustomerContextType{
    user_id : string;
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
        <CustomerContext.Provider value={{} as CustomerContextType}>
            {children}
        </CustomerContext.Provider>
    )
}