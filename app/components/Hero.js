import { plus_jakarta_sans } from '../fonts'
import Image from 'next/image'

export default function Hero(){
    return (
        <main className="bg-gradient-to-br from-orange-700 to-amber-500 relative">
            <div className="hidden md:block absolute z-0 top-0 rounded-br-6xl opacity-5 bottom-96 md:bottom-80 left-0 right-3/4 bg-gray-100"></div>
            <div className="hidden md:block absolute z-1 top-96 md:top-80 rounded-tr-6xl opacity-5 bottom-0 left-0 right-2/3 bg-gray-100"></div>
            <div className="hidden md:block absolute z-2 top-44 rounded-bl-6xl opacity-5 bottom-32 left-3/4 right-0 bg-gray-100"></div>

            <div className="relative z-3 px-8 lg:px-20 pt-12 md:pt-20 pb-28 md:pb-44 lg:pb-56 flex flex-col md:flex-row lg:justify-between items-center lg:space-x-2">
                <div className="lg:w-2/3 md:mr-4 text-white flex flex-col">
                    <div className="tracking-normal md:tracking-wide font-bold leading-tight md:leading-tight lg:leading-snug text-2xl md:text-4xl lg:text-6xl">
                        <h1 className="capitalize ">Preserving your finances for a better future</h1>
                    </div>
                    <div className={`${plus_jakarta_sans.className} mt-2 mb-4 md:mt-4 md:mb-8 lg:mt-8 lg:mb-14`}>
                     <p className="normal-case font-normal text-sm md:text-base lg:text-base">Invest and multiply your earning in the best way possible 
                        we offer the best and only the best and the one thing we do is 
                        let you create your own world of imagination and the plenty things we
                        can do together in the span of two months</p>
                    </div>
                    <div className="bg-gray-500 px-6 py-2 md:px-10 md:py-4 lg:px-12 lg:py-6 self-start rounded-3xl text-sm md:text-base lg:text-base font-semibold">Get Started</div>
                </div> 
                
                    <Image
                    src={"/images/investor-placeholder.png"}
                    width={440}
                    height={600}
                    className="lg:w-1/2 mt-8"
                    alt="Placeholder image"
                    />  
                
            </div>

            <div className="absolute -bottom-1 left-0 right-0">
                <svg
                    className="relative block w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill="#ffff"
                    d="M0,250 C850,180 580,180 1440,250 L1440,320 L0,320 Z"
                    />
                </svg>
            </div>
        </main>
    )
}