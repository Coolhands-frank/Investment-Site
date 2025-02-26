"use client";
import { useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export default function Invest() {
//    const { user } = useUser();
    const [selected, setSelected] = useState({})
    const [selectionMessage, setSelectionMessage] = useState("")

    const options = [
        { id: 1, text: "SHORT TERM", amount: "$200", image: "dashboard_wallet.png" },
        { id: 2, text1: "FLEXIBLE", text2: "PLAN", amount: "$5,000", image: `${selected.id === 2 ? "Broker.png" : "Mortgage.png"}` },
        { id: 3, text: "LONG TERM", amount: "$10,000", image: "Money_circulation.png" },
      ];
    
    const handleSelect = (plan) => {
        setSelectionMessage("")
        setSelected(plan);
    };

    const handleSubmit = () => {
        if (selected.id) {
            console.log("Selected:", selected.id );
            alert(`Selected: ${selected.id === 2 ? selected.text1 + " " + selected.text2 : selected.text}`);
        } else {
            setSelectionMessage("Please select a plan");
        }
    }
    
    return (
        <div className="md:h-full flex flex-col text-gray-600 justify-center items-center px-4">
            <div className="mb-12">
                <h2 className="font-bold text-xl lg:text-3xl">OUR OFFERINGS</h2>
                <p className="mt-1 text-base text-center lg:text-xl font-normal">Select a Plan</p>
            </div>
            
            <div className="">

                <div className="flex flex-col md:flex-row gap-4 md:items-end justify-center">
                    
                    {options.map((option, index) => (
                        <div 
                        key={option.id}
                        onClick={() => handleSelect(option)}
                        className={`cursor-pointer hover:bg-amber-300 flex flex-col items-center w-56 md:w-48 lg:w-64 shadow-lg rounded-xl py-8
                            ${selected.id === option.id ? "bg-amber-300" : "bg-white"}
                            `}
                        >
                            <div className="flex flex-col items-center mb-3">
                            <Image
                                src={`/images/${option.image}`}
                                width={53}
                                height={53}
                                alt="database icon"
                                priority
                            />

                            {
                                index === 1 ? <h2 className="font-semibold text-2xl text-center my-2">{ option.text1 }<br />{ option.text2 }</h2> : 
                                <h2 className="font-semibold text-2xl my-2">{ option.text }</h2>
                            }

                            </div>

                            <div className="text-center">  
                                <h2 className="font-bold text-3xl">{ option.amount }</h2>
                            </div>

                            <hr className={`${index === 1 ? "mt-16 mb-8" : "my-8"} border-black w-1/2`}/>

                        </div>
                    ))}

                </div>
                
                <div className="mt-8">
                    {selectionMessage && <p className="text-center text-red-500 my-2">{selectionMessage}</p>}
                    
                    <div className="relative border border-orange-600 rounded-lg shadow-md py-2 w-full overflow-hidden group">
                        {/* Background Fill on Hover */}
                        <div className="absolute inset-0 bg-orange-500 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></div>

                        {/* Content */}
                        <button 
                        onClick={handleSubmit}
                        className="w-full relative z-10 hover:text-orange-100 text-center flex items-center justify-center h-full font-bold text-xl"
                        >
                          INVEST NOW
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}