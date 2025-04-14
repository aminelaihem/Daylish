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