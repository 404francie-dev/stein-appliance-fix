import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCall = () => {
    window.location.href = "tel:0780689585";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27837255171", "_blank");
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-soft hover:shadow-medium transition-smooth">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Stein Appliance Repairs</h1>
              <p className="text-sm text-muted-foreground">Professional Repair Services</p>
              <div className="flex items-center space-x-1 mt-1">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-primary">083 725 5171</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-white shadow-soft hover:shadow-medium transition-smooth bounce-gentle"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">083 725 5171</span>
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary-hover text-white flex items-center space-x-2 shadow-soft hover:shadow-medium transition-smooth"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;