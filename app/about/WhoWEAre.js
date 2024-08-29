import Image from "next/image"
import { plus_jakarta_sans } from "../fonts"

export default function WhoWeAre() {
    return (
        <main className="px-8 md:px-20 lg:px-24 py-14 md:py-20 lg:py-28 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <div className="lg:mr-4">
                <div className="relative w-96 h-80 lg:w-80 lg:h-72 mb-4">
                    <Image
                        src="/images/whoWeAre.png"
                        layout="fill" 
                        objectFit="cover"
                    />
                </div>
                <div className="mb-4 lg:mb-0 capitalize font-bold text-center text-4xl md:text-5xl lg:text-6xl">Who we are</div>
            </div>
            <div className={`text-sm md:text-base font-normal text-justify lg:w-2/3 ${plus_jakarta_sans.className}`}>
                <p>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
                    Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. 
                </p>
                <p className="pt-2">
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
                    Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
                <p className="pt-2">
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
                    Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                    Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
                </p>
            </div>
        </main>
    )
}