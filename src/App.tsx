import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { HeroSection } from '@/sections/HeroSection';
import { TrustStatsSection } from '@/sections/TrustStatsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TestimonialCTASection } from '@/sections/TestimonialCTASection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustStatsSection />
        <ServicesSection />
        <TestimonialCTASection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
