import React from 'react';
import { Utensils, Heart, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Utensils className="h-8 w-8 text-orange-500" />,
    title: "Mangez sainement",
    description: "Des plats faits maison avec des ingrédients frais et de qualité, préparés avec passion."
  },
  {
    icon: <Heart className="h-8 w-8 text-orange-500" />,
    title: "Valorisez votre talent culinaire",
    description: "Partagez vos recettes et générez un revenu complémentaire grâce à votre passion."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Créez du lien localement",
    description: "Rencontrez vos voisins et participez à la création d'une communauté culinaire locale."
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir Saveurs d’À Côté ?</h2>
          <p className="mt-4 text-lg text-gray-600">Découvrez les avantages de notre plateforme</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-3 bg-orange-50 rounded-full">
                {benefit.icon}
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-4 text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}