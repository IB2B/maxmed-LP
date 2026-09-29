import { notFound } from "next/navigation";

import { hasLocale } from "@/i18n/config";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { Screens } from "@/components/site/screens";
import { Details } from "@/components/site/details";
import { HowItWorks } from "@/components/site/how-it-works";
import { ItalyNetwork } from "@/components/site/italy-network";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Security } from "@/components/site/security";
import { Demo } from "@/components/site/demo";
import { Doctors } from "@/components/site/doctors";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero lang={lang} />
        <Features lang={lang} />
        <Screens />
        <Details lang={lang} />
        <HowItWorks />
        <ItalyNetwork lang={lang} />
        <Testimonials lang={lang} />
        <Faq />
        <Security lang={lang} />
        <Demo lang={lang} />
        <Doctors lang={lang} />
        <FinalCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
