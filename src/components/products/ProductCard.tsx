import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0">
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={800}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              data-ai-hint={product.dataAiHint || 'fashion product'}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`} className="block">
          <CardTitle className="text-lg font-headline leading-tight mb-1 group-hover:text-primary transition-colors">{product.name}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-center mb-2">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant={product.availability ? "default" : "outline"} disabled={!product.availability}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.availability ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
