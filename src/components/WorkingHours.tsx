import { Clock, Phone, AlertCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WorkingHours = () => {
  const handleCall = () => {
    window.location.href = "tel:0780689585";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27780689585", "_blank");
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    // Monday (1) to Thursday (4), Saturday (6) and Sunday (0), 8 AM to 6 PM
    return (day >= 1 && day <= 4 || day === 6 || day === 0) && hour >= 8 && hour < 18;
  };

  const schedule = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Monday" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Tuesday" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Wednesday" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Thursday" },
    { day: "Friday", hours: "Closed", isToday: getCurrentDay() === "Friday" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Saturday" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM", isToday: getCurrentDay() === "Sunday" },
  ];

  return (
    <section className="py-16 card-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 fade-in-up">
            Working Hours & Availability
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            We're here when you need us most. Check our hours and contact us for urgent repairs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Working Hours Schedule */}
          <div className="bg-white rounded-lg shadow-soft p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              Weekly Schedule
            </h3>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg transition-smooth ${
                    item.isToday 
                      ? 'bg-primary-light/20 border border-primary/30' 
                      : 'bg-secondary/10 hover:bg-secondary/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {item.isToday && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                    <span className={`font-medium ${item.isToday ? 'text-primary' : 'text-foreground'}`}>
                      {item.day}
                    </span>
                    {item.isToday && (
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                  </div>
                  <span className={`font-semibold ${
                    item.hours === 'Closed' ? 'text-muted-foreground' : 'text-foreground'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status & Contact */}
          <div className="space-y-6">
            {/* Current Status */}
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                Current Status
              </h3>
              <div className={`p-4 rounded-lg border ${
                isBusinessHours() 
                  ? 'bg-success/10 border-success/30' 
                  : 'bg-warning/10 border-warning/30'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    isBusinessHours() ? 'bg-success animate-pulse' : 'bg-warning'
                  }`} />
                  <div>
                    <p className={`font-semibold ${
                      isBusinessHours() ? 'text-success-foreground' : 'text-warning-foreground'
                    }`}>
                      {isBusinessHours() ? 'We\'re Open!' : 'Currently Closed'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isBusinessHours() 
                        ? 'Call now for immediate assistance' 
                        : 'Leave a message and we\'ll get back to you first thing'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-primary mr-2" />
                Emergency Service
              </h3>
              <div className="p-4 rounded-lg bg-primary-light/10 border border-primary/20 mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-primary">Emergency repairs available!</strong> 
                  For urgent appliance failures (like fridges that could spoil food), 
                  we provide after-hours emergency service.
                </p>
                <p className="text-xs text-muted-foreground">
                  Additional emergency service fees may apply for after-hours calls.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={handleCall}
                  className="bg-primary hover:bg-primary-hover text-white w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 078 068 9585
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp: 24/7 Messages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;