import Hero from "@/app/_components/sections/Hero";
import Product from "@/app/_components/sections/Product";
import Journey from "@/app/_components/sections/Journey";
import DigitalOrdering from "@/app/_components/sections/DigitalOrdering";
import Dashboard from "@/app/_components/sections/Dashboard";
import Inventory from "@/app/_components/sections/Inventory";
import Operations from "@/app/_components/sections/Operations";
import WhyCafeHub from "@/app/_components/sections/WhyCafeHub";
import CTA from "@/app/_components/sections/CTA";
import FAQ from "@/app/_components/sections/FAQ";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Product />
        <Journey />
        <DigitalOrdering />
        <Dashboard />
        <Inventory />
        <Operations />
        <WhyCafeHub />
        <CTA />
        <FAQ />
      </main>
    </>
  );
}
