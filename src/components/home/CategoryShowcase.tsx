import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';
import { mockCategories } from '@/data/mock';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CategoryShowcase = () => {
  const showcasedCategories = mockCategories.slice(0, 4); // Show first 4 categories

  return (
    <section className="py-12 md:py-20 bg-secondary/50 dark:bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-8 md:mb-12">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {showcasedCategories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`} className="group block">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={category.dataAiHint || 'fashion category'}
                  />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-4 bg-card">
                  <h3 className="text-xl font-semibold font-headline text-center text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                   <div className="mt-2 text-center">
                      <span className="text-sm text-primary group-hover:underline">
                        Shop Now <ArrowRight className="inline h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
