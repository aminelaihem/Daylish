import React from 'react';
import { ChefHat, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Des repas faits maison,</span>
            <span className="block text-orange-600">à deux pas de chez vous</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Découvrez des plats authentiques préparés avec amour par des cuisiniers passionnés de votre quartier.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700">
              <ChefHat className="mr-2 h-5 w-5" />
              Je cuisine
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-orange-600 bg-white hover:bg-gray-50">
              <Search className="mr-2 h-5 w-5" />
              Je cherche un repas
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}