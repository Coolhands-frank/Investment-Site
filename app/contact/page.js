import Image from "next/image"
import ContactDetails from "../../components/ContactComponents/ContactDetails"

export default function ContactUs() {
    return (
        <main className="text-gray-800">
            <div className="relative h-24 md:h-52 lg:h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/contactUs.png')" }}>
            </div>
            <ContactDetails />
        </main>
    )
}