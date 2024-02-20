import { UserButton } from "@clerk/clerk-react";

import Logo from "@/components/Logo";

export function Header(){
    return (
        <div className="w-full h-14 bg-blue-600 flex justify-between items-center px-2 border border-black/10 ">
            <div className="flex flex-col gap-2">
                <Logo />
                    <p className="text-xs text-zinc-200 ">Área do cliente</p>
            </div>
                <UserButton />
        </div>
    )
}