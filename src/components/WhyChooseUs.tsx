import { Clock, Users, DollarSign, Shield } from "lucide-react";
import satisfiedCustomerImage from "@/assets/satisfied-customer.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "We understand appliance emergencies. That's why we offer same-day service to get your appliances running quickly."
    },
    {
      icon: Users,
      title: "Experienced Technicians",
      description: "Our certified technicians have years of experience repairing all major appliance brands and models."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing. No hidden fees - just honest, fair pricing for quality repairs."
    },
    {
      icon: Shield,
      title: "Warranty on All Repairs",
      description: "We stand behind our work with comprehensive warranties on all repairs and replacement parts."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose Stein Appliance Repairs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best appliance repair service in Gauteng with unmatched quality and reliability.
          </p>
        </div>

        {/* Customer Satisfaction Image */}
        <div className="mb-16">
          <img 
            src={satisfiedCustomerImage} 
            alt="Satisfied customer with our repair technician"
            className="w-full max-w-2xl mx-auto h-[300px] object-cover rounded-lg shadow-medium"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;