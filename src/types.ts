export type NavPage =
  | 'home'
  | 'about'
  | 'team'
  | 'services'
  | 'cosmetic'
  | 'invisalign'
  | 'implants'
  | 'emergency'
  | 'new-patients'
  | 'insurance'
  | 'financing'
  | 'blog'
  | 'contact';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  duration?: string;
  recovery?: string;
  image: string;
  iconName: string;
  category: 'general' | 'cosmetic' | 'preventive' | 'restorative' | 'advanced';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  credentials: string[];
  education: string[];
  bio: string;
  image: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
  role?: string;
  location?: string;
}

export interface OfficeImage {
  id: string;
  url: string;
  title: string;
  category: 'treatment' | 'lobby' | 'technology' | 'exterior';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'insurance' | 'treatments' | 'emergency';
}

export interface AppointmentRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  serviceType: string;
  location: 'heights' | 'midtown';
  notes?: string;
  isNewPatient: boolean;
}
