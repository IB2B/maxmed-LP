import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { Details } from "@/components/site/details";
import { HowItWorks } from "@/components/site/how-it-works";
import { ItalyNetwork } from "@/components/site/italy-network";
import { Faq } from "@/components/site/faq";
import { Demo } from "@/components/site/demo";
import { Doctors } from "@/components/site/doctors";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Details />
        <HowItWorks />
        <ItalyNetwork />
        <Faq />
        <Demo />
        <Doctors />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
