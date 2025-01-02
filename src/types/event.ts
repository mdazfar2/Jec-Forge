export type EventCategory = 'All' | 'Sports' | 'Tech' | 'Non-Tech' | 'Cultural';

export interface Event {
  id: number;
  title: string;
  category: Exclude<EventCategory, 'All'>;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  registrationLink?: string;
}