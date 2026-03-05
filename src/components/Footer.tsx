import { Globe, Mail, Phone, MapPin, Building2, Map } from 'lucide-react';

const contactInfo = [
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
    <footer className="bg-background border-t border-border py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Orange International" className="h-20 w-auto drop-shadow-sm" />
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            An IATA Accredited agency committed to delivering premium travel and logistics solutions across the globe. Professional, reliable, and available 24/7.
          </p>
          <div className="flex gap-4 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-orange-500 hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Locations Column - Highlighted */}
        <div className="col-span-1 md:col-span-4 flex flex-col">
          <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm flex items-center gap-2">
            <Map className="w-5 h-5 text-orange-500" />
            Our Locations
          </h4>

          <div className="space-y-4">
            {/* Headquarters Highlight */}
            <div className="group relative p-5 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent hover:border-orange-500/50 hover:from-orange-500/10 transition-all overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Building2 className="w-12 h-12 text-orange-500" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <h5 className="font-bold text-lg text-foreground">Mannarkad</h5>
                </div>
                <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2 mt-1">
                  Headquarters
                </div>
              </div>
            </div>

            {/* Branch Locations */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">Kochi</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">Kannur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Column */}
        <div className="col-span-1 md:col-span-3 lg:pl-8">
          <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-sm">
            Contact Us
          </h4>
          <ul className="space-y-5 text-sm">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted group-hover:bg-orange-500/10 transition-colors shrink-0">
                  <info.icon className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-muted-foreground leading-snug">{info.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-muted-foreground tracking-wide">
        <p>© {new Date().getFullYear()} Orange International. All Rights Reserved.</p>
        <div className="flex gap-8">
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
