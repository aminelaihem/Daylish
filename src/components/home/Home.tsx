import React from 'react';
import { Hero } from './Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat } from 'lucide-react';
import { MealCard } from '../meals/MealCard';

// Simuler des données pour la section des plats populaires
const popularMeals = [
  {
    id: '1',
    chefId: '1',
    title: 'Couscous Royal Fait Maison',
    description: 'Un déliceux couscous traditionnel avec légumes frais et viandes variées',
    price: 10,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Semoule', 'Légumes', 'Agneau', 'Poulet', 'Merguez'],
    allergens: ['Gluten'],
    category: 'Plat principal',
    preparationTime: 45,
    availablePortions: 8,
    distance: 1.2,
    rating: 4.9,
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
    rating: 4.7,
    isPopular: true,
    isNew: true
  },
  {
    id: '3',
    chefId: '1',
    title: "Tajine d'Agneau aux Pruneaux",
    description: 'Un classique sucré-salé, fondant et parfumé.',
    price: 12,
    image: 'https://img.fourchette-et-bikini.fr/660x495/2021-07/shutterstock_1790449451.webp',
    ingredients: ['Agneau', 'Pruneaux', 'Amandes', 'Oignons', 'Épices'],
    allergens: ['Fruits à coque'],
    category: 'Plat principal',
    preparationTime: 60,
    availablePortions: 5,
    distance: 1.5,
    rating: 4.8,
    isPopular: true,
    isNew: false
  }
];

const sampleChefs = {
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
  }
};

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/20 via-white to-beige/10">
      <Hero />
      
      {/* Section Plats Populaires */}
      <section className="pb-24 relative overflow-hidden bg-[#FFF9EF]">
        {/* Effet de fond subtil */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="section-title text-deep-green text-left relative" style={{ color: '#053126' }}>
              Les pépites du quartier
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-yellow rounded-full" />
            </h2>
            <Link 
              to="/catalogue" 
              className="hidden md:flex text-deep-green-light font-blatant-bold hover:underline items-center group flex-shrink-0 ml-6"
            >
              Voir tous les plats
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularMeals.map((meal) => (
              <div 
                key={meal.id} 
                className="relative group hover:scale-[1.02] transition-all duration-300 border-b-4 border-transparent group-hover:border-yellow"
              >
                <MealCard 
                  meal={meal} 
                  chef={sampleChefs[meal.chefId as keyof typeof sampleChefs]}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-8 md:hidden">
            <Link 
              to="/catalogue" 
              className="text-deep-green-light font-blatant-bold hover:underline flex items-center group"
            >
              Voir tous les plats
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Appel à l'Action - Chef */}
      <section className="pb-24 relative overflow-hidden bg-[#FFF9EF]">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-deep-green to-deep-green/90 rounded-2xl shadow-2xl px-8 py-16 md:p-16 text-center relative overflow-hidden">
            {/* Effet de fond animé */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
            
            <h2 className="text-4xl md:text-5xl font-blatant-bold text-beige mb-6 relative">
              Partagez votre passion culinaire
            </h2>
            <p className="text-xl text-beige/90 font-blatant mb-12 max-w-2xl mx-auto leading-relaxed relative">
              Rejoignez notre réseau de chefs passionnés et transformez votre cuisine en source de revenus et de rencontres.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-yellow/90 to-orange-400/90 text-orange-800 hover:from-yellow hover:to-orange-400 shadow-lg hover:shadow-xl hover:shadow-yellow/20 transform transition-all duration-300 ease-out hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98] group"
            >
              <ChefHat className="mr-3 h-5 w-5 text-orange-800 transition-transform duration-300 group-hover:rotate-[-12deg]" />
              Devenir Chef Partenaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 