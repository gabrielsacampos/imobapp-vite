"use client"


import {Link, useLocation} from "react-router-dom";


interface NavLinkProps {
  children: any;
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const {pathname} = useLocation();

  return (
    <Link
		  data-active={pathname === href}
      className="pl-2 py-2 border-l text-zinc-400  border-zinc-600 hover:text-white hover:border-l hover:bg-white/10 transition-colors data-[active=true]:border-white data-[active=true]:border-l-4   data-[active=true]:text-zinc-100 data-[active=true]:bg-white/10   flex gap-1 items-center"
      to={href}
    >
      {children}
    </Link>
  );
}
