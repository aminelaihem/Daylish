import React from 'react';
import { Star, Clock, AlertCircle } from 'lucide-react';
import type { Meal } from '../../types';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleOrderClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem('lastAttemptedOrder', JSON.stringify({
        mealId: meal.id,
        returnUrl: window.location.pathname
      }));
      
      navigate('/login', { 
        state: { 
          message: "Connectez-vous pour commander ce plat",
          redirectAfter: true
        }
      });
      return;
    }

    navigate(`/order/${meal.id}`, {
      state: {
        meal,
        chef,
        user
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-white text-sm">
            {meal.distance} km
          </span>
          <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-white text-sm">
            <Clock className="h-4 w-4 inline mr-1" />
            {meal.preparationTime} min
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <div className="flex items-center mb-2">
            <img
              src={chef.avatar}
              alt={chef.name}
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium text-gray-900">{chef.name}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
            <span className="font-medium">{chef.rating}</span>
            <span className="mx-1">•</span>
            <span>{chef.reviewCount} avis</span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{meal.title}</h3>
          <span className="text-lg font-bold text-orange-600">{meal.price}€</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{meal.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Ingrédients:</span>
            <span className="line-clamp-1">{meal.ingredients.join(', ')}</span>
          </div>
          
          {meal.allergens.length > 0 && (
            <div className="flex items-center text-sm text-red-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>Allergènes: {meal.allergens.join(', ')}</span>
            </div>
          )}

          <div className="flex justify-between text-sm text-gray-500">
            <span>{meal.availablePortions} portions restantes</span>
            <span>Il y a 10 minutes</span>
          </div>
        </div>

        <button
          onClick={handleOrderClick}
          className={`
            w-full py-2 px-4 rounded-full font-medium transition-all duration-200
            ${isLoggedIn 
              ? 'bg-orange-600 text-white hover:bg-orange-700 transform hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
          `}
        >
          {isLoggedIn ? (
            <span className="flex items-center justify-center">
              Commander • {meal.price}€
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Se connecter pour commander
            </span>
          )}
        </button>
      </div>
    </div>
  );
}