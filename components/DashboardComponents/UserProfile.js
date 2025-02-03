import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {

    return (
        <div className="rounded-xl bg-amber-300 my-3 px-6 py-3 lg:px-8 lg:py-4 flex flex-col justify-center items-center">
            <div className="w-36 h-36 border rounded-full">

            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg lg:text-xl mt-2">ALEX WONG</h2>
                <p className="text-xs font-normal text-black opacity-60">Business Analyst</p>
                <h2 className="text-2xl lg:text-3xl font-bold my-2 text-black opacity-60">$10,000</h2>
            </div>
        </div>
        
    )
}