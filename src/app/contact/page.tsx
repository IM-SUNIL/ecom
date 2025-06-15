"use client";

import PageContainer from '@/components/ui/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUsPage() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log('Contact Form Data:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    reset(); // Reset form fields
  };

  return (
    <PageContainer>
      <div className="text-center mb-12 md:mb-16">
        <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          We&apos;d love to hear from you. Whether you have a question about our products, an order, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...register('name')} placeholder="Your Name" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...register('email')} placeholder="you@example.com" />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" {...register('subject')} placeholder="Regarding..." />
                {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register('message')} placeholder="Your message here..." rows={5} />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-xl font-headline">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Address</h3>
                  <p className="text-muted-foreground">123 Lavender Lane, Fashion City, FL 54321, USA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:support@etherealthreads.com" className="text-primary hover:underline">support@etherealthreads.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-headline">Find Us On Map</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Google Maps Placeholder</p>
                    {/* Placeholder for Google Maps iframe or Vis.GL component */}
                    {/* <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." 
                        width="100%" 
                        height="100%" 
                        style={{ border:0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md"
                    ></iframe> */}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
