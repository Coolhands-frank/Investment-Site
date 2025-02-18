"use client";
import { useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export default function Invest() {
    const { user } = useUser();
    
    return (
        <div className="h-full text-gray-600">
            <h2 className="mb-16 font-bold text-3xl">OUR OFFERINGS</h2>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="bg-white shadow-lg rounded-xl">
                    <div>
                        <Image
                            src={"/images/dashboard_wallet.png"}
                            width={53}
                            height={53}
                            alt="database icon"
                            priority
                        />  
                        <h2 className="font-semibold text-2xl">SHORT TERM</h2>
                    </div>
                    <div className="text-center border-b-2 border-gray-600">  
                        <h2 className="font-bold text-3xl">$500</h2>
                    </div>
                </div>

                <div className=" bg-white shadow-lg rounded-xl">
                    <div>
                        <Image
                            src={"/images/dashboard_wallet.png"}
                            width={53}
                            height={53}
                            alt="database icon"
                            priority
                        />
                        <h2 className="font-semibold text-2xl">FLEXIBLE<br/>PLAN</h2>  
                    </div>
                    <div className="text-center border-b-2 border-gray-600">
                        
                        <h2 className="font-bold text-3xl">$500</h2>
                    </div> 
                </div>
                <div></div>
            </div>
        </div>
    )
}