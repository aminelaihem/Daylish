import React from 'react';
import { Star, Clock, AlertCircle, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Meal, Chef } from '../../types';

interface MealCardProps {
  meal: Meal;
  chef: Chef;
}

export function MealCard({ meal, chef }: MealCardProps) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleOrderClick = () => {
    if (!isLoggedIn) {
      // Sauvegarder l'intention de commande
      localStorage.setItem('lastAttemptedOrder', JSON.stringify({
        mealId: meal.id,
        returnUrl: window.location.pathname
      }));
      
      navigate('/login', { 
        state: { 
          message: "Connectez-vous pour commander ce délicieux plat !",
          redirectAfter: true
        }
      });
      return;
    }

    navigate(`/order/${meal.id}`, {
      state: { meal, chef, user }
    });
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image et badges */}
      <div className="relative h-48">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Badges flottants */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {meal.category}
          </span>
        </div>
        
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {meal.distance} km
          </span>
          <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {meal.preparationTime} min
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Info chef */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="relative">
            <img
              src={chef.avatar}
              alt={chef.name}
              className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
            />
            {chef.isVerified && (
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{chef.name}</p>
            <div className="flex items-center text-xs text-gray-600">
              <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium">{chef.rating}</span>
              <span className="mx-1">•</span>
              <span>{chef.reviewCount} avis</span>
            </div>
          </div>
        </div>

        {/* Titre et prix */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
            {meal.title}
          </h3>
          <span className="text-lg font-bold text-orange-600">{meal.price}€</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{meal.description}</p>

        {/* Ingrédients et allergènes */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Ingrédients:</span>
            <span className="line-clamp-1">{meal.ingredients.join(', ')}</span>
          </div>
          
          {meal.allergens.length > 0 && (
            <div className="flex items-center text-sm text-red-600">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">Allergènes: {meal.allergens.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Infos supplémentaires */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{meal.availablePortions} portions restantes</span>
          <span>Ajouté il y a 10 min</span>
        </div>

        {/* Bouton commander */}
        <button
          onClick={handleOrderClick}
          className={`
            w-full py-3 px-4 rounded-lg font-medium
            transition-all duration-200 transform
            ${isLoggedIn 
              ? 'bg-orange-600 text-white hover:bg-orange-700 hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
          `}
        >
          {isLoggedIn ? (
            <span className="flex items-center justify-center">
              Commander maintenant • {meal.price}€
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