import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@radix-ui/themes";


export function SignIn(){
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-zinc-400 h-full w-full flex items-center justify-center">
                        
                        <Button><SignInButton>entrar</SignInButton></Button>
                
                
            </div>
            <div className="bg-red-400 h-full w-full">
                side
            </div>
        </div>
    )
}