'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { getSession } from "../../lib/auth";

export default function DesktopNavLinks() {
  const pathname = usePathname()
  const isHome = pathname === "/"; 
  const [isSession, setIsSession] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
        const session = await getSession();
        if (session?.user) {
          setIsSession(true)
        }
    };
    checkSession();
  }, []);

  return (
    <main className={`flex py-6 px-16 md:flex justify-between items-center ${isHome ? "text-orange-500" : "text-orange-100 bg-orange-500"}`}>
      <div className="font-black text-2xl">
        <Link href="/">
          KraneFinance
        </Link>
      </div>
      
      <div>
        <ul className=" flex space-x-5 py-2 text-base">
          <li className="hover:text-orange-900 hover:font-bold">
            <Link className={pathname === "/" ? 'font-bold text-orange-800' : ''} href="/">Home</Link>
          </li>
          <li className="hover:text-orange-900 hover:font-bold">
            <Link className={pathname === "/about" ? 'font-bold text-orange-800' : ''} href="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-900 hover:font-bold">
            <Link className={pathname === "/contact" ? 'font-bold text-orange-800' : ''} href="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-900 hover:font-bold">
            <Link className={pathname === "/services" ? 'font-bold text-orange-800' : ''} href="/services">Services</Link>
          </li>
        </ul>
      </div>

      { !isSession ?
      <div className="flex space-x-5 text-base">
          <div className="py-2 hover:text-orange-900 hover:font-bold">
            <Link href="/signin">Sign In</Link>
          </div>
          <div className="px-8 py-2 hover:font-bold hover:text-orange-900 bg-orange-500 text-orange-100 rounded-md">
            <Link href="/signup">Register</Link>
          </div>
      </div> 
      :
      <div className="px-8 py-2 text-base hover:text-orange-900 hover:font-bold bg-orange-500 text-orange-100 rounded-md">
        <Link href="/dashboard">Dashboard</Link>
      </div>
      }
    </main>
  );
}