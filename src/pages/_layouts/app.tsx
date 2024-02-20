import { SignedIn, useUser } from "@clerk/clerk-react";
import { Theme } from "@radix-ui/themes"
import { Outlet } from "react-router-dom"

import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/hooks/useAuth";


export function AppLayout(){
    const {user, isAuthorized, isLoading} = useAuth()

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!isAuthorized){
        return <h1>nao autorizado</h1>
    }

    return(
            <Theme>
                <Toaster richColors/>
                <div className="flex min-h-screen flex-col antialiased">
                <Header />
                    <main className="flex flex-1 flex-col gap-4 p-8 pt-6 ">
                        <Outlet />
                    </main>
                    <footer>
                        Footer
                    </footer>
                </div>
            </Theme>
    )
}