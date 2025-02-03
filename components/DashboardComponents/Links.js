import Image from 'next/image'
import Link from 'next/link'

export default function Links() {

    return (
        <div className="border-t-2 pt-4 px-10">
            <ul className="text-sm lg:text-base space-y-2">
                <li className="">
                    <Link className="flex items-center" href="/">
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
                    
                <li className="">
                    <Link className="flex items-center" href="/campaign">
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
                <li className="">
                    <Link className="flex items-center" href="#">
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
                <li>
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
                <li>
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
                <li>
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

            <Link className="flex items-center mt-8" href="#">
                <Image
                    src={"/images/logout-rounded.png"}
                    width={16}
                    height={16}
                    alt="" 
                    className="mr-2"
                />
                <p>Log Out</p>
            </Link>
        </div>   
    )
}