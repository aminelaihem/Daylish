import React from 'react';
import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { Testimonials } from './Testimonials';
import { MealCard } from '../meals/MealCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    distance: 1.2
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
    distance: 0.8
  },
  {
    id: '3',
    chefId: '1',
    title: "Tajine d'Agneau aux Pruneaux",
    description: 'Un classique sucré-salé, fondant et parfumé.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1604510719584-8e1135d2a0f0?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Agneau', 'Pruneaux', 'Amandes', 'Oignons', 'Épices'],
    allergens: ['Fruits à coque'],
    category: 'Plat principal',
    preparationTime: 60,
    availablePortions: 5,
    distance: 1.5
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
    // Fond global implicite via body (bg-beige)
    <div className="min-h-screen">
      <Hero />
      
      {/* Section Plats Populaires - Fond: Beige (par défaut) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title text-deep-green text-left">Les pépites du quartier</h2>
            <Link 
              to="/catalogue" 
              className="text-deep-green-light font-blatant-bold hover:underline flex items-center group flex-shrink-0 ml-6"
            >
              Voir tous les plats
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Cartes avec fond blanc cassé */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularMeals.map((meal) => (
              // Wrapper appliquant le style .card et le fond
              <div key={meal.id} className="card bg-soft-white">
                <MealCard 
                  meal={meal} 
                  chef={sampleChefs[meal.chefId as keyof typeof sampleChefs]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Benefits - Fond: Beige (par défaut) */}
      <section className="py-20">
        <Benefits /> 
      </section>
      
      {/* Section Testimonials - Fond: Beige (par défaut) */}
      <section className="py-20">
        <Testimonials />
      </section>
      
      {/* Section Appel à l'Action - Chef - Fond: Beige (par défaut) */}
      <section className="py-24">
         {/* Conteneur de la carte CTA */}
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* La "carte" CTA avec fond Vert Foncé */}
            <div className="bg-deep-green rounded-2xl shadow-xl px-8 py-12 sm:p-16 text-center">
                 {/* Contenu texte sur fond vert foncé -> beige */}
                 <h2 className="text-4xl md:text-5xl font-blatant-bold text-beige mb-5">Partagez votre passion culinaire</h2>
                 <p className="text-xl text-beige/80 font-blatant mb-12 max-w-2xl mx-auto leading-relaxed">
                     Rejoignez notre réseau de chefs passionnés et transformez votre cuisine en source de revenus et de rencontres.
                 </p>
                 {/* Bouton sur fond vert foncé -> Secondaire (vert clair/vert foncé) */}
                 <Link
                     to="/register"
                     className="btn-secondary px-10 py-4 text-lg"
                 >
                     Devenir Chef Partenaire
                 </Link>
            </div>
         </div>
      </section>
    </div>
  );
} 