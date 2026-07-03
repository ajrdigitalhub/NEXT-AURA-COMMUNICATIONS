/** Shared TypeScript interfaces for the application */

/** SEO configuration for each page */
export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  robots?: string;
}

/** Service card data */
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  slug?: string;
  benefits?: string[];
  idealCustomers?: string[];
}

/** Testimonial data */
export interface Testimonial {
  name: string;
  company: string;
  review: string;
  rating: number;
  avatar?: string;
}

/** Stat counter data */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  route: string;
  isExternal?: boolean;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

/** Process step */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

/** Timeline event */
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

/** Instagram reel placeholder */
export interface InstagramReel {
  thumbnailUrl: string;
  reelUrl: string;
  caption: string;
}

/** Contact form data */
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  serviceRequired: string;
  message: string;
}

/** Company value card */
export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}
