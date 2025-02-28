"use client"
import { useUser } from "@/context/UserContext"
import { useState, useEffect } from "react"
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from "@heroicons/react/24/solid";

export default function Settings() {
    const { user } = useUser()
    const [registrationDate, setRegistrationDate] = useState(null)

    useEffect(() => {
      if (user?.created_at) {
        const formattedDate = new Date(user.created_at).toLocaleDateString("en-GB");
        setRegistrationDate(formattedDate);
      }
    }, [user]); // Runs only when `user` changes
   
    return (
            
              <div className="flex items-center justify-center md:h-full py-4 bg-gray-100">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">

                  <div className="flex flex-col items-center">
                    <div className="relative border border-amber-300 rounded-full">
                      
                        <UserCircleIcon className="h-20 w-20 md:w-36 md:h-36 text-amber-300 object-cover"/>
                        <button className="px-1 bg-gray-100 flex items-center absolute bottom-1 left-1 border border-gray-700 shadow-md rounded-lg">
                          <PencilIcon className="w-4 h-4" />
                          Edit
                        </button>  
                    </div> 
                  </div>

                  {/* Account Info Section */}
                  <div className="border-b pb-2 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <p className="font-medium py-2 w-2/3 md:w-1/3">Account Name</p>
                      <p className="w-1/3 md:w-2/3">{user ? user.name : ""}</p>
                    </div>

                    <div className="flex items-center">
                      <p className="w-2/3 md:w-1/3 font-medium py-2">Registration Date</p>
                      <p className="w-1/3 md:w-2/3">{ registrationDate ? registrationDate : ""}</p>
                    </div>  
                  </div>
          
                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <label className="md:w-1/3 text-gray-700 font-medium ">Full Name</label>
                      <input 
                        type="text" 
                        className="md:w-2/3 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                      />
                    </div>
          
                    <div className="flex flex-col md:flex-row md:items-center">
                      <label className="md:w-1/3 text-gray-700 font-medium">New Password</label>
                      <input 
                        type="password" 
                        className="md:w-2/3 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                      />
                    </div>
          
                    <div className="flex flex-col md:flex-row md:items-center">
                      <label className="md:w-1/3 text-gray-700 font-medium">Retype Password</label>
                      <input 
                        type="password" 
                        className="md:w-2/3 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                      />
                    </div>
          
                    <div className="flex flex-col md:flex-row md:items-center">
                      <label className="md:w-1/3 text-gray-700 font-medium">USDT Address (TRC20)</label>
                      <input 
                        type="text" 
                        className="md:w-2/3 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                      />
                    </div>
          
                    <div className="flex flex-col md:flex-row md:items-center">
                      <label className="md:w-1/3 text-gray-700 font-medium">Email Address</label>
                      <input 
                        type="email" 
                        className="md:w-2/3 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-amber-300"
                      />
                    </div>
                  </div>
          
                  {/* Update Button */}
                  <div className="mt-6 flex justify-center">
                    <button className="bg-amber-300 hover:bg-amber-500 text-white font-medium px-8 py-2 rounded-lg transition">
                      Update
                    </button>
                  </div>
                </div>
              </div>
    )
}