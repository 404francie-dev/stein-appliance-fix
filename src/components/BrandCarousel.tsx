import { useEffect } from "react";
import Samsung from "@/assets/Samsung_Logo.png"
import LG from "@/assets/LG-Logo.webp";
import Defy from "@/assets/defy-Logo.png";
import Bosch from "@/assets/Bosch-Logo.png"
import Whirpool from "@/assets/whirlpool-logo.png"
import Hisense from "@/assets/Hisense-Logo.png"
import AEG from "@/assets/AEG-logo.png"
import Kelvinator from "@/assets/kelvinator-logo.png"
import Smeg from "@/assets/Smeg-Logo.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const BrandCarousel = () => {
  const brands = [
    { name: "Samsung", logo: Samsung },
    { name: "LG", logo:LG },
    { name: "Defy", logo: Defy },
    { name: "Bosch", logo: Bosch },
    { name: "Whirlpool", logo: Whirpool },
    { name: "Hisense", logo: Hisense },
    { name: "AEG", logo: AEG },
    { name: "Kelvinator", logo:Kelvinator },
    { name: "Smeg", logo: Smeg },
  ];

  return (
    <section className="py-16 card-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 fade-in-up">
            Trusted Brands We Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            We repair all major appliance brands with expertise and genuine parts
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="bg-white rounded-lg shadow-soft p-6 h-24 flex items-center justify-center group hover:shadow-medium transition-smooth hover:scale-105">
                  <div className="flex flex-col items-center space-y-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-gentle"
                    />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-gentle">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default BrandCarousel;