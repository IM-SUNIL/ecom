import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types';
import { mockProducts } from '@/data/mock'; // Using mock data
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4); // Display first 4 products as featured

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Featured Products</h2>
          <Button variant="outline" asChild>
            <Link href="/products">
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
