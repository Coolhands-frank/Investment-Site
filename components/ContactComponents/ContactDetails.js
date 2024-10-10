import Image from "next/image";
import { plus_jakarta_sans } from "../../app/fonts";

const ContactDetails = () => {

    return (
        <main className="py-16 px-10 md:p-20 lg:p-32 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className="lg:mr-10 lg:w-1/2" style={{maxWidth: "550px"}}>
                <div className="lg:mt-4 text-center lg:text-start">
                    <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold">Connect with us</h1>
                    <p className={`${plus_jakarta_sans.className} text-sm md:text-base font-normal mt-4 mb-6`}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                        Por scientie, musica, sport etc, litot Europa usa li sam vocabular. .
                    </p>
                </div>
                <div className="text-sm md:text-base font-medium space-y-2 mb-8">
                    <div className="flex items-center">
                        <Image
                            src={"/images/Location.png"}
                            width={34}
                            height={34}
                            className="pr-2"
                            alt="Location icon"
                        />  
                        <p>101 Olubolade Street, Value County Estate, Ogidan, Sangotedo-Lekki LGA, Lagos, Nigeria.</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={"/images/ringerVolume.png"}
                            width={34}
                            height={34}
                            alt="Phone icon"
                            className="pr-2"
                        />
                        <p>+2349033476640</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={"/images/Mail.png"}
                            width={34}
                            height={34}
                            alt="Phone icon"
                            className="pr-2"
                        />
                        <p>+2349033476640</p>
                    </div>
                </div>
            </div>
            
            <div className="p-10 md:px-14 md:py-12 flex flex-col text-sm md:text-base shadow-lg border-2 rounded-xl lg:w-1/2" style={{maxWidth: "567px"}}>
                <form className="flex flex-col">
                    <div className="mb-8 flex">
                        <input type="text" className="rounded-lg border w-1/2 mr-2 p-2" placeholder="First Name" />
                        <input type="text" className="rounded-lg border w-1/2 p-2" placeholder="Last Name" />
                    </div>
                    <input type="email" className="mb-8 rounded-lg border p-2" placeholder="Email" />
                    <input type="tel" className="mb-8 rounded-lg border p-2" placeholder="Phone Number" />
                    <textarea className="h-32 border p-2 mb-14" placeholder="Your Message"></textarea>
                    <button className="bg-orange-500 py-2 text-white rounded-2xl">Send Message</button>
                </form>
            </div>
        </main>
    )
}

export default ContactDetails;