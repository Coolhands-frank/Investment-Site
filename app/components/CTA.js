import { plus_jakarta_sans } from "../fonts"

export default function Cta(){
    
    return (
        <main className="relative" style={{height: "600px"}}>
            <div className="my-36 md:my-24 mx-8 md:m-24 py-4 px-6 text-white flex flex-col items-center justify-center absolute inset-0 bg-gradient-to-br from-orange-700 to-amber-500">
                <div className="capitalize text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                    <h1>why not invest today</h1>
                </div>
                <div className="my-6 md:my-10 text-sm md:text-base font-normal text-center" style={{maxWidth:"844px"}}>
                    <p className={`${plus_jakarta_sans.className}`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                </div>
                <div className="">
                    <div className="flex">
                        <input className="max-w-72 p-2 md:p-4 text-sm md:text-base rounded-l-2xl" placeholder="Enter Your Email" />
                        <button className="py-2 md:py-4 px-4 md:px-8 bg-orange-600 rounded-r-2xl text-orange-100 text-sm md:text-base font-medium">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center h-full overflow-hidden">
                <div className="flex justify-center items-center rounded-full bg-white shadow-2xl" style={{height: "1440px", width: "1440px"}}>
                    <div className="flex justify-center items-center rounded-full bg-white shadow-2xl" style={{height: "1194px", width: "1194px"}}>
                        <div className="flex justify-center items-center rounded-full bg-white shadow-2xl" style={{height: "954px", width: "954px"}}>
                            <div className="rounded-full bg-white shadow-2xl" style={{height: "656px", width: "656px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}