import React from 'react';
import { Utensils, Heart, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Utensils className="h-10 w-10 text-deep-green" />,
    title: "Mangez authentique",
    description: "Savourez des plats mijotés avec des ingrédients frais, loin des standards industriels."
  },
  {
    icon: <Heart className="h-10 w-10 text-deep-green" />,
    title: "Valorisez votre passion",
    description: "Monétisez votre talent en partageant vos spécialités culinaires avec votre communauté."
  },
  {
    icon: <Users className="h-10 w-10 text-deep-green" />,
    title: "Tissez des liens",
    description: "Renforcez les liens de voisinage autour de la passion commune de la bonne cuisine."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title font-blatant-bold text-4xl text-deep-green">Pourquoi Daylish ?</h2>
          <p className="mt-4 text-xl text-deep-green/80 font-blatant max-w-3xl mx-auto">Rejoignez une communauté gourmande et solidaire.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-deep-green-light/10"
            >
              <div className="inline-flex p-4 bg-deep-green-light/10 rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-blatant-bold text-deep-green mb-3">{benefit.title}</h3>
              <p className="text-base text-deep-green/80 font-blatant">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}