import { plus_jakarta_sans } from "../../app/fonts"
import Image from "next/image"

export default function ServiceDetails() {
    return (
        <main className="px-8 md:px-20 py-12 md:py-16 lg:py-28 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start">
                <div className="lg:w-1/2 lg:mr-24 text-justify lg:text-end" style={{maxWidth: "672px"}}>
                    <h1 className="lg:mt-20 capitalize text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-end">Give us your money</h1>
                    <p className={`${plus_jakarta_sans.className} my-4 lg:my-10 font-normal text-sm md:text-base`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                        Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, 
                        li pronunciation e li plu commun vocabules. 
                    </p>
                    <p className={`${plus_jakarta_sans.className} lg:mb-10 font-normal text-sm md:text-base`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                        Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, 
                        li pronunciation e li plu commun vocabules.
                    </p>
                </div>
                <div className="relative lg:w-1/2 my-8 lg:my-0 rounded-3xl lg:shadow-tr1" style={{minWidth:"350px", maxWidth: "500px", height: "620px"}}>
                    <Image
                        src="/images/cryptoPot.png"
                        layout="fill" 
                        objectFit="cover"
                        className="rounded-3xl"
                        alt=""
                    />
                </div>
            </div>

            <div className="lg:-mt-12 flex flex-col lg:flex-row items-center lg:justify-center lg:items-end">
                <div className="relative mt-8 lg:mt-0 lg:w-1/2 rounded-3xl order-last lg:order-first lg:shadow-tr2" style={{minWidth:"350px", maxWidth: "462px", height: "600px"}}>
                    <Image
                        src="/images/money.png"
                        layout="fill" 
                        objectFit="cover"
                        className="rounded-3xl"
                        alt=""
                    />
                </div>
                <div className="lg:w-1/2 lg:ml-24 text-justify lg:text-start" style={{maxWidth: "672px"}}>
                    <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start">... See it multiplied</h1>
                    <p className={`${plus_jakarta_sans.className} my-4 lg:my-10 font-normal text-sm md:text-base`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                        Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, 
                        li pronunciation e li plu commun vocabules. 
                    </p>
                    <p className={`${plus_jakarta_sans.className} lg:mb-10 font-normal text-sm md:text-base`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                        Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, 
                        li pronunciation e li plu commun vocabules.
                    </p>
                </div>
            </div>

            <div className="mt-12 lg:mt-24 font-semibold bg-orange-500 text-white px-12 py-2 md:px-16 lg:px-20 lg:py-4 text-sm md:text-base">
                <a href="#" className="hover:text-orange-900"> Invest Now </a>
            </div>
        </main>
    )
}