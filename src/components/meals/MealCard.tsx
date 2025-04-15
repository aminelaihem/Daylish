import React from 'react';
import { Star, Clock, AlertCircle, MapPin, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Meal } from '@/types/meal';
import type { Chef } from '@/types/chef';

interface MealCardProps {
  meal: Meal;
  chef: Chef;
}

export function MealCard({ meal, chef }: MealCardProps) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleOrderClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem('lastAttemptedOrder', JSON.stringify({ mealId: meal.id }));
      navigate('/login', { 
        state: { 
          message: "Connectez-vous pour commander ce délicieux plat !",
          redirectAfter: true
        }
      });
      return;
    }
    navigate(`/order/${meal.id}`, { state: { meal, chef } });
  };

  // Utilisation de .card (bg-white) défini dans index.css
  return (
    <div className="card group flex flex-col">
      {/* Image et badges */}
      <div className="relative h-52 flex-shrink-0">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-blatant-bold text-deep-green shadow-sm">
            {meal.category}
          </span>
        </div>
        
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center text-deep-green shadow-sm">
            <MapPin className="h-3.5 w-3.5 mr-1 text-orange" />
            {meal.distance} km
          </span>
          <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center text-deep-green shadow-sm">
            <Clock className="h-3.5 w-3.5 mr-1 text-orange" />
            {meal.preparationTime} min
          </span>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative flex-shrink-0">
            <img
              src={chef.avatar}
              alt={chef.name}
              className="h-11 w-11 rounded-full border-2 border-white shadow-md ring-1 ring-gray-200"
            />
            {chef.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-deep-green-light rounded-full p-0.5 border-2 border-white">
                <svg className="h-3 w-3 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <div>
            <p className="text-base font-blatant-bold text-deep-green leading-tight">{chef.name}</p>
            <div className="flex items-center text-xs text-deep-green/70 mt-0.5">
              <Star className="h-4 w-4 text-yellow fill-yellow mr-1" />
              <span className="font-medium">{chef.rating}</span>
              <span className="ml-1">({chef.reviewCount} avis)</span>
            </div>
          </div>
        </div>

        <div className="mb-3 flex-grow">
          <h3 className="text-xl font-blatant-bold text-deep-green group-hover:text-deep-green-light transition-colors mb-2 line-clamp-2 leading-snug">
            {meal.title}
          </h3>
          <p className="text-sm text-deep-green/70 line-clamp-3 flex-grow">{meal.description}</p>
        </div>
        
        <div className="text-2xl font-blatant-bold text-deep-green-light mb-5 text-right">
            {meal.price}€
        </div>

        {meal.allergens.length > 0 && (
            <div className="flex items-center text-xs text-orange mb-4">
              <AlertCircle className="h-4 w-4 mr-1.5 flex-shrink-0" />
              <span className="font-medium">Allergènes:</span>
              <span className="ml-1 truncate">{meal.allergens.join(', ')}</span>
            </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
          <span className="text-xs text-deep-green/60 whitespace-nowrap">{meal.availablePortions} portions</span>
          
          <button
            onClick={handleOrderClick}
            className={`flex-shrink-0 ${isLoggedIn ? 'btn-primary' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium'}`}
            style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            {isLoggedIn ? (
              <ShoppingBag className="h-4 w-4 mr-2" />
            ) : null}
            {isLoggedIn ? 'Commander' : 'Se connecter'}
          </button>
        </div>
      </div>
    </div>
  );
}