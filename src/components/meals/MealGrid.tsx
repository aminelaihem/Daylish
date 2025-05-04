import React, { useState } from 'react';
import { MealCard } from './MealCard';
import type { Meal } from '@/types/meal';
import type { Chef } from '@/types/chef';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const SAMPLE_MEALS: Meal[] = [
  {
    id: '1',
    chefId: '1',
    title: 'Couscous Royal Fait Maison',
    description: 'Un délicieux couscous traditionnel avec légumes frais et viandes variées',
    price: 10,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Semoule', 'Légumes', 'Agneau', 'Poulet', 'Merguez'],
    allergens: ['Gluten'],
    category: 'Plat principal',
    preparationTime: 45,
    availablePortions: 8,
    distance: 1.2,
    rating: 4.8,
    isPopular: true,
    isNew: false
  },
  {
    id: '2',
    chefId: '2',
    title: 'Lasagnes Végétariennes',
    description: 'Lasagnes aux légumes de saison et fromage italien',
    price: 9,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Pâtes', 'Légumes', 'Fromage', 'Sauce tomate'],
    allergens: ['Gluten', 'Lactose'],
    category: 'Végétarien',
    preparationTime: 30,
    availablePortions: 6,
    distance: 0.8,
    rating: 4.6,
    isPopular: true,
    isNew: true
  },
  {
    id: '3',
    chefId: '3',
    title: 'Tajine d\'Agneau aux Pruneaux',
    description: 'Tajine traditionnel marocain avec agneau tendre et pruneaux',
    price: 12,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Agneau', 'Pruneaux', 'Amandes', 'Épices'],
    allergens: ['Fruits à coque'],
    category: 'Plat principal',
    preparationTime: 60,
    availablePortions: 4,
    distance: 1.5,
    rating: 4.9,
    isPopular: true,
    isNew: false
  },
  {
    id: '4',
    chefId: '4',
    title: 'Salade César Vegan',
    description: 'Salade César revisitée version vegan avec sauce crémeuse',
    price: 8,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Laitue', 'Croûtons', 'Sauce vegan', 'Noix'],
    allergens: ['Gluten', 'Fruits à coque'],
    category: 'Vegan',
    preparationTime: 15,
    availablePortions: 10,
    distance: 0.5,
    rating: 4.7,
    isPopular: false,
    isNew: true
  },
  {
    id: '5',
    chefId: '5',
    title: 'Tiramisu Classique',
    description: 'Dessert italien traditionnel au café et mascarpone',
    price: 6,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Mascarpone', 'Café', 'Cacao', 'Biscuits'],
    allergens: ['Lactose', 'Gluten'],
    category: 'Dessert',
    preparationTime: 20,
    availablePortions: 12,
    distance: 1.0,
    rating: 4.9,
    isPopular: true,
    isNew: false
  },
  {
    id: '6',
    chefId: '6',
    title: 'Buddha Bowl Quinoa',
    description: 'Bol équilibré avec quinoa, légumes rôtis et sauce tahini',
    price: 11,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Quinoa', 'Légumes', 'Avocat', 'Sauce tahini'],
    allergens: ['Sésame'],
    category: 'Vegan',
    preparationTime: 25,
    availablePortions: 8,
    distance: 0.7,
    rating: 4.8,
    isPopular: true,
    isNew: true
  }
];

const SAMPLE_CHEFS = {
  '1': {
    id: '1',
    name: 'Marie Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviewCount: 124,
    isVerified: true
  },
  '2': {
    id: '2',
    name: 'Thomas Martin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 4.6,
    reviewCount: 89,
    isVerified: true
  },
  '3': {
    id: '3',
    name: 'Fatima Benali',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewCount: 156,
    isVerified: true
  },
  '4': {
    id: '4',
    name: 'Lucas Dubois',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.7,
    reviewCount: 92,
    isVerified: true
  },
  '5': {
    id: '5',
    name: 'Sophie Moreau',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewCount: 178,
    isVerified: true
  },
  '6': {
    id: '6',
    name: 'Alexandre Petit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviewCount: 103,
    isVerified: true
  }
};

const categories = [
  { id: 'all', name: 'Tous les plats' },
  { id: 'popular', name: 'Populaires' },
  { id: 'new', name: 'Nouveautés' },
  { id: 'vegan', name: 'Vegan' },
  { id: 'dessert', name: 'Desserts' }
];

const filters = [
  { id: 'rating', name: 'Meilleures notes' },
  { id: 'price', name: 'Prix' },
  { id: 'distance', name: 'Distance' },
  { id: 'time', name: 'Temps de préparation' }
];

export function MealGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredMeals = SAMPLE_MEALS.filter(meal => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'popular' && meal.isPopular) ||
      (selectedCategory === 'new' && meal.isNew) ||
      (selectedCategory === 'vegan' && meal.category === 'Vegan') ||
      (selectedCategory === 'dessert' && meal.category === 'Dessert');
    
    const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (selectedFilter) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'distance':
        return (a.distance || 0) - (b.distance || 0);
      case 'time':
        return a.preparationTime - b.preparationTime;
      default:
        return 0;
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Barre de recherche et filtres */}
      <div className="mb-8 space-y-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un plat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Catégories */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex gap-2 overflow-x-auto pb-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow to-orange-400 text-deep-green'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Filtres */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative self-end sm:self-auto"
          >
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
            >
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Trier par</span>
              {isFiltersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            <AnimatePresence>
              {isFiltersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-10"
                >
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        setSelectedFilter(filter.id);
                        setIsFiltersOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                        selectedFilter === filter.id
                          ? 'bg-gradient-to-r from-yellow/10 to-orange-400/10 text-deep-green'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Grille de plats */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredMeals.map((meal, index) => (
            <motion.div
              key={meal.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <MealCard 
                meal={meal} 
                chef={SAMPLE_CHEFS[meal.chefId as keyof typeof SAMPLE_CHEFS]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Message si aucun résultat */}
      {filteredMeals.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">
            Aucun plat ne correspond à votre recherche
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}