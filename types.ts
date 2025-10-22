
export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: string;
  imageUrl: string;
}

export interface Specialist {
  id: number;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: string;
  code: string;
  expiryDate: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  service: Service;
  specialist: Specialist;
  date: string;
  time: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface Loyalty {
    points: number;
    tier: 'Bronze' | 'Silver' | 'Gold';
    rewards: {
        id: number;
        title: string;
        description: string;
    }[];
}

export interface User {
  id: number;
  name: string;
  email: string;
}
