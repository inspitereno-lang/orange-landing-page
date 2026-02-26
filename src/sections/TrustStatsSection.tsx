import { Headset, ShieldCheck, History, Globe } from 'lucide-react';

const stats = [
  {
    icon: Headset,
    value: '24/7',
    label: 'Always Active Support',
  },
  {
    icon: ShieldCheck,
    value: 'IATA',
    label: 'Accredited Agency',
  },
  {
    icon: History,
    value: '15+ Yrs',
    label: 'Proven Experience',
  },
  {
    icon: Globe,
    value: '180+',
    label: 'Countries Served',
  },
];

export function TrustStatsSection() {
  return (
    <section className="bg-muted/50 py-12 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <stat.icon className="w-10 h-10 text-orange-500" />
              <div className="text-2xl font-black text-foreground uppercase tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
