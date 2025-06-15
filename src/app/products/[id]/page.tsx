"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import PageContainer from '@/components/ui/PageContainer';
import ProductCard from '@/components/products/ProductCard';
import { mockProducts } from '@/data/mock';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const { toast } = useToast();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const foundProduct = mockProducts.find(p => p.id === id);
      setProduct(foundProduct || null);

      if (foundProduct?.relatedProductIds) {
        const related = mockProducts.filter(p => foundProduct.relatedProductIds?.includes(p.id));
        setRelatedProducts(related);
      } else if (foundProduct) {
        // Fallback: show other products from the same category
        const related = mockProducts.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0,3);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="text-muted-foreground">The product you are looking for does not exist or has been removed.</p>
          <Button asChild className="mt-4">
            <a href="/products">Back to Products</a>
          </Button>
        </div>
      </PageContainer>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= (product.stock || 10) ) { // Assuming max 10 if stock not defined
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: `${product.name} added to cart!`,
      description: `Quantity: ${quantity}`,
    });
    // Add to cart logic here
  };
  
  const productImages = product.images && product.images.length > 0 ? product.images : [product.imageUrl];

  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);


  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
            <Card className="overflow-hidden shadow-lg">
                <div className="relative aspect-[1/1] w-full">
                <Image
                    src={productImages[selectedImageIndex]}
                    alt={`${product.name} - image ${selectedImageIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 ease-in-out"
                    data-ai-hint={product.dataAiHint || 'fashion item detail'}
                />
                 {productImages.length > 1 && (
                    <>
                    <Button variant="ghost" size="icon" onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 text-foreground">
                        <ChevronLeft />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 text-foreground">
                        <ChevronRight />
                    </Button>
                    </>
                 )}
                </div>
            </Card>
          {productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square relative rounded-md overflow-hidden border-2 ${selectedImageIndex === index ? 'border-primary' : 'border-transparent'} hover:border-primary/50 transition-all`}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint={product.dataAiHint || 'fashion thumbnail'} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">{product.name}</h1>
          <div className="flex items-center space-x-2">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-3xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          
          <Separator />

          <div>
            <h2 className="text-xl font-semibold font-headline mb-2">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {product.features && product.features.length > 0 && (
            <div>
                <h3 className="text-lg font-semibold font-headline mb-2">Features:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {product.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                </ul>
            </div>
          )}

          <p className={`text-sm font-medium ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
            {product.availability ? `In Stock (${product.stock} available)` : 'Out of Stock'}
          </p>

          <Separator />
          
          <div className="flex items-center space-x-4">
            <Label htmlFor="quantity" className="text-sm font-medium">Quantity:</Label>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>-</Button>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="w-16 h-10 text-center border-0 focus-visible:ring-0"
                readOnly 
              />
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity >= (product.stock || 10)}>+</Button>
            </div>
          </div>

          <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart} disabled={!product.availability}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-6 md:mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  );
}
