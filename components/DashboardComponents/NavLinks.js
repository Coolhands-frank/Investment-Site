"use client"
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/lib/auth';
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Home } from "lucide-react";
import { usePathname } from 'next/navigation';
 

export default function NavLinks({onClick}) {
    const pathname = usePathname()
    const { setUser } = useUser();
    const router = useRouter();

    const navLinks = [
        { name: "Overview", href: "/dashboard", image: "Monitor.png" },
        { name: "Withdraw", href: "/dashboard/withdraw", image: "dialing-numbers.png" },
        { name: "Invest Funds", href: "/dashboard/invest", image: "add-dollar.png" },
        { name: "Product", href: "#", image: "shopping-cart.png" },
        { name: "History", href: "/dashboard/history", image: "health-graph.png" },
        { name: "Settings", href: "/dashboard/settings", image: "Settings.png" },
    ];

    const handleSignOut = async () => {
        await signOut();
        router.push("/signin");
        setUser(null)
      };

    return (
        <nav className="px-4 flex flex-col items-center text-gray-100">
            <ul className=" flex flex-col space-y-4 md:space-y-2">

                {navLinks.map((link) => (
                    <li key={link.href} 
                        className="relative"
                        onClick={onClick}
                    >

                        {/* Small Circle for Active Link */}
                        {pathname === link.href && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-900 rounded-full"></span>
                        )}

                        <Link
                            href={link.href}
                            className={`flex items-center text-xs lg:text-base ${
                            pathname === link.href ? "text-orange-800" : "text-white"
                            }`}
                        >
                            <Image
                                src={`/images/${link.image}`}
                                width={16}
                                height={16}
                                alt=""
                                className="mr-2" 
                            />
                            {link.name}
                        </Link>

                    </li>
                ))}
                
            </ul>
            <div className="mt-8 flex flex-row justify-center gap-1 md:gap-2 text-xs lg:text-base">
                <Link href="/" className="flex items-center hover:text-orange-200">
                    <Home className="w-4 h-4 mr-0.5 opacity-60" />
                    <span>Home</span>
                </Link>
                <button className="flex items-center hover:font-bold" onClick= {handleSignOut}>
                    <Image
                        src={"/images/logout-rounded.png"}
                        width={14}
                        height={14}
                        alt="" 
                        className="mr-0.5"
                    />
                    <p>Log Out</p>
                </button>
            </div>
        </nav>   
    )
}