'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import PageContainer from '@/components/ui/PageContainer';
import { mockProducts } from '@/data/mock';
import type { Product } from '@/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';


const uniqueCategories = Array.from(new Set(mockProducts.map(p => p.category)));
const maxPrice = Math.max(...mockProducts.map(p => p.price), 1000); // Ensure a sensible max if no products

export default function ProductListingPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : []);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [showAvailableOnly, setShowAvailableOnly] = useState<boolean>(false);
  
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let products = mockProducts;

    if (searchTerm) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      products = products.filter(p => selectedCategories.includes(p.category));
    }

    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedRating > 0) {
      products = products.filter(p => Math.round(p.rating) >= selectedRating);
    }
    
    if (showAvailableOnly) {
      products = products.filter(p => p.availability);
    }

    switch (sortOption) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Assuming products are somewhat ordered by ID or a date field if available
        products.sort((a, b) => parseInt(b.id) - parseInt(a.id)); 
        break;
    }

    return products;
  }, [searchTerm, sortOption, selectedCategories, priceRange, selectedRating, showAvailableOnly]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSortOption('newest');
    setSelectedCategories([]);
    setPriceRange([0, maxPrice]);
    setSelectedRating(0);
    setShowAvailableOnly(false);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={['category', 'price', 'rating', 'availability']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-lg font-semibold font-headline">Category</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {uniqueCategories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer">{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-semibold font-headline">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4">
            <Slider
              defaultValue={[0, maxPrice]}
              min={0}
              max={maxPrice}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              minStepsBetweenThumbs={1}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-lg font-semibold font-headline">Rating</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {[4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRating === rating}
                  onCheckedChange={() => setSelectedRating(prev => prev === rating ? 0 : rating)}
                />
                <Label htmlFor={`rating-${rating}`} className="font-normal cursor-pointer">{rating} Stars & Up</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="availability">
            <AccordionTrigger className="text-lg font-semibold font-headline">Availability</AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2">
                 <div className="flex items-center space-x-2">
                    <Checkbox
                        id="availability-filter"
                        checked={showAvailableOnly}
                        onCheckedChange={(checked) => setShowAvailableOnly(Boolean(checked))}
                    />
                    <Label htmlFor="availability-filter" className="font-normal cursor-pointer">In Stock Only</Label>
                </div>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button onClick={clearFilters} variant="outline" className="w-full">
        <X className="mr-2 h-4 w-4" /> Clear All Filters
      </Button>
    </div>
  );


  return (
    <PageContainer>
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Our Collection</h1>
        <p className="text-lg text-muted-foreground mt-2">Browse our exquisite selection of fashion pieces.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                <ListFilter className="mr-2 h-4 w-4" /> {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
        </div>
        
        {/* Filters Sidebar */}
        {/* Desktop: always visible. Mobile: toggle with state */}
        <aside className={`md:w-1/4 lg:w-1/5 ${showFilters ? 'block' : 'hidden'} md:block pr-4`}>
          <FilterPanel />
        </aside>

        {/* Products Grid & Controls */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-auto sm:max-w-xs">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">No Products Found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </main>
      </div>
    </PageContainer>
  );
}
