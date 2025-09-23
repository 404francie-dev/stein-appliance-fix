import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/27780689585", "_blank");
  };

  return (
    <div className="whatsapp-float">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-strong hover:shadow-medium transition-bounce flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;