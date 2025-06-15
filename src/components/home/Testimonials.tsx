import Image from 'next/image';
import type { Testimonial } from '@/types';
import { mockTestimonials } from '@/data/mock';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {mockTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg flex flex-col items-center text-center p-6 bg-card hover:shadow-xl transition-shadow duration-300">
              <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint || 'person avatar'} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                    {Array(5).fill(0).map((_,i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-muted-foreground italic mb-4">&quot;{testimonial.comment}&quot;</p>
                <h3 className="text-lg font-semibold font-headline text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
