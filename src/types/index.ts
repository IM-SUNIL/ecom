export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number; // e.g., 4.5
  reviewCount: number;
  availability: boolean;
  images?: string[]; // For product detail gallery
  relatedProductIds?: string[];
  brand?: string;
  sku?: string;
  stock?: number;
  tags?: string[];
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  orderDate: string; // ISO string
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
