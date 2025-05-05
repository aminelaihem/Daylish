import React, { useState } from 'react';
import { Star, Clock, AlertCircle, MapPin, ShoppingBag, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Meal } from '@/types/meal';
import type { Chef } from '@/types/chef';
import { MealDetailModal } from './MealDetailModal';

interface MealCardProps {
  meal: Meal;
  chef: Chef;
}

export function MealCard({ meal, chef }: MealCardProps) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      localStorage.setItem('lastAttemptedOrder', JSON.stringify({ mealId: meal.id, meal, chef }));
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

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="flex flex-col h-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100 cursor-pointer group"
      >
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden">
          <img
            src={meal.image}
            alt={meal.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Implémenter la fonctionnalité des favoris
            }}
            className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 hover:bg-white/40 hover:text-red-500 focus:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Ajouter aux favoris</span>
          </button>

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-deep-green shadow-md">
              {meal.category}
            </span>
            {meal.isPopular && (
              <span className="bg-yellow px-3 py-1 rounded-full text-xs font-bold text-deep-green shadow-md">
                Populaire
              </span>
            )}
            {meal.isNew && (
              <span className="bg-deep-green-light px-3 py-1 rounded-full text-xs font-bold text-white shadow-md">
                Nouveau
              </span>
            )}
          </div>
          
          <div className="absolute bottom-3 left-3 flex space-x-2">
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center text-deep-green shadow-sm">
              <MapPin className="h-3.5 w-3.5 mr-1 text-orange flex-shrink-0" />
              {meal.distance} km
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center text-deep-green shadow-sm">
              <Clock className="h-3.5 w-3.5 mr-1 text-orange flex-shrink-0" />
              {meal.preparationTime} min
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center text-deep-green shadow-sm">
              <Star className="h-3.5 w-3.5 mr-1 text-yellow fill-current flex-shrink-0" />
              {meal.rating}
            </span>
          </div>
        </div>

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
              <p className="text-base font-bold text-deep-green leading-tight">{chef.name}</p>
              <div className="flex items-center text-xs text-deep-green/70 mt-0.5">
                <Star className="h-4 w-4 text-yellow fill-current mr-1" />
                <span className="font-medium">{chef.rating}</span>
                <span className="ml-1">({chef.reviewCount} avis)</span>
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-lg font-bold text-deep-green group-hover:text-deep-green-light transition-colors duration-300 mb-2 leading-snug line-clamp-2">
              {meal.title}
            </h3>
            <p className="text-sm text-deep-green/80 line-clamp-3 leading-relaxed group-hover:text-deep-green/60 transition-colors duration-300">
              {meal.description}
            </p>
          </div>

          {meal.allergens.length > 0 && (
            <div className="flex items-center text-xs text-deep-green/70 mb-4">
              <AlertCircle className="h-4 w-4 mr-1.5 flex-shrink-0 text-deep-green/70" />
              <span className="font-medium">Allergènes :</span>
              <span className="ml-1 truncate">{meal.allergens.join(', ')}</span>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-deep-green-light">{meal.price}€</span>
              <span className="text-xs text-deep-green/60"> / portion ({meal.availablePortions} dispo.)</span>
            </div>
            
            <button
              onClick={handleOrderClick}
              className="btn-secondary group/button inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg shadow-md transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg active:scale-[0.98] flex-shrink-0 bg-gradient-to-r from-yellow to-orange-400 text-deep-green hover:shadow-xl hover:brightness-110 focus:ring-yellow/50 group-hover:brightness-105"
            >
              <ShoppingBag className="h-4 w-4 mr-2 transition-transform duration-300 ease-in-out group-hover/button:rotate-[-6deg] group-hover/button:scale-110" />
              Commander
            </button>
          </div>
        </div>
      </div>

      <MealDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meal={meal}
        chef={chef}
        handleOrderClick={handleOrderClick}
      />
    </>
  );
}