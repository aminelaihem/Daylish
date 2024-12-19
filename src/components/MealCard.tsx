import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import type { Meal } from '../types';

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {meal.chef.isVerified && (
            <div className="bg-white p-1 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{meal.title}</h3>
          <span className="text-lg font-bold text-orange-600">{meal.price}€</span>
        </div>
        
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{meal.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={meal.chef.avatar}
              alt={meal.chef.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{meal.chef.name}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">
                  {meal.chef.rating} ({meal.chef.reviewCount})
                </span>
              </div>
            </div>
          </div>
          
          <span className="text-sm text-gray-500">
            {meal.distance ? `${meal.distance} km` : 'Distance N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}