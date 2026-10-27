import Hero from "../_components/sections/Hero";
import TrustBar from "../_components/sections/FeaturesBar";
import Features from "../_components/sections/Features";
import QrOrdering from "../_components/sections/QrOrdering";
import AppShowcase from "../_components/sections/AppShowcase";
import Testimonials from "../_components/sections/Testimonials";
import Pricing from "../_components/sections/Pricing";
import Faq from "../_components/sections/Faq";



export default function Home() {
  return (
    <main>
     <Hero />
     <TrustBar />
     <Features />
     <QrOrdering />
     <AppShowcase />
     <Testimonials />
     <Pricing />
     <Faq />
    </main>
  );
}