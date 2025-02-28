"use client";
import { useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export default function Withdraw() {
    const [ isPlaceWithdrawal, setIsPlaceWithdrawal] = useState(false)
    const { user } = useUser();

    const handleWithdrawal = () => {
        setIsPlaceWithdrawal(true)
    }
    
    return (
        <div className="h-full flex flex-col items-center justify-center text-gray-600 px-2">
            <div className="text-center mb-6">
                <p className="text-base md:text-lg lg:text-xl mb-1 font-bold">Account Balance</p>
                <h2 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold">${user ? user.total_investment: "0"}</h2>
            </div>

            <div className="flex flex-col justify-center items-center rounded-xl bg-white shadow-md p-6">
                <button className={`${!isPlaceWithdrawal ? "hover:text-gray-400" : ""} font-bold text-lg md:text-xl`} onClick={handleWithdrawal}>Place Withdrawal</button>
                {isPlaceWithdrawal && 
                    <form className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            name=""
                            placeholder="Enter Amount"
                            className="border-2 rounded-lg my-4 p-2"
                        />
                        <button className="text-orange-100 hover:text-orange-200 bg-orange-500 py-2 px-4 rounded-xl" type="submit">Withdraw</button>
                    </form>
                }
            </div>      
        </div>
    )
}