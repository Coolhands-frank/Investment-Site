"use client"
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export default function Dashboard() {
    const { user } = useUser();

    return (
        <div className="gap-3 md:h-full w-full flex flex-col items-center md:justify-center">
            <div className="flex flex-col md:flex-row gap-3 text-gray-600 w-full">
                <div className=" py-8 md:py-0 rounded-xl md:w-1/3 md:max-w-xs bg-white flex flex-col shadow-md items-center justify-center">
                    <Image
                        src={"/images/Bank.png"}
                        width={80}
                        height={80}
                        alt="database icon"
                        className="h-15 w-15"
                        priority
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 md:mt-6">${ user ? user.total_investment : "0" }</h2>
                    <p className="text-xs md:text-sm font-medium">Total Investment</p>
                </div>
                <div className="rounded-xl bg-white shadow-md py-8 md:w-2/3 md:max-w-2xl flex flex-col items-center">
                
                    {/* Wrapper for Icons and Text */}
                    <div className="grid grid-rows-2 grid-cols-[auto_auto] grid-flow-row auto-rows-min">
                        {/* Icons Column */}
                        <div className="flex flex-col justify-center pr-4 pl-10 lg:pl-20 border-b-2 pb-2">
                            <Image 
                                src="/images/Database.png" 
                                alt="Investment Icon" 
                                width={60} 
                                height={60} 
                                className="h-15 w-15" 
                            />
                        </div>
                        <div className="border-b-2 flex flex-col justify-center text-start pb-2 pr-12 lg:pr-20">
                            <p className="text-2xl md:text-3xl font-medium">${ user ? user.active_investment : "0" }</p>
                            <p className="text-xs md:text-sm font-normal">Active Investment</p>
                        </div>
                        
                        <div className="flex flex-col justify-center pr-4 pl-10 lg:pl-20 pt-2">
                            <Image 
                                src="/images/timetopay.png" 
                                alt="Clock Icon" 
                                width={60} 
                                height={60} 
                                className="h-15 w-15" 
                            />
                        </div>
                        
                        {/* Text Column */}
                        <div className="flex flex-col justify-center text-start pt-2">
                              <p className="text-2xl md:text-3xl font-medium">${ user ? user.last_investment : "0" }</p>
                              <p className="text-xs md:text-sm font-normal">Last Investment</p>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 text-gray-600">
                <div className="py-8 rounded-xl md:w-1/3 md:max-w-xs bg-white flex flex-col shadow-md items-center justify-center">
                    <Image
                        src={"/images/pinpad.png"}
                        width={80}
                        height={80}
                        alt="database icon"
                        priority
                        className="h-15 w-15"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 md:mt-6">${ user ? user.total_withdrawal : "0"}</h2>
                    <p className="text-xs md:text-sm font-medium">Total Withdraw</p>
                </div>
                
                <div className="rounded-xl bg-white shadow-md py-8 md:w-2/3 md:max-w-2xl flex flex-col items-center justify-center">
                    {/* Wrapper for Icons and Text */}
                    <div className="grid grid-rows-2 grid-cols-[auto_auto] grid-flow-row auto-rows-min">
                        {/* Icons Column */}
                        <div className="flex flex-col justify-center pr-4 pl-10 lg:pl-20 border-b-2 pb-2">
                            <Image 
                                src="/images/Database.png" 
                                alt="Investment Icon" 
                                width={60} 
                                height={60} 
                                className="h-15 w-15" 
                            />
                        </div>
                        <div className="border-b-2 flex flex-col justify-center text-start pb-2 pr-12 lg:pr-20">
                            <p className="text-2xl md:text-3xl font-medium">${ user ? user.pending_withdrawal : "0" }</p>
                            <p className="text-xs md:text-sm font-normal">Pending Withdraw</p>
                        </div>
                        
                        <div className="flex flex-col justify-center pr-4 pl-10 lg:pl-20 pt-2">
                            <Image 
                                src="/images/timetopay.png" 
                                alt="Clock Icon" 
                                width={60} 
                                height={60} 
                                className="h-15 w-15" 
                            />
                        </div>
                        
                        {/* Text Column */}
                        <div className="flex flex-col justify-center text-start pt-2">
                              <p className="text-2xl md:text-3xl font-medium">${ user ? user.last_withdrawal : "0" }</p>
                              <p className="text-xs md:text-sm font-normal">Last Withdraw</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}