
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Theme } from "@radix-ui/themes"
import { Outlet } from "react-router-dom"

import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/sonner";

import { SignIn } from "../auth/sign-in";



export function AppLayout(){

    return(
        <>
        <SignedIn>
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
        </SignedIn>
        <SignedOut>
            <SignIn />
        </SignedOut>
        </>
    )
}