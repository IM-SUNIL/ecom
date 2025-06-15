import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import Testimonials from '@/components/home/Testimonials';
import NewsletterForm from '@/components/home/NewsletterForm';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <Testimonials />
      <NewsletterForm />
    </>
  );
}
