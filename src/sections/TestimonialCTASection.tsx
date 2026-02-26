import { useState, useEffect, useCallback } from 'react';
import { Star, Globe, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactFormDialog } from '@/components/ContactFormDialog';

const reviews = [
  {
    name: 'Shuhratbek Ruziev',
    text: 'We booked our flight tickets and hotel through Orange International. The booking process was fast and easy. They offered the best price and excellent customer support. I will definitely use their service again for my future trips.',
    stars: 5,
    timeAgo: '2 weeks ago',
  },
  {
    name: 'Muhammed Ajishal',
    text: "I highly recommend Orange International Tours and Travels to anyone planning a trip. Their team is professional, friendly, and reliable. They made our journey smooth and memorable. I will definitely book with them again.",
    stars: 5,
    timeAgo: '2 weeks ago',
  },
  {
    name: 'Afeefa Afi',
    text: "Very professional and friendly service. I'm really happy and satisfied. Highly recommended! Excellent service with a personal touch. They explained everything clearly and treated with great care. Thank you for the wonderful experience 👍🏼👍🏼",
    stars: 5,
    timeAgo: '5 months ago',
  },
  {
    name: 'Akshara Prasad U',
    text: 'This tours and travels are so good and trustable. The staffs are so approachable and coordinate our all processes nicely. They are so convenient and consider the customer values. I give 5 star to their firm.',
    stars: 5,
    timeAgo: '5 months ago',
  },
];

export function TestimonialCTASection() {
  const [formOpen, setFormOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, 'left');
  }, [current, goTo]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[current];

  return (
    <>
      {/* Reviews Carousel Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest">Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <div
            className={`bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 ${isAnimating
                ? direction === 'right'
                  ? 'opacity-0 translate-x-8'
                  : 'opacity-0 -translate-x-8'
                : 'opacity-100 translate-x-0'
              }`}
          >
            <Quote className="w-10 h-10 text-orange-500/20 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic mb-8">
              "{review.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {review.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.timeAgo} · Google Review</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                aria-label={`Go to review ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current
                    ? 'bg-orange-500 w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 pb-24">
        <div className="relative rounded-[2.5rem] bg-slate-900 dark:bg-orange-600 overflow-hidden p-12 md:p-20">
          {/* Background Globe Icon */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Globe className="w-[30rem] h-[30rem] absolute -right-32 -top-32 text-white" />
          </div>

          <div className="relative z-10 text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Ready to move with the best in the industry?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join over 10,000 satisfied clients who trust Orange International for their global
              travel and logistics needs.
            </p>
            <Button
              onClick={() => setFormOpen(true)}
              className="bg-orange-500 dark:bg-slate-900 px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform h-auto"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
}
