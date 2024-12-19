import React from 'react';
import { MealFilters } from '../meals/MealFilters';
import { MealGrid } from '../meals/MealGrid';
import { ChefHat } from 'lucide-react';

export function Catalogue() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section du Catalogue */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <ChefHat className="h-8 w-8" />
              <h1 className="text-4xl font-bold">Catalogue des Plats</h1>
            </div>
            <p className="text-xl text-orange-100 mb-8">
              Découvrez une sélection de plats faits maison par nos chefs passionnés
            </p>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm -mt-8">
          <MealFilters />
          
          {/* Résultats */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium text-gray-800">
                Plats disponibles
              </h2>
              <div className="text-sm text-gray-500">
                42 plats trouvés
              </div>
            </div>
            <MealGrid />
          </div>
        </div>
      </div>
    </div>
  );
}