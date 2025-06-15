import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider'; // To be created

export const metadata: Metadata = {
  title: 'Ethereal Threads',
  description: 'Modern e-commerce for elegant fashion.',
  keywords: ['ecommerce', 'fashion', 'clothing', 'online store', 'ethereal threads'],
  openGraph: {
    title: 'Ethereal Threads',
    description: 'Discover unique and elegant fashion pieces at Ethereal Threads.',
    type: 'website',
    locale: 'en_US',
    // url: 'https://yourdomain.com', // Replace with your actual domain
    // siteName: 'Ethereal Threads',
    // images: [ // Add a default image for social sharing
    //   {
    //     url: 'https://yourdomain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Ethereal Threads',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
