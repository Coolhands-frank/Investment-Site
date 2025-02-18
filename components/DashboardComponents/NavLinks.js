"use client"
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/lib/auth';
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
 

export default function NavLinks({onClick}) {
    const { setUser } = useUser();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/signin");
        setUser(null)
      };

    return (
        <div className="border-t-2 pt-4 mt-2 md:mt-0 px-4 md:px-10 text-gray-100">
            <ul className="text-xs lg:text-base space-y-4 md:space-y-2">
                <li className="" onClick= {onClick}>
                    <Link className="flex items-center" href="/dashboard">
                        <Image
                            src={"/images/Monitor.png"}
                            width={16}
                            height={16}
                            alt=""
                            className="mr-2" 
                        />
                        <p>Overview</p>
                    </Link>
                </li>
                <li className="" onClick= {onClick}>
                    <Link className="flex items-center" href="/dashboard/withdraw">
                        <Image
                            src={"/images/dialing-numbers.png"}
                            width={16}
                            height={16}
                            alt=""
                            className="mr-2" 
                        />
                        <p>Withdraw</p>
                    </Link>
                </li> 
                <li className="" onClick= {onClick}>
                    <Link className="flex items-center" href="/dashboard/invest">
                        <Image
                            src={"/images/add-dollar.png"}
                            width={16}
                            height={16}
                            alt=""
                            className="mr-2" 
                        />
                        <p>Invest Funds</p>
                    </Link>
                </li>
                <li onClick= {onClick}>
                    <Link className="flex items-center" href="#">
                        <Image
                            src={"/images/shopping-cart.png"}
                            width={16}
                            height={16}
                            alt="" 
                            className="mr-2"
                        />
                       <p>Products</p>
                    </Link>
                </li>
                <li onClick= {onClick}>
                    <Link className="flex items-center" href="#">
                        <Image
                            src={"/images/health-graph.png"}
                            width={16}
                            height={16}
                            alt="" 
                            className="mr-2"
                        />
                        <p>History</p>
                    </Link>
                </li>
                <li onClick= {onClick}>
                    <Link className="flex items-center" href="#">
                        <Image
                            src={"/images/Settings.png"}
                            width={16}
                            height={16}
                            alt="settings icon" 
                            className="mr-2"
                        />
                        <p>Settings</p>
                    </Link>
                </li>
            </ul>
            <button className="text-xs lg:text-base flex items-center mt-8" onClick= {handleSignOut}>
                <Image
                    src={"/images/logout-rounded.png"}
                    width={16}
                    height={16}
                    alt="" 
                    className="mr-2"
                />
                <p>Log Out</p>
            </button>
        </div>   
    )
}