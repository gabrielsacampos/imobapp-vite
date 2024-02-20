import { createContext } from "react";

import { useAuth } from "@/hooks/useAuth";
import { IUsers } from "@/lib/axios/api";

interface AuthContextType{
    user: IUsers | unknown;
    isAuthorizing: boolean;
    isAuthorized: boolean;
}

interface AuthContextProps{
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthContextProps){
    const {user, isAuthorizing, isAuthorized} = useAuth()
    return (
        <AuthContext.Provider value={{user, isAuthorizing, isAuthorized}}>
            {children}
        </AuthContext.Provider>
    )
}