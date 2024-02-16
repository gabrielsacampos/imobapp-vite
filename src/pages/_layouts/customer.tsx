import { SignInButton, SignOutButton, SignedIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";


export function CustomerLayout(){
    return(
        <>
        <SignOutButton>
            <SignInButton />
        </SignOutButton>
        <SignedIn>
            <div className="flex min-h-screen flex-col antialiased items-center mt-5">
                <main>
                    <Outlet />
                </main>
            </div>
        </SignedIn>
        </>
    )
}