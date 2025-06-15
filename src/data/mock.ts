import type { Product, Category, Testimonial, FAQItem } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Lavender Dress',
    description: 'A beautiful flowing dress perfect for summer evenings. Made with organic cotton.',
    price: 129.99,
    category: 'Dresses',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'lavender dress',
    rating: 4.5,
    reviewCount: 120,
    availability: true,
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    relatedProductIds: ['2', '3'],
    brand: 'Ethereal Collection',
    stock: 50,
    tags: ['summer', 'elegant', 'organic'],
    features: ['Organic Cotton', 'Breathable Fabric', 'Hand-stitched details']
  },
  {
    id: '2',
    name: 'Silk Violet Blouse',
    description: 'Luxurious silk blouse with a modern cut. Versatile for office or casual wear.',
    price: 89.50,
    category: 'Tops',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'silk blouse',
    rating: 4.8,
    reviewCount: 95,
    availability: true,
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    relatedProductIds: ['1', '4'],
    brand: 'Ethereal Collection',
    stock: 30,
    tags: ['silk', 'luxury', 'versatile']
  },
  {
    id: '3',
    name: 'Cashmere Dream Scarf',
    description: 'Ultra-soft cashmere scarf in a pale violet hue. Perfect for adding a touch of elegance.',
    price: 150.00,
    category: 'Accessories',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'cashmere scarf',
    rating: 4.9,
    reviewCount: 210,
    availability: true,
    images: ['https://placehold.co/800x1200.png'],
    relatedProductIds: ['1', '5'],
    brand: 'Luxe Knits',
    stock: 25,
    tags: ['cashmere', 'soft', 'winter']
  },
  {
    id: '4',
    name: 'Classic Linen Trousers',
    description: 'Comfortable and stylish linen trousers for a relaxed yet chic look.',
    price: 75.00,
    category: 'Bottoms',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'linen trousers',
    rating: 4.3,
    reviewCount: 70,
    availability: false,
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    relatedProductIds: ['2', '6'],
    brand: 'Ethereal Basics',
    stock: 0,
    tags: ['linen', 'comfort', 'classic']
  },
  {
    id: '5',
    name: 'Enchanted Evening Gown',
    description: 'A breathtaking gown for special occasions, adorned with subtle embroidery.',
    price: 349.99,
    category: 'Dresses',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'evening gown',
    rating: 5.0,
    reviewCount: 30,
    availability: true,
    images: ['https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png', 'https://placehold.co/800x1200.png'],
    brand: 'Ethereal Couture',
    stock: 10,
    tags: ['formal', 'embroidery', 'special occasion']
  },
  {
    id: '6',
    name: 'Minimalist White Tee',
    description: 'A high-quality basic white t-shirt, perfect for layering or standalone wear.',
    price: 35.00,
    category: 'Tops',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'white t-shirt',
    rating: 4.6,
    reviewCount: 150,
    availability: true,
    images: ['https://placehold.co/800x1200.png'],
    brand: 'Ethereal Basics',
    stock: 100,
    tags: ['basic', 'cotton', 'minimalist']
  },
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Dresses', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'dresses fashion', slug: 'dresses' },
  { id: '2', name: 'Tops', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'tops fashion', slug: 'tops' },
  { id: '3', name: 'Bottoms', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'bottoms fashion', slug: 'bottoms' },
  { id: '4', name: 'Accessories', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'accessories fashion', slug: 'accessories' },
  { id: '5', name: 'Outerwear', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'outerwear fashion', slug: 'outerwear' },
  { id: '6', name: 'Shoes', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'shoes fashion', slug: 'shoes' },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie L.',
    role: 'Fashion Blogger',
    comment: "Ethereal Threads has become my go-to for unique, high-quality pieces. The designs are stunning and the customer service is exceptional!",
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait'
  },
  {
    id: '2',
    name: 'David K.',
    role: 'Satisfied Customer',
    comment: "I purchased a gift for my wife and she absolutely loved it. The quality and craftsmanship are evident. Highly recommend!",
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait'
  },
  {
    id: '3',
    name: 'Chloe M.',
    role: 'Stylist',
    comment: "The collections at Ethereal Threads are always on-trend yet timeless. Perfect for clients who appreciate elegance and quality.",
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman fashion'
  },
];

export const mockFaqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is your shipping policy?',
    answer: 'We offer free standard shipping on all orders over $100. Expedited shipping options are available at checkout. Standard shipping usually takes 3-5 business days.',
  },
  {
    id: '2',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase for a full refund or exchange, provided the items are in their original condition with tags attached. Please visit our returns page for more details.',
  },
  {
    id: '3',
    question: 'How do I track my order?',
    answer: 'Once your order has shipped, you will receive an email with a tracking number. You can use this number on the carrier\'s website to track your package.',
  },
  {
    id: '4',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries worldwide. International shipping rates and times vary by destination. Duties and taxes may apply upon delivery.',
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.',
  },
];
