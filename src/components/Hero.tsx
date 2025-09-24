import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-technician.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:0780689585";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27837255171", "_blank");
  };

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fast & Reliable Appliance Repairs
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            We repair fridges, washing machines, and stove ovens at affordable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleCall}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Today</span>
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>083 725 5171</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>082 624 1823</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;