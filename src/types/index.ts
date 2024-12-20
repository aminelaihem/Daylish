// Types utilisateur
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'consumer' | 'chef';
}

// Type pour les plats
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

// Type pour les chefs
export interface Chef {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
}

// Type pour les commandes
export interface Order {
  id: string;
  mealId: string;
  userId: string;
  chefId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  createdAt: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  postalCode: string;
}