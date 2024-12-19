import React from 'react';
import { MealCard } from './MealCard';
import type { Meal } from '../types';

const SAMPLE_MEALS: Meal[] = [
  {
    id: '1',
    title: 'Couscous Royal Fait Maison',
    description: 'Un délicieux couscous traditionnel avec légumes frais et viandes variées',
    price: 15,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    chef: {
      id: '1',
      name: 'Marie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      rating: 4.8,
      reviewCount: 124,
      isVerified: true,
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        address: 'Paris, France'
      }
    },
    ingredients: ['Semoule', 'Légumes', 'Agneau', 'Poulet', 'Merguez'],
    allergens: ['Gluten'],
    category: 'Plat principal',
    distance: 1.2
  },
  {
    id: '2',
    title: 'Lasagnes Végétariennes',
    description: 'Lasagnes aux légumes de saison et fromage italien',
    price: 12,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    chef: {
      id: '2',
      name: 'Thomas Martin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      rating: 4.6,
      reviewCount: 89,
      isVerified: true,
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        address: 'Paris, France'
      }
    },
    ingredients: ['Pâtes', 'Légumes', 'Fromage', 'Sauce tomate'],
    allergens: ['Gluten', 'Lactose'],
    category: 'Végétarien',
    distance: 0.8
  }
];

export function MealGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_MEALS.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}