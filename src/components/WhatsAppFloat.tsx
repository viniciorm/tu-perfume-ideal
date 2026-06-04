import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  message?: string;
}

export function WhatsAppFloat({ message = "Hola, necesito asesoría para elegir un perfume." }: WhatsAppFloatProps) {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/56988084009?text=${encodedMessage}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
