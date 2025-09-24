import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import fridgeRepairImage from "@/assets/fridge-repair.jpg";
import washingMachineRepairImage from "@/assets/washing-machine-repair.jpg";
import stoveOvenRepairImage from "@/assets/stove-oven-repair.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Services = () => {
  const services = [
    {
      id: "fridge-repairs",
      title: "Fridge & Refrigerator Repairs",
      image: fridgeRepairImage,
      shortDescription: "Expert repairs for all refrigerator brands including temperature issues, ice makers, and cooling problems.",
      fullDescription: "Our experienced technicians specialize in comprehensive refrigerator and freezer repairs for all major brands. We understand how crucial your fridge is to your daily life, which is why we offer same-day service for most repair needs.",
      services: [
        "Temperature control and thermostat repairs",
        "Ice maker repairs and replacements",
        "Door seal and gasket replacements",
        "Compressor repairs and diagnostics",
        "Defrost system repairs",
        "Water dispenser and filter issues",
        "Interior lighting repairs",
        "Shelf and drawer replacements"
      ],
      brands: ["Samsung", "LG", "Defy", "Bosch", "Whirlpool", "Hisense", "AEG", "Kelvinator"]
    },
    {
      id: "washing-machine-repairs",
      title: "Washing Machine Repairs",
      image: washingMachineRepairImage,
      shortDescription: "Professional washing machine servicing for all major brands. We fix drainage, spin cycles, and motor issues.",
      fullDescription: "From front-loading to top-loading washing machines, our skilled technicians can diagnose and repair all types of washing machine problems. We carry genuine parts and offer warranty on all repairs.",
      services: [
        "Drainage problems and pump repairs",
        "Spin cycle and motor repairs",
        "Water inlet valve replacements",
        "Control panel and electronic repairs",
        "Belt and pulley replacements",
        "Door lock mechanism repairs",
        "Leak detection and sealing",
        "Noise reduction and balancing"
      ],
      brands: ["Samsung", "LG", "Defy", "Bosch", "Whirlpool", "Hisense", "AEG", "Speed Queen"]
    },
    {
      id: "stove-oven-repairs",
      title: "Stove & Oven Repairs",
      image: stoveOvenRepairImage,
      shortDescription: "Complete stove and oven repair services including gas and electric units, thermostats, and heating elements.",
      fullDescription: "Whether you have a gas or electric stove, built-in oven, or standalone unit, our certified technicians can handle all types of cooking appliance repairs with expertise and safety as our top priority.",
      services: [
        "Heating element replacements",
        "Thermostat and temperature sensor repairs",
        "Gas line repairs and safety checks",
        "Control panel and timer repairs",
        "Oven door and hinge repairs",
        "Ignition system repairs",
        "Burner and grate replacements",
        "Safety valve and regulator repairs"
      ],
      brands: ["Samsung", "LG", "Defy", "Bosch", "Whirlpool", "Smeg", "AEG", "Electrolux"]
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:0780689585";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27780689585", "_blank");
  };

  const handleContact = (serviceTitle: string) => {
    const message = `Hi, I need help with ${serviceTitle.toLowerCase()}. Can you assist me?`;
    window.open(`https://wa.me/27780689585?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Appliance Repair Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We specialize in repairing fridges, washing machines, and stove ovens across Gauteng. 
            Same-day service available with warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleCall} size="lg" className="bg-primary hover:bg-primary-hover text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call 078 068 9585
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-medium"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Our Services Include:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.services.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Brands We Service:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand, brandIndex) => (
                        <span key={brandIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleContact(service.title)}
                    className="bg-primary hover:bg-primary-hover text-white"
                    size="lg"
                  >
                    Get Quote for {service.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair Today?</h2>
          <p className="text-lg mb-8 opacity-90">
            Don't let broken appliances disrupt your life. Call us now for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCall}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              078 068 9585
            </Button>
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;