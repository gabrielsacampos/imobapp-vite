import { UserButton } from "@clerk/clerk-react";
import { ChevronsLeft } from "lucide-react";
import { useState } from "react";

import Logo from "./Logo";
import { Sidebar } from "./Sidebar";


export function Header() {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  return (
    <div>
      <header
        className="flex  justify-between items-center bg-indigo-600 border-b  px-8 py-3 top-0 border-white/10 w-full left-0  h-14"
      >

      <button onClick={() => setSidebarOpened(!sidebarOpened)} className="flex gap-2 text-white">
        {sidebarOpened? <ChevronsLeft /> : <ChevronsLeft className='transform rotate-180 transition-transform ' />}
        <span>Menu</span>
      </button>

        <div className="flex gap-5">
            <Logo />
        </div>

        <UserButton />
      </header>

      <Sidebar opened={sidebarOpened} />

    </div>
  );
}
