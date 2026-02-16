export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
  popular: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export enum SectionId {
  HOME = 'home',
  MENU = 'menu',
  LOCATION = 'location',
  CONTACT = 'contact'
}