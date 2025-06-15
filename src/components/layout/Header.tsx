"use client";

import Link from 'next/link';
import { Menu, ShoppingCart, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Logo from '@/components/icons/Logo';
import { useTheme } from "next-themes";
import React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-foreground/70 hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Link href="/cart" aria-label="Open shopping cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-primary-foreground bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2">
                0 {/* Placeholder for cart item count */}
              </span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" aria-label="User account">
            <User className="h-5 w-5" />
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col space-y-4 pt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                       <Link href={item.href} className="text-lg text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-muted">
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
