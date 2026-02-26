import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactFormDialog } from '@/components/ContactFormDialog';

const navLinks: { label: string; href: string; external?: boolean }[] = [];

export function Header() {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="https://orangeinternational.in/" aria-label="Orange International Home">
            <img src="/logo.png" alt="Orange International" className="h-24 sm:h-28 w-auto -my-8 relative z-50 drop-shadow-md hover:scale-105 transition-transform" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm font-semibold hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            onClick={() => setContactFormOpen(true)}
            className="flex min-w-[100px] sm:min-w-[120px] items-center justify-center rounded-full h-9 sm:h-11 px-4 sm:px-6 bg-orange-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all"
          >
            Contact Us
          </Button>
        </div>
      </div>


      {/* Contact Form Modal */}
      <ContactFormDialog open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </header>
  );
}
