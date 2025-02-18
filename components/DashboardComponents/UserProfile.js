import Image from 'next/image'
import Link from 'next/link'
import { useUser } from "@/context/UserContext";

export default function Profile() {
    const { user } = useUser()

    return (
        <div className="rounded-xl bg-amber-300 my-4 px-3 lg:px-6 py-4 flex flex-col justify-center items-center">
            <div className="w-20 h-20 md:w-36 md:h-36 border rounded-full">

            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="my-3 flex flex-col items-center justify-center">
                    <h2 className="font-bold text-base md:text-lg lg:text-xl">{user ? user.name : ""}</h2>
                    <p className="text-xs md:text-sm font-normal text-black opacity-60">{user ? user.email : ""}</p>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black opacity-60">${user ? user.total_investment : ""}</h2>
            </div>
        </div>
        
    )
}