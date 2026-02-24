import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
import Categories from "@/components/sections/Categories";
import HowItWorks from "@/components/sections/HowItWorks";
import Applications from "@/components/sections/Applications";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Categories />
        <HowItWorks />
        <Applications />
        <Stats />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
