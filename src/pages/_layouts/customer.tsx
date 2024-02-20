import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import { SignIn } from "../auth/sign-in";
import { Header } from "../customer/components/Header";

export function CustomerLayout(){

    return(
        <>
            <SignedOut>
                <SignIn />
            </SignedOut>
            <SignedIn>
                <Header />
                <div className="flex min-h-screen flex-col antialiased items-center mt-5">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </SignedIn>
        </>
        
    )
}