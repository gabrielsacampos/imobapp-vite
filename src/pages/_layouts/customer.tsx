import { Outlet } from "react-router-dom";


export function CustomerLayout(){
    return(
        <div className="flex min-h-screen flex-col antialiased items-center mt-5">
            <main>
                <Outlet />
            </main>
        </div>
    )
}