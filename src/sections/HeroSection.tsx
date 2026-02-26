import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe, Verified, Mail, ArrowRight } from 'lucide-react';

const serviceTypes = [
  'International Flight Booking',
  'Visa Assistance',
  'Global Cargo Logistics',
  'Corporate Travel Mgmt',
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone_number: formData.phone || 'Not provided',
          service_type: formData.serviceType,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({ fullName: '', email: '', phone: '', serviceType: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send the inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Professional Image */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/plane.png"
            alt="Airplane"
            className="w-full h-full object-cover object-right transition-transform duration-700 hover:scale-110"
          />

          {/* Top Right Floating Dynamic Element */}
          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 transition-transform duration-500 hover:-translate-y-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground m-0">
              Live Support 24/7
            </p>
          </div>

          {/* Bottom Left Badge */}
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur p-4 rounded-xl shadow-xl border border-border flex items-center gap-4 transition-transform duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
              <Verified className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Official Accreditation
              </p>
              <p className="text-lg font-black text-foreground">IATA Certified Agency</p>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form & Content */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Global Travel Logistics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-foreground">
              Professional Excellence in <span className="text-orange-500">Global Movement.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Seamless 24/7 support for international travel and high-priority cargo needs. Trusted by thousands for over 15 years.
            </p>
          </div>

          {/* Inquiry Form Card */}
          <div className="bg-card dark:bg-card p-8 rounded-2xl shadow-xl border border-border">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              Request a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-muted-foreground uppercase">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-muted-foreground uppercase">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold text-muted-foreground uppercase">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold text-muted-foreground uppercase">
                  Service Type
                </Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                >
                  <SelectTrigger className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 h-auto disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
