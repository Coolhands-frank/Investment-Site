import { plus_jakarta_sans } from '../fonts'
import Image from 'next/image'

export default function Testimonial() {
    return(
        <main className="py-24 px-4 bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-lg max-h-44 flex flex-col items-center text-center justify-center">
                <h1 className="mb-8 font-bold text-5xl md:text-6xl capitalize">What they say</h1>
                <p classNaem={`${plus_jakarta_sans.className} text-sm md:text-base font-normal`}>
                    Li Europan lingues es membres del sam familie. Lor separat 
                    existentie es un myth. Por scientie, musica, sport etc, 
                    litot Europa usa li sam vocabular.
                </p>
            </div>

            <div className="relative mt-12 max-2-4xl">
                <div className="bg-white absolute flex justify-center lg:justify-start rounded-2xl shadow-rd items-center p-4 lg:p-6 top-0 right-0 bottom-2/3 left-1/2 md:right-60 lg:right-72 md:bottom-80 lg:bottom-96 md:left-80">
                    <div className="min-w-14 md:min-w-16 h-14 md:h-16 mr-2 lg:mr-4 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/images/krane.png')" }}></div>
                    <div>
                        <h3 className="text-lg lg:text-xl font-bold md:text-base">Strings Krane</h3>
                        <p className="text-base font-semibold text-gray-400">Our Customers</p>
                    </div>
                </div>
                <div className="bg-white absolute flex items-center justify-center lg:justify-start rounded-2xl p-4 lg:p-6 shadow-rd top-1/3 right-1/2 bottom-1/3 left-0 md:top-24 lg:28 md:right-2/3 md:bottom-60 lg:bottom-72 md:left-4">
                    <div className="min-w-14 md:min-w-16 h-14 md:h-16 mr-2 lg:mr-4 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/images/topology.png')" }}></div>
                    <div>
                        <h3 className="text-lg lg:text-xl font-bold">Forex Godfry</h3>
                        <p className="text-base font-semibold text-gray-400">Our Customers</p>
                    </div>
                </div>
                <div className="bg-white absolute flex justify-center lg:justify-start items-center p-4 lg:p-6 rounded-2xl shadow-rd top-2/3 right-0 bottom-0 left-1/2 md:top-64 md:bottom-16 md:left-96 overflow-hiden" /* style={{ bottom: "63px", right: "-100px", left: "592px", top: "255px" }} */ >
                    <div className="min-w-14 md:min-w-16 h-14 md:h-16 mr-2 lg:mr-4 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/images/ninja.png')" }}></div>
                    <div>
                        <h3 className="text-lg lg:text-xl font-bold">Ninja Gadzama</h3>
                        <p className="text-base font-semibold text-gray-400 mb-2">Our Customers</p>
                        <p className="text-sm font-normal text-gray-400 hidden md:block">&quot;Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.&quot;</p>
                    </div>
                </div>
                <Image
                    src={"/images/world-bg.png"}
                    width={876}
                    height={478}
                    objectFit="cover"
                    alt=""
                />
            </div>
        </main>
    )
}