import { useOwnersBodyContainer } from "@/hooks/useOwnersBodyContainer";

import { OwnersBodyContainer } from "./OwnersBodyContainer";
import { OwnersTopCards } from "./OwnersTopCards";

export function OwnersMain(){
    const ownersBodyContainerQuery = useOwnersBodyContainer();
    return(
        <div className="w-full flex flex-col gap-5 items-center">
            <OwnersTopCards />
            <OwnersBodyContainer {...ownersBodyContainerQuery} />
        </div>
    )
}