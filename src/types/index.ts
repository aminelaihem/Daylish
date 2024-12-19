// User related types
export interface UserBase {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: Location;
}

export interface Chef extends UserBase {
  role: 'chef';
  bio: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  specialties: string[];
}

export interface Consumer extends UserBase {
  role: 'consumer';
  favorites: string[];
}

export type User = Chef | Consumer;

// Location types
export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  postalCode: string;
}

// Meal related types
export interface Meal {
  id: string;
  chefId: string;
  title: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  allergens: string[];
  category: string;
  preparationTime: number;
  availablePortions: number;
  distance?: number;
}

// Order related types
export interface Order {
  id: string;
  mealId: string;
  consumerId: string;
  chefId: string;
  status: OrderStatus;
  createdAt: string;
  pickupTime: string;
  price: number;
  rating?: Rating;
}

export type OrderStatus = 'pending' | 'confirmed' | 'ready' | 'completed' | 'cancelled';

// Rating related types
export interface Rating {
  id: string;
  orderId: string;
  consumerId: string;
  chefId: string;
  mealId: string;
  score: number;
  comment: string;
  createdAt: string;
}