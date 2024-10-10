import Hero from "../components/Hero"
import Benefits from "../components/Benefits";
import WeChoseUs from "../components/WeChoseUs";
import OurHistory from "../components/OurHistory";
import OurTeam from "../components/OurTeam";
import Testimonial from "../components/Testimonial";
import Cta from "../components/CTA";

export default function Home() {
  return (
    <main className="box-border text-gray-800">
      <Hero />
      <Benefits />
      <WeChoseUs />
      <OurHistory />
      <OurTeam />
      <Testimonial />
      <Cta />
    </main>
  );
}
