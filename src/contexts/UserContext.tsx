import { createContext, useState } from "react";

import { IUsers } from "@/lib/axios/api";


export interface UserContextType{
    user: IUsers | unknown;
    setUser: (user: IUsers) => void;
}

export const UserContext = createContext({} as UserContextType)

export interface UserProviderProps{
    children: React.ReactNode;
}

export function UserProvider({children}: UserProviderProps){
    const [user, setUser] = useState<IUsers | unknown>(null)


    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}