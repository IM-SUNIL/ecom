import PageContainer from '@/components/ui/PageContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mockFaqItems } from '@/data/mock';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <PageContainer>
      <div className="text-center mb-12 md:mb-16">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, returns, and more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {mockFaqItems.map((item, index) => (
            <AccordionItem key={item.id} value={`item-${index + 1}`} className="border rounded-lg shadow-md bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold font-headline hover:no-underline hover:bg-muted/50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 md:mt-16 text-center">
        <h2 className="text-2xl font-semibold font-headline text-foreground mb-4">Can&apos;t find your answer?</h2>
        <p className="text-muted-foreground mb-6">
          If you can&apos;t find the information you&apos;re looking for, please don&apos;t hesitate to <a href="/contact" className="text-primary hover:underline">contact us</a>.
        </p>
      </div>
    </PageContainer>
  );
}
