import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-background to-secondary dark:from-background dark:to-sidebar-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-8">
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-foreground mb-6 leading-tight">
            Discover Your Signature Style
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Explore our curated collection of timeless fashion pieces, designed to inspire confidence and elegance.
          </p>
          <div className="flex space-x-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/products">
                Shop Collection <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-auto md:aspect-[4/3] animate-slideInUp">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Hero banner fashion model"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
            priority
            data-ai-hint="fashion model elegant"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-none rounded-lg"></div>
        </div>
      </div>
       {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id=" Αναpatttern" patternUnits="userSpaceOnUse" width="60" height="60" className="text-primary">
            <path d="M50 0L60 10L10 60L0 50zM0 10L10 0L60 50L50 60z" strokeWidth="1" stroke="currentColor" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
