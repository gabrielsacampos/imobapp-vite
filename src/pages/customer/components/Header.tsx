import { UserButton } from "@clerk/clerk-react";
import { Badge } from "@radix-ui/themes";

import Logo from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";


export function Header(){
    const { user } = useAuth();
    return (
        <div className="w-full h-14 bg-blue-600 flex justify-between items-center px-2 border border-black/10 ">
            <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-2">
                    <Logo />
                        <p className="text-xs text-zinc-200 ">Área do cliente</p>
                </div>
                <Badge variant="solid" color="blue" style={{height: "20px" }}>Beta</Badge>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-zinc-300 text-xs font-bold">Olá, {user?.firstname}</p>
                <UserButton />

            </div>
        </div>
    )
}