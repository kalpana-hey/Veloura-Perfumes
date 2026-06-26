export enum ScentCategory {
  Floral = 'Floral',
  Fresh = 'Fresh',
  Woody = 'Woody',
  Oriental = 'Oriental',
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Perfume {
  id: string;
  name: string;
  category: ScentCategory;
  description: string;
  fragranceNotes: FragranceNotes;
  longevity: string;
  suitableFor: string;
  image: string;
  basePrice: number;
  rating: number;
  reviewsCount: number;
  volumeOptions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  bullets?: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    description: string;
    category: ScentCategory;
  }[];
}

export interface CartItem {
  perfume: Perfume;
  selectedVolume: string; // e.g. "50ml", "100ml"
  price: number;
  quantity: number;
}
