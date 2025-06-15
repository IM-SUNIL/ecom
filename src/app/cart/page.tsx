"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageContainer from '@/components/ui/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { mockProducts } from '@/data/mock';
import type { CartItem } from '@/types';
import { X, Plus, Minus, Tag, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Simulate a cart state
const initialCartItems: CartItem[] = [
  { ...mockProducts[0], quantity: 1 },
  { ...mockProducts[1], quantity: 2 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== item.id));
    toast({ title: "Item removed from cart." });
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const discount = 0; // Placeholder for promo code logic
  const shippingCost = subtotal > 50 || subtotal === 0 ? 0 : 10; // Free shipping over $50
  const total = subtotal - discount + shippingCost;

  const handleApplyPromoCode = () => {
    if (promoCode.toUpperCase() === 'ETHEREAL10') {
      toast({ title: "Promo code applied!", description: "10% discount added (simulated)." });
      // Actual discount logic would go here
    } else if (promoCode) {
      toast({ title: "Invalid promo code", variant: "destructive" });
    } else {
      toast({title: "Please enter a promo code", variant: "destructive"})
    }
  };


  if (cartItems.length === 0) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold font-headline mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Button asChild size="lg">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Shopping Cart</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map(item => (
            <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4 shadow-md overflow-hidden">
              <div className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || 'cart item'} />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <Link href={`/products/${item.id}`} className="text-lg font-semibold hover:text-primary transition-colors">{item.name}</Link>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <p className="text-md font-semibold text-primary mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2 my-2 sm:my-0">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 h-8 text-center px-1"
                  min="1"
                />
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-lg font-semibold w-24 text-center sm:text-right">${(item.price * item.quantity).toFixed(2)}</p>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2 pt-2">
                <Label htmlFor="promoCode" className="font-semibold">Promo Code</Label>
                <div className="flex space-x-2">
                  <Input 
                    id="promoCode" 
                    placeholder="Enter promo code" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)} 
                  />
                  <Button variant="outline" onClick={handleApplyPromoCode}><Tag className="mr-2 h-4 w-4" /> Apply</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

// Helper to define ShoppingCart icon for cart page when empty
const ShoppingCart = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
  );
