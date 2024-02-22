import { useCustomers } from "@/hooks/useCustomers";
import { useUsersList } from "@/hooks/useUsersList";
import { Checkbox } from "@radix-ui/themes";

export function Users(){
    const {data, error, isLoading} = useCustomers()

    if(isLoading){
        return (<>Carregando lista de usuários</>)
    }

    return (
        <ul>
            {data!.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    )

    // return(
    //     <div>
    //         <form action="">
    //             <label htmlFor="first-name">First Name</label>
    //             <input id="first-name" />


    //             <label htmlFor="last-name">Last Name</label>
    //             <input id="last-name" />


    //             <label htmlFor="email">Email</label>
    //             <input id="email" type="email" />
                
    //             <label htmlFor="role">Role</label>
    //             {/* multiple */} 

    //             <div className="flex gap-2">
    //                 <div className="flex gap-1">
    //                     <Checkbox size="1" defaultChecked={false} />
    //                     <p>ADMIN</p>
    //                 </div>
                    
    //                 <Checkbox size="1" defaultChecked={false} />
    //                     <p>AGENT</p>
    //                 <Checkbox size="1" defaultChecked={false} />
    //             </div>

    //             <label htmlFor="password">Password</label>
    //             <input id="password" type="password" />
    //             <button type="submit">Cadastrar</button>
    //         </form>
    //     </div>
    // )
}