"use client";

import { useState } from 'react';
import Link from 'next/link';
import PageContainer from '@/components/ui/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { ShippingAddress } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CreditCard, Landmark, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const shippingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  addressLine1: z.string().min(5, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  country: z.string().min(2, "Country is required"),
  phoneNumber: z.string().min(10, "Phone number is required").optional(),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

// Simulated order summary data (in a real app, this would come from cart state)
const orderSummary = {
  items: [
    { id: '1', name: 'Elegant Lavender Dress', price: 129.99, quantity: 1, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'dress' },
    { id: '2', name: 'Silk Violet Blouse', price: 89.50, quantity: 2, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'blouse' },
  ],
  subtotal: 309.49,
  shipping: 0,
  total: 309.49,
};


export default function CheckoutPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: { country: "United States" }
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const onSubmit: SubmitHandler<ShippingFormData> = (data) => {
    console.log('Shipping Details:', data);
    console.log('Payment Method:', paymentMethod);
    // Process order logic here
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. Your order is being processed.",
    });
    // Potentially redirect to an order confirmation page or clear cart
  };

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Shipping & Payment Details */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Shipping Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" {...register('fullName')} placeholder="Jane Doe" />
                {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="addressLine1">Address Line 1</Label>
                <Input id="addressLine1" {...register('addressLine1')} placeholder="123 Main St" />
                {errors.addressLine1 && <p className="text-sm text-destructive mt-1">{errors.addressLine1.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                <Input id="addressLine2" {...register('addressLine2')} placeholder="Apartment, suite, etc." />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register('city')} placeholder="Anytown" />
                {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
              </div>
              <div>
                <Label htmlFor="state">State / Province</Label>
                <Input id="state" {...register('state')} placeholder="CA" />
                {errors.state && <p className="text-sm text-destructive mt-1">{errors.state.message}</p>}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                <Input id="zipCode" {...register('zipCode')} placeholder="90210" />
                {errors.zipCode && <p className="text-sm text-destructive mt-1">{errors.zipCode.message}</p>}
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" {...register('country')} placeholder="United States" />
                {errors.country && <p className="text-sm text-destructive mt-1">{errors.country.message}</p>}
              </div>
               <div className="md:col-span-2">
                <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                <Input id="phoneNumber" type="tel" {...register('phoneNumber')} placeholder="(555) 123-4567" />
                {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message}</p>}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <Label htmlFor="paymentCard" className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'border-border hover:border-muted-foreground/50'}`}>
                  <RadioGroupItem value="card" id="paymentCard" />
                  <CreditCard className="h-6 w-6 text-primary" />
                  <span>Credit/Debit Card</span>
                </Label>
                <Label htmlFor="paymentCod" className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'border-border hover:border-muted-foreground/50'}`}>
                  <RadioGroupItem value="cod" id="paymentCod" />
                   <Truck className="h-6 w-6 text-primary" />
                  <span>Cash on Delivery (COD)</span>
                </Label>
                <Label htmlFor="paymentUpi" className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-primary ring-2 ring-primary bg-primary/5' : 'border-border hover:border-muted-foreground/50'}`}>
                  <RadioGroupItem value="upi" id="paymentUpi" />
                  <Landmark className="h-6 w-6 text-primary" />
                  <span>UPI / Net Banking</span>
                </Label>
              </RadioGroup>
              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4 p-4 border rounded-md bg-muted/20">
                  <p className="text-sm text-muted-foreground">Secure payment processing by Stripe (simulation).</p>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="•••• •••• •••• ••••" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="•••" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg sticky top-24"> {/* Sticky for desktop */}
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{orderSummary.items.length} items</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    {orderSummary.items.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={item.imageUrl} alt={item.name} data-ai-hint={item.dataAiHint || 'item'} className="w-10 h-10 rounded object-cover"/>
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{orderSummary.shipping === 0 ? 'Free' : `$${orderSummary.shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
               <Button type="submit" size="lg" className="w-full">
                Place Order
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By placing your order, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms & Conditions</Link>.
              </p>
            </CardFooter>
          </Card>
        </div>
      </form>
    </PageContainer>
  );
}
