import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import WorkingHours from "@/components/WorkingHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandCarousel />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <ServiceAreas />
      <WorkingHours />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;