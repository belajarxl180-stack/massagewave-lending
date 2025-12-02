import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { InAction } from "@/components/landing/InAction";
import { Testimonials } from "@/components/landing/Testimonials";
import { Comparison } from "@/components/landing/Comparison";
import { Faq } from "@/components/landing/Faq";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsappButton } from "@/components/landing/WhatsappButton";

export const CHECKOUT_URL = "/checkout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <InAction />
        <Testimonials />
        <Comparison />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
