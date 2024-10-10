import ServiceDetails from "../../components/ServicesComponents/ServiceDetails"

export default function Services() {
    return (
        <main className="text-gray-800">
            <div className="relative h-36 md:h-64 lg:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/investmentHeading.png')" }}>
            </div>
            <ServiceDetails />
        </main>
    )
}