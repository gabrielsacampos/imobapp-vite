import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";



export function TopInfo(){
  return (
      <Callout.Root color="green" mt="2">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          <p >Ultimo fechamento em: <span className="font-bold underline italic">01/02/2024</span></p> 
        </Callout.Text>
      </Callout.Root>
  )
}