import { Plane, FileText, Truck, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Seamless IATA certified flight arrangements for any destination globally.',
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Expert guidance through complex visa applications and documentation.',
  },
  {
    icon: Truck,
    title: 'Global Cargo',
    description: 'End-to-end logistics solutions for international freight and cargo.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Dedicated management and cost-effective solutions for business travel.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 md:px-20 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            Our Specialized <span className="text-orange-500">Global Services.</span>
          </h2>
          <p className="text-muted-foreground">
            We offer comprehensive solutions tailored to the unique demands of global mobility and logistics, ensuring every detail is managed with precision.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-card p-8 rounded-2xl border border-border hover:border-orange-500 transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <service.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
