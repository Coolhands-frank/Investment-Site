import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {

    return (
        <div className="rounded-xl bg-amber-300 my-3 px-6 lg:px-8 py-4 flex flex-col justify-center items-center">
            <div className="w-20 h-20 md:w-36 md:h-36 border rounded-full">

            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="my-4 flex flex-col items-center justify-center">
                 <h2 className="font-bold text-base md:text-lg lg:text-xl">ALEX WONG</h2>
                 <p className="text-xs md:text-sm font-normal text-black opacity-60">Business Analyst</p>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black opacity-60">$10,000</h2>
            </div>
        </div>
        
    )
}