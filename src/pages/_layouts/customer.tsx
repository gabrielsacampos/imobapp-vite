import { SignedIn, SignedOut, SignOutButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import { CustomerProvider } from "@/contexts/CustomerContext";
import { useAuth } from "@/hooks/useAuth";

import { SignIn } from "../auth/sign-in";

export function CustomerLayout(){
    const {user, isAuthorized, isAuthorizing} = useAuth()

    if(isAuthorizing){
        return <h1>Loading...</h1>
    }

    if(!isAuthorized){
        return (
            <>
                <SignUpButton>
                    sair
                </SignUpButton>
                <h1>nao autorizado</h1>
            </>
            )
    }


    return(
        <CustomerProvider>
            <SignedOut>
                <SignIn />
            </SignedOut>
            <SignedIn>
                <SignOutButton />
                <div className="flex min-h-screen flex-col antialiased items-center mt-5">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </SignedIn>
        </CustomerProvider>
    )
}