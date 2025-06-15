import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '@/components/icons/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Elegant fashion for the modern individual. Discover timeless pieces and curated collections.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop All</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay updated with our latest collections and offers.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/60 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ethereal Threads. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <span>&bull;</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
