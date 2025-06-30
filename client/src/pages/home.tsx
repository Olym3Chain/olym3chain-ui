import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Vision from "@/components/sections/vision";
import Consensus from "@/components/sections/consensus";
import UseCases from "@/components/sections/use-cases";
import Roadmap from "@/components/sections/roadmap";
import Team from "@/components/sections/team";
import Architecture from "@/components/sections/architecture";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-olym3-gray-dark">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Consensus />
        <UseCases />
        <Roadmap />
        <Team />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
