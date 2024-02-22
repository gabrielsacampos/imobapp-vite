import { createContext } from "react";

import { useAuth } from "@/hooks/useAuth";
import { IUsers } from "@/lib/axios/api";

export interface AuthContextType{
    user: IUsers;
    isAdmin: boolean;
    isAuthorizing: boolean;
    isAuthorized: boolean;
}

interface AuthProviderProps{
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderProps){
    const {user, isAuthorizing, isAuthorized} = useAuth()
    
    return (
        <AuthContext.Provider value={{user , isAuthorized, isAuthorizing} as AuthContextType}>
            {children}
        </AuthContext.Provider>
    )
}