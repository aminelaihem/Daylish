import React from 'react';
import { Star, CheckCircle, Clock } from 'lucide-react';
import type { Meal } from '../../types';

interface MealCardProps {
  meal: Meal;
  chef: {
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    isVerified: boolean;
  };
}

export function MealCard({ meal, chef }: MealCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {chef.isVerified && (
            <div className="bg-white p-1 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          )}
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {meal.preparationTime} min
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{meal.title}</h3>
          <span className="text-lg font-bold text-orange-600">{meal.price}€</span>
        </div>
        
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{meal.description}</p>
        
        {meal.allergens.length > 0 && (
          <div className="mt-2">
            <span className="text-xs font-medium text-red-600">
              Allergènes: {meal.allergens.join(', ')}
            </span>
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={chef.avatar}
              alt={chef.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{chef.name}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">
                  {chef.rating} ({chef.reviewCount})
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">
              {meal.distance ? `${meal.distance} km` : 'Distance N/A'}
            </span>
            <span className="text-xs text-gray-400">
              {meal.availablePortions} portions restantes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}