import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreas = () => {
  const areas = [
   
    { name: "Midrand", distance: "15 km", priority: true },
    { name: "Centurion", distance: "18 km", priority: true },
    { name: "Pretoria", distance: "20 km", priority: true },
    { name: "Fourways", distance: "22 km", priority: true },
    { name: "Sandton", distance: "40 km", priority: true },
    { name: "Boksburg", distance: "12 km", priority: true },
    {name: "Hartbeespoort" , distance: "70 km" , priority: true},
    { name: "Randburg", distance: "50 km", priority: true },
    { name: "Vaal", distance: "50 km", priority: true },
    { name: "Midvaal", distance: "62 km", priority: true},
    { name: "Bronkhorstspruit", distance: "50 km", priority: false},
    { name: "Kempton Park", distance: "15 km", priority: false },
    { name: "Edenvale", distance: "18 km", priority: false },
    { name: "Germiston", distance: "20 km", priority: false },
    { name: "Springs", distance: "22 km", priority: false },
    { name: "Alberton", distance: "25 km", priority: false },
    { name: "Johannesburg", distance: "30 km", priority: false },
    { name: "Benoni", distance: "0 km", priority: false},
    { name: "Roodepoot", distance: "50 km", priority: false},
  ];

  const handleCall = () => {
    window.location.href = "tel:0837255171";
  };

  return (
    <section id="service-areas" className="py-16 service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 fade-in-up">
            Service Areas Across Gauteng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            We provide professional appliance repair services throughout Gauteng. 
            Priority areas receive same-day service when available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service Areas Grid */}
          <div className="bg-white rounded-lg shadow-soft p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              Areas We Cover
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border transition-smooth hover:shadow-medium ${
                    area.priority 
                      ? 'border-primary/30 bg-primary-light/10 hover:bg-primary-light/20' 
                      : 'border-muted hover:border-primary/30 hover:bg-accent-warm/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${area.priority ? 'bg-primary' : 'bg-muted-foreground'}`} />
                      <span className={`font-medium ${area.priority ? 'text-primary' : 'text-foreground'}`}>
                        {area.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{area.distance}</span>
                  </div>
                  {area.priority && (
                    <div className="mt-1">
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                        Priority Area
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                Service Information
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary-light/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Priority Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Same-day service available • Faster response times • No travel surcharge
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent-warm/20 border border-accent-warm/40">
                  <h4 className="font-semibold text-accent-foreground mb-2">Extended Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Next-day service • Small travel fee may apply • Full warranty coverage
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Not Sure If We Cover Your Area?
              </h3>
              <p className="text-muted-foreground mb-4">
                Don't see your location? We're expanding our service areas regularly. 
                Give us a call and we'll let you know if we can help you.
              </p>
              <Button 
                onClick={handleCall}
                className="bg-primary hover:bg-primary-hover text-white w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call to Check Your Area
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;