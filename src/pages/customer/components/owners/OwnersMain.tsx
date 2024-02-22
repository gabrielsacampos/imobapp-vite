import { useOwnersBodyContainer } from "@/hooks/useOwnersBodyContainer";

import { OwnerProvider } from "../../contexts/OwnerContext";
import { OwnersBodyContainer } from "./OwnersBodyContainer";
import { OwnersTopCardsContainer } from "./OwnersTopCards";

export function OwnersMain(){
    const ownersBodyContainerQuery = useOwnersBodyContainer();
    return(
        <OwnerProvider>
            <div className="w-full flex flex-col gap-5 items-center">
                <OwnersTopCardsContainer />
                <OwnersBodyContainer {...ownersBodyContainerQuery} />
            </div>
        </OwnerProvider>
    )
}