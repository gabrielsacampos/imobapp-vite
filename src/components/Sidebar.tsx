'use client'
import { AvatarIcon, DashboardIcon, FileTextIcon, HomeIcon, TokensIcon } from "@radix-ui/react-icons";
import { Scale as ScaleIcon, Search, Wallet2 as WalletIcon } from "lucide-react";
import { ReactNode } from 'react';

import NavLink from "./NavLink";


export type SidebarItem = {
	unabled: boolean;
	label: string;
	icon: ReactNode;
	path: string;
}


export const sidebarItems: SidebarItem[] = [
	{
		unabled: false,
		label: 'Dashboard',
		icon: <TokensIcon />,
		path: "/"
	},
	{
		unabled: false,
		label: 'Contatos',
		icon: <AvatarIcon />,
		path: ""
	},
	{
		unabled: true,
		label: 'Imóveis',
		icon: <HomeIcon />,
		path: "/properties"
	},
	{
		unabled: true,
		label: 'Contratos',
		icon: <FileTextIcon />,
		path: "/leases"
	},
	{
		unabled: true,
		label: 'Finanças',
		icon: <WalletIcon  size={15}/>,
		path: "/finances"
	},
	{
		unabled: false,
		label: 'Jurídico',
		icon: <ScaleIcon size={15} />,
		path: "/legal"
	}
]



interface SideBarProps {
  opened: boolean;
}

export function Sidebar({opened}: SideBarProps) {
  return (
   
<aside className={`bg-indigo-600 drop-shadow-2xl border-r border-white/10 left-0 top-14 bottom-0 w-[150px] 
      ${opened? 'block fixed z-10 shadow-2xl backdrop-blur-lg':'hidden' }
    `}>

      <div className="py-3">
        <button className=" w-full mt-1 px-4 flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 hover:border-white h-8 rounded-full transition-colors">
          <Search size={14} />
          <span>Explore</span>
        </button>

		<nav className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col">
              {sidebarItems.map((item) => {
                return (
                  <NavLink key={item.label} href={item.path}>
                    {item.icon}{item.label}
                  </NavLink>
                );
              })}
            </div>
        </nav>
      </div>
    </aside>
    
      );
}
