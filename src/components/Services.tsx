import { Refrigerator, Waves, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Refrigerator,
      title: "Fridge Repairs",
      description: "Expert repairs for all refrigerator brands including temperature issues, ice makers, and cooling problems.",
      features: ["Temperature control fixes", "Ice maker repairs", "Door seal replacements", "Compressor repairs"]
    },
    {
      icon: Waves,
      title: "Washing Machine Repairs", 
      description: "Professional washing machine servicing for all major brands. We fix drainage, spin cycles, and motor issues.",
      features: ["Drainage problems", "Spin cycle repairs", "Motor replacements", "Control panel fixes"]
    },
    {
      icon: ChefHat,
      title: "Stove & Oven Repairs",
      description: "Complete stove and oven repair services including gas and electric units, thermostats, and heating elements.",
      features: ["Heating element replacement", "Thermostat repairs", "Gas line repairs", "Control panel fixes"]
    }
  ];

  const handleLearnMore = (service: string) => {
    // Scroll to contact section or handle service-specific action
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in repairing all major appliance brands with fast, reliable service and affordable pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card bg-white border-none shadow-soft hover:shadow-medium">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={() => handleLearnMore(service.title)}
                    className="w-full bg-primary hover:bg-primary-hover text-white"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;