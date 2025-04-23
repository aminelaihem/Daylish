import React from 'react';
import { MealCard } from './MealCard';
import type { Meal } from '@/types/meal';
import type { Chef } from '@/types/chef';
import { motion } from 'framer-motion';

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
    distance: 1.2,
    rating: 4.8,
    isPopular: true,
    isNew: false
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
    distance: 0.8,
    rating: 4.6,
    isPopular: true,
    isNew: true
  },
  {
    id: '3',
    chefId: '3',
    title: 'Tajine d\'Agneau aux Pruneaux',
    description: 'Tajine traditionnel marocain avec agneau tendre et pruneaux',
    price: 12,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Agneau', 'Pruneaux', 'Amandes', 'Épices'],
    allergens: ['Fruits à coque'],
    category: 'Plat principal',
    preparationTime: 60,
    availablePortions: 4,
    distance: 1.5,
    rating: 4.9,
    isPopular: true,
    isNew: false
  },
  {
    id: '4',
    chefId: '4',
    title: 'Salade César Vegan',
    description: 'Salade César revisitée version vegan avec sauce crémeuse',
    price: 8,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Laitue', 'Croûtons', 'Sauce vegan', 'Noix'],
    allergens: ['Gluten', 'Fruits à coque'],
    category: 'Vegan',
    preparationTime: 15,
    availablePortions: 10,
    distance: 0.5,
    rating: 4.7,
    isPopular: false,
    isNew: true
  },
  {
    id: '5',
    chefId: '5',
    title: 'Tiramisu Classique',
    description: 'Dessert italien traditionnel au café et mascarpone',
    price: 6,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Mascarpone', 'Café', 'Cacao', 'Biscuits'],
    allergens: ['Lactose', 'Gluten'],
    category: 'Dessert',
    preparationTime: 20,
    availablePortions: 12,
    distance: 1.0,
    rating: 4.9,
    isPopular: true,
    isNew: false
  },
  {
    id: '6',
    chefId: '6',
    title: 'Buddha Bowl Quinoa',
    description: 'Bol équilibré avec quinoa, légumes rôtis et sauce tahini',
    price: 11,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Quinoa', 'Légumes', 'Avocat', 'Sauce tahini'],
    allergens: ['Sésame'],
    category: 'Vegan',
    preparationTime: 25,
    availablePortions: 8,
    distance: 0.7,
    rating: 4.8,
    isPopular: true,
    isNew: true
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
  },
  '3': {
    id: '3',
    name: 'Fatima Benali',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewCount: 156,
    isVerified: true
  },
  '4': {
    id: '4',
    name: 'Lucas Dubois',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.7,
    reviewCount: 92,
    isVerified: true
  },
  '5': {
    id: '5',
    name: 'Sophie Moreau',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewCount: 178,
    isVerified: true
  },
  '6': {
    id: '6',
    name: 'Alexandre Petit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviewCount: 103,
    isVerified: true
  }
};

export function MealGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SAMPLE_MEALS.map((meal, index) => (
          <motion.div
            key={meal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MealCard 
              meal={meal} 
              chef={SAMPLE_CHEFS[meal.chefId as keyof typeof SAMPLE_CHEFS]}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}