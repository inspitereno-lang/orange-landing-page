import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+918086573727'; // Replace with actual number
const WHATSAPP_NUMBER = '918086573727'; // Replace with actual number (no + or spaces)

export function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
            >
                <MessageCircle className="w-7 h-7" />
                {/* Tooltip */}
                <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                    WhatsApp
                </span>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            </a>

            {/* Phone Call Button */}
            <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="Call us"
                className="group relative w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
            >
                <Phone className="w-7 h-7" />
                {/* Tooltip */}
                <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                    Call Us
                </span>
            </a>
        </div>
    );
}
