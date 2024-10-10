import { plus_jakarta_sans } from '../app/fonts'
export default function OurTeam() {

    return (
        <main className="relative py-28 px-10 md:px-20 ">
            <div className="absolute z-0 bg-gray-100 lg:left-2/3 left-1/2 right-0 inset-y-20 rounded-l-6xl overflow-hidden">

            </div>
            <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:space-x-24">
                <div className="mb-16 lg:mb-0 lg:w-1/2 text-center lg:text-start">
                    <div className="text-5xl md:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight capitalize">
                        meet with our executive team
                    </div>
                    <div className={`${plus_jakarta_sans.className} mt-8 text-sm md:text-base font-normal`}>
                        Li Europan lingues es membres del sam familie. Lor separat existentie 
                        es un myth. Por scientie, musica, sport etc, litot Europa usa li sam 
                        vocabular.
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 lg:w-1/2">
                    <div className="flex flex-col p-4 drop-shadow-2xl shadow-2xl rounded-2xl max-w-72">
                        <div className="w-28 self-center h-20 md:w-64 lg:w-full md:h-36 bg-green-600 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/images/founder.png')" }}></div>
                        <div className="self-center mt-6">
                            <h3 className="font-bold text-base md:text-xl">Elendu Lilian</h3>
                            <p className={`${plus_jakarta_sans.className} mt-2 text-center text-sm md:text-base font-light`}>Founder</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 drop-shadow-2xl shadow-2xl -mt-4 mb-4 rounded-2xl max-w-72">
                        <div className="w-28 self-center h-20 md:w-64 lg:w-full md:h-36 bg-green-600 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/images/contactImg.jpg')" }}></div>
                        <div className="self-center mt-6">
                            <h3 className="font-bold text-base md:text-xl">Crypto Lendu</h3>
                            <p className={`${plus_jakarta_sans.className} mt-2 text-center text-sm md:text-base font-light`}>CEO</p>
                        </div>  
                    </div>

                    <div className="flex flex-col p-4 drop-shadow-2xl shadow-2xl rounded-2xl max-w-72">
                        <div className="w-28 self-center h-20 md:w-64 lg:w-full md:h-36 bg-green-600 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/images/dev1.jpg')" }}></div>
                        <div className="self-center mt-6">
                            <h3 className="font-bold text-base md:text-xl">Culhands Frank</h3>
                            <p className={`${plus_jakarta_sans.className} mt-2 text-center text-sm md:text-base font-light`}>Developer</p>
                        </div> 
                    </div>

                    <div className="flex flex-col p-4 drop-shadow-2xl shadow-2xl -mt-4 mb-4 rounded-2xl max-w-72">
                        <div className="w-28 self-center h-20 md:w-64 lg:w-full md:h-36 bg-green-600 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/images/eillish.png')" }}></div>
                        <div className="self-center mt-6">
                            <h1 className="font-bold text-base md:text-xl">Dinma Elendu</h1>
                            <p className={`${plus_jakarta_sans.className} mt-2 text-center text-sm md:text-base font-light`}>Consultant</p>
                        </div> 
                    </div>

                </div>
            </div>
        </main>
    )
}