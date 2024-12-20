import React from 'react';
import { MealCard } from './MealCard';
import type { Meal } from '../../types';

const SAMPLE_MEALS: Meal[] = [
  {
    id: '1',
    chefId: '1',
    title: 'Couscous Royal Fait Maison',
    description: 'Un délicieux couscous traditionnel avec légumes frais et viandes variées',
    price: 10,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Semoule', 'Légumes', 'Agneau', 'Poulet', 'Merguez'],
    allergens: ['Gluten'],
    category: 'Plat principal',
    preparationTime: 45,
    availablePortions: 8,
    distance: 1.2
  },
  {
    id: '2',
    chefId: '2',
    title: 'Lasagnes Végétariennes',
    description: 'Lasagnes aux légumes de saison et fromage italien',
    price: 9,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Pâtes', 'Légumes', 'Fromage', 'Sauce tomate'],
    allergens: ['Gluten', 'Lactose'],
    category: 'Végétarien',
    preparationTime: 30,
    availablePortions: 6,
    distance: 0.8
  }
];

const SAMPLE_CHEFS = {
  '1': {
    id: '1',
    name: 'Marie Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviewCount: 124,
    isVerified: true
  },
  '2': {
    id: '2',
    name: 'Thomas Martin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 4.6,
    reviewCount: 89,
    isVerified: true
  }
};

  export function MealGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border border-gray-200 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_MEALS.map((meal) => (
          <MealCard 
            key={meal.id} 
            meal={meal} 
            chef={SAMPLE_CHEFS[meal.chefId as keyof typeof SAMPLE_CHEFS]}
          />
        ))}
      </div>
    </div>
  );
}