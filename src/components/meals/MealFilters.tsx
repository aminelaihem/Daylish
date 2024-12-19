import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

const categories: FilterOption[] = [
  { id: 'all', label: 'Tous les plats' },
  { id: 'main', label: 'Plats principaux' },
  { id: 'dessert', label: 'Desserts' },
  { id: 'vegetarian', label: 'Végétarien' },
  { id: 'vegan', label: 'Vegan' }
];

const sortOptions: FilterOption[] = [
  { id: 'distance', label: 'Distance' },
  { id: 'rating', label: 'Meilleures notes' },
  { id: 'price-asc', label: 'Prix croissant' },
  { id: 'price-desc', label: 'Prix décroissant' }
];

export function MealFilters() {
  return (
    <div className="bg-white shadow-sm border-t border-l border-r rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-96 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un plat..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex-1 flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 whitespace-nowrap"
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <select className="pl-4 pr-8 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <SlidersHorizontal className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}