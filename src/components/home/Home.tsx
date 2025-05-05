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
          <div className="bg-gradient-to-br from-deep-green to-deep-green/90 rounded-2xl shadow-2xl px-8 py-16 md:p-16 relative overflow-hidden">
            {/* Effet de fond animé */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex-1 w-full">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-4xl md:text-5xl font-blatant-bold text-beige mb-3 md:mb-0 relative">
                    Partagez votre passion culinaire
                  </h2>
                  <p className="text-xl text-beige/90 font-blatant mb-6 max-w-2xl mx-auto leading-relaxed relative">
                    Rejoignez notre réseau de chefs passionnés et transformez votre cuisine en source de revenus et de rencontres.
                  </p>
                  <div className="flex justify-center w-full mt-2">
                    <Link
                      to="/register"
                      className="group relative inline-flex items-center justify-center font-bold font-sans rounded-xl overflow-hidden bg-[#FFEDCB] text-deep-green shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus:ring-2 focus:ring-deep-green-light hover:bg-[#FFEDCB] px-[32px] py-[12px] text-lg"
                    >
                      {/* Effet Shimmer */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFEDCB]/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-50 group-hover:opacity-100"></span>
                      <ChefHat className="mr-3 h-5 w-5 text-deep-green transition-transform duration-300 group-hover:rotate-[-12deg] relative z-10" />
                      <span className="relative z-10 whitespace-nowrap">Devenir Chef Partenaire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 