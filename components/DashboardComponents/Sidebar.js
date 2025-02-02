import Image from 'next/image'
import Link from 'next/link'

export default function SideBar() {

    return (
        <div className="hidden h-full py-4 w-80 lg:w-96 text-white md:flex flex-col justify-between items-center">
            <h1 className="font-black text-lg lg:text-xl text-orange-100">Krane Finance</h1>

            <div className="rounded-xl bg-amber-300 my-3 px-6 py-3 lg:px-8 lg:py-4 flex flex-col justify-center items-center">
                <div className="w-36 h-36 border rounded-full">

                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-lg lg:text-xl mt-2">ALEX WONG</h2>
                    <p className="text-xs font-normal text-black opacity-60">Business Analyst</p>
                    <h2 className="text-2xl lg:text-3xl font-bold my-2 text-black opacity-60">$10,000</h2>
                </div>
            </div>
        {/*
            <div className="my-4">
                <hr className=" w-52 border border-gray-100"/>
            </div>
        */}
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
                                alt="" 
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

        </div>
    )
}