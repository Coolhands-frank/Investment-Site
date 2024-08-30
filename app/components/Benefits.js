import { plus_jakarta_sans } from '../fonts'
import Image from 'next/image'

export default function Benefits(){
    return (
        <main className="m-0">
            <div className="py-16">
                <div className="px-10 lg:px-20 flex flex-col md:flex-row md:justify-between md:items-end md:space-x-4">
                    <div className="mb-4 md:mb-0 text-4xl md:text-5xl lg:text-7xl font-semibold md:w-1/2">
                        <h1 className="capitalize leading-tight">enjoy our excellent services</h1>
                    </div>
                    <div className={`${plus_jakarta_sans.className} text-sm md:text-base tracking-tight md:w-1/2 `}>
                        <p>Li Europan lingues es membres del sam familie. Lor separat 
                            existentie es un myth. Por scientie, musica, sport etc, 
                            litot Europa usa li sam vocabular. Li lingues differe solmen 
                            in li grammatica, li pronunciation e li plu commun vocabules. 
                        </p>
                    </div>
                </div>
                <div className="relative mt-12 py-20 px-10 lg:px-20">
                    <div className="absolute z-0 left-0 top-0 bottom-0 rounded-r-6xl w-96 h-full bg-gray-100 overflow-hidden">
                    </div>
                    <div className="relative z-1 items-center tracking-tight capitalize lg:space-x-8 flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row md:justify-between ">
                        <div className="mb-8 md:mb-0 shadow-2xl bg-white p-14 rounded-2xl flex flex-col space-y-6 text-center items-center lg:text-start lg:items-start max-w-96 lg:w-auto">
                            <Image
                                src={"/images/Wallet.png"}
                                width={70}
                                height={70}
                                alt="wallet icon"
                            />  
                            <h5 className="text-xl md:text-2xl font-semibold">short term </h5>
                            <p className={`text-sm md:text-base ${plus_jakarta_sans.className}`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
                        </div>
                        <div className="mb-8 md:mb-0 shadow-2xl space-y-6 bg-gradient-to-br from-orange-700 to-amber-500 text-white p-14 rounded-2xl flex flex-col items-center text-center max-w-96 lg:w-auto">
                            <Image
                                src={"/images/account_balance_wallet.png"}
                                width={70}
                                height={70}
                                alt="Long term icon"
                            />  
                            <h5 className="text-xl md:text-2xl font-semibold">long term</h5>
                            <p className={`text-sm md:text-base ${plus_jakarta_sans.className}`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
                        </div>
                        <div className="shadow-2xl space-y-6 bg-white p-14 rounded-2xl flex flex-col items-center text-center lg:items-end lg:text-right max-w-96 md:mx-auto lg:mx-0 lg:w-auto md:mt-8 lg:mt-0">
                            <Image
                                src={"/images/Mortgage.png"}
                                width={70}
                                height={70}
                                alt="Mortgage icon"
                            />  
                            <h5 className="text-xl md:text-2xl font-semibold">bank</h5>
                            <p className={`text-sm md:text-base ${plus_jakarta_sans.className}`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}