import React, { useState } from 'react';
import { MealGrid } from '../meals/MealGrid';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [sortBy, setSortBy] = useState<string>('recommended');

  const categories = [
    { id: 'all', label: 'Tous les plats' },
    { id: 'main', label: 'Plats principaux' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'vegetarian', label: 'Végétarien' },
    { id: 'vegan', label: 'Vegan' }
  ];

  const sortOptions = [
    { id: 'recommended', label: 'Recommandés' },
    { id: 'price-asc', label: 'Prix croissant' },
    { id: 'price-desc', label: 'Prix décroissant' },
    { id: 'rating', label: 'Meilleures notes' },
    { id: 'distance', label: 'Distance' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* En-tête du catalogue */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Catalogue des plats</h1>
          <p className="text-lg text-orange-100 mb-8">
            Découvrez une sélection de plats faits maison près de chez vous
          </p>

          {/* Barre de recherche principale */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un plat, un chef, une cuisine..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres étendus */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Catégories */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                        selectedCategory === category.id
                          ? 'bg-orange-50 text-orange-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prix */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Prix</h3>
                <div className="px-3">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0€</span>
                    <span>Jusqu'à {priceRange[1]}€</span>
                  </div>
                </div>
              </div>

              {/* Tri */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Trier par</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-lg border-gray-300 text-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grille de plats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MealGrid />
      </div>
    </div>
  );
}