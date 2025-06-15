"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
        toast({
            title: "Error",
            description: "Please enter your email address.",
            variant: "destructive",
        });
        return;
    }
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary/80 to-accent/80 dark:from-primary/50 dark:to-accent/50">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="mx-auto h-12 w-12 text-primary-foreground mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Subscribe to our newsletter for the latest collections, exclusive offers, and style inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-background/80 placeholder:text-muted-foreground focus:bg-background text-foreground"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
