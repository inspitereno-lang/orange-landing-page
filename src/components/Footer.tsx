import { Globe, Mail, Phone, MapPin } from 'lucide-react';


const contactInfo = [
  { icon: MapPin, text: 'Kochi ,Kannur,Mannarkad headquarters' },
  { icon: Phone, text: '+91 80865 73727' },
  { icon: Mail, text: 'orangeinternationalmkd@gmail.com' },
  { icon: Globe, text: 'Monday – Saturday: 9:00 AM – 7:00 PM' },
];

const socialLinks = [
  { icon: Globe, href: '#' },
  { icon: Mail, href: '#' },
  { icon: Phone, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Orange International" className="h-20 w-auto" />
          </div>
          <p className="text-muted-foreground max-w-sm">
            An IATA Accredited agency committed to delivering premium travel and logistics solutions across the globe. Professional, reliable, and available 24/7.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-orange-500 hover:text-white transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>


        {/* Contact Column */}
        <div>
          <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
            Contact Us
          </h4>
          <ul className="space-y-4 text-muted-foreground text-sm">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-3">
                <info.icon className="w-5 h-5 text-orange-500" />
                {info.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
        <p>© 2024 Orange International. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
