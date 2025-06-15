import PageContainer from '@/components/ui/PageContainer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Feather } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <PageContainer>
      <div className="text-center mb-12 md:mb-16">
        <Feather className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">About Ethereal Threads</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          We believe in the power of elegant design and quality craftsmanship to inspire confidence and express individuality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <div>
          <h2 className="text-3xl font-semibold font-headline text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded with a passion for timeless fashion, Ethereal Threads started as a dream to create a space where style meets substance. We envisioned a collection that transcends fleeting trends, offering pieces that are both contemporary and enduring. Our journey began with a small team of designers and artisans dedicated to bringing this vision to life.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, Ethereal Threads is a curated destination for discerning individuals who appreciate meticulous attention to detail, high-quality materials, and designs that tell a story. We are committed to ethical sourcing and sustainable practices, ensuring that our creations are not only beautiful but also kind to the planet.
          </p>
        </div>
        <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://placehold.co/800x600.png" 
            alt="Ethereal Threads team or workshop" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="fashion workshop team" 
          />
        </div>
      </div>

      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold font-headline text-center text-foreground mb-8 md:mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Target className="mx-auto h-10 w-10 text-accent mb-3" />
              <CardTitle className="font-headline text-xl">Quality Craftsmanship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Every piece is crafted with precision and care, using the finest materials to ensure lasting beauty and durability.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Feather className="mx-auto h-10 w-10 text-accent mb-3" />
              <CardTitle className="font-headline text-xl">Timeless Elegance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We design classic, versatile pieces that remain stylish season after season, transcending fleeting trends.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="mx-auto h-10 w-10 text-accent mb-3" />
              <CardTitle className="font-headline text-xl">Customer Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our priority. We strive to provide an exceptional shopping experience and attentive service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold font-headline text-center text-foreground mb-8">Join Our Journey</h2>
        <p className="text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
          We invite you to explore our collections and become a part of the Ethereal Threads family. Discover pieces that resonate with your personal style and celebrate the art of dressing well.
        </p>
      </div>
    </PageContainer>
  );
}
