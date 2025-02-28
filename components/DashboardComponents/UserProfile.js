import { useUser } from "@/context/UserContext";
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Profile() {
    const { user } = useUser()

    return (
        <div className="flex flex-col items-center">
            <div className="w-44 md:w-52 lg:56 rounded-xl bg-amber-300 my-4 px-3 lg:px-6 py-4 flex flex-col justify-center items-center">

                {/* Profile Picture Container */}
                <Link href="/dashboard/settings">
                    <div className="relative group w-28 h-28">

                        {/* Circular Profile Image */}
                        <img
                          src={user?.profile_image ? user.profile_image : "/images/profile.png"}
                          alt="Profile"
                          className="w-28 h-28 rounded-full object-cover"
                        />

                        {/* Hover Text */}
                        <p className="absolute w-full top-full mt-1 left-1/2 transform -translate-x-1/2 px-1 text-sm text-white text-center bg-black bg-opacity-80 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                          Change Avater
                        </p>
                    </div>
                </Link>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="my-3 flex flex-col items-center justify-center">
                        <h2 className="font-bold text-base md:text-lg lg:text-xl">{user ? user.name : ""}</h2>
                        <p className="text-xs md:text-sm font-normal text-black opacity-60">{user ? user.email : ""}</p>
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black opacity-60">${user ? user.total_investment : ""}</h2>
                </div>
            </div>
            <hr className="border w-11/12 mb-3"/>
        </div>
        
    )
}