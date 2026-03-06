import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Categories from "@/components/sections/Categories";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutPreview from "@/components/sections/AboutPreview";
import Applications from "@/components/sections/Applications";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Categories />
        <HowItWorks />
        <AboutPreview />
        <Applications />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
