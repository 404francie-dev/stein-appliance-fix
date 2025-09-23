import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Shield, MapPin, CreditCard, HelpCircle, Zap } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      question: "How fast can you repair my appliance?",
      answer: "Most appliance repairs are completed within 24-48 hours. For urgent repairs, we offer same-day service depending on availability and the nature of the problem. Emergency repairs can often be completed within 2-4 hours."
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      question: "Do you provide same-day service?",
      answer: "Yes! We offer same-day service for urgent repairs, subject to availability. Contact us early in the day for the best chance of same-day service. We prioritize emergency repairs like fridges and freezers that could cause food spoilage."
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      question: "What areas in Gauteng do you cover?",
      answer: "We service all major areas in Gauteng including Benoni, Boksburg, Kempton Park, Edenvale, Johannesburg, Pretoria, Alberton, Midrand, Sandton, Germiston, Springs, and surrounding areas. Contact us to confirm service in your specific location."
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      question: "Do you offer a warranty on repairs?",
      answer: "Absolutely! We provide a comprehensive warranty on all our repairs. Parts come with a manufacturer's warranty, and our workmanship is guaranteed for 3-6 months depending on the type of repair. We stand behind our quality work."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-primary" />,
      question: "What payment options are available?",
      answer: "We accept cash, EFT, credit cards, and debit cards. Payment is due upon completion of the repair. For larger repairs, we can discuss payment arrangements. We provide detailed invoices for insurance claims if needed."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-primary" />,
      question: "Can I get a free quote?",
      answer: "Yes! We provide free quotes for all repairs. Our technician will assess your appliance and provide a detailed quote before starting any work. There's no obligation, and we'll explain exactly what needs to be done and why."
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      question: "Are your technicians qualified and insured?",
      answer: "All our technicians are fully qualified, experienced, and insured. They undergo regular training to stay updated with the latest appliance technologies. We're a registered business with comprehensive insurance coverage for your peace of mind."
    }
  ];

  return (
    <section id="faq" className="py-16 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Got questions? We've got answers! Here are the most common questions our customers ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-smooth border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary-light/20 transition-gentle">
                  <div className="flex items-center space-x-3 text-left">
                    {faq.icon}
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;