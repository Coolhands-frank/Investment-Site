import WeChoseUs from "../../components/WeChoseUs"
import OurHistory from "../../components/OurHistory"
import WhoWeAre from "../../components/AboutComponents/WhoWEAre"

export default function About() {
    return (
        <main className="text-gray-800">
            <WhoWeAre />
            <WeChoseUs />
            <OurHistory />
        </main>
    )
}