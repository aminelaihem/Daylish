import React from 'react';
import { Utensils, Heart, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Benefits() {
  // Définir les données ici pour une meilleure lisibilité
  const benefitsData: Benefit[] = [
    {
      // Icône Orange sur fond clair
      icon: <Utensils className="h-10 w-10 text-orange" />,
      title: "Mangez authentique",
      description: "Savourez des plats mijotés avec des ingrédients frais, loin des standards industriels."
    },
    {
      icon: <Heart className="h-10 w-10 text-orange" />,
      title: "Valorisez votre passion",
      description: "Monétisez votre talent en partageant vos spécialités culinaires avec votre communauté."
    },
    {
      icon: <Users className="h-10 w-10 text-orange" />,
      title: "Tissez des liens",
      description: "Renforcez les liens de voisinage autour de la passion commune de la bonne cuisine."
    }
  ];

  return (
    // Fond de section: Vert Clair
    <section className="py-24 bg-deep-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Titre sur vert clair -> vert foncé */}
          <h2 className="section-title text-deep-green">Pourquoi Daylish ?</h2>
          <p className="mt-4 text-xl text-deep-green/80 font-blatant max-w-3xl mx-auto">Rejoignez une communauté gourmande et solidaire.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            // Carte sur fond vert clair -> utilise .card (bg-white), texte vert foncé
            <div
              key={index}
              className="card text-center p-8 md:p-10 transform hover:-translate-y-2"
            >
              {/* Icone bg -> beige (contraste doux avec bg-white de la carte) */}
              <div className="inline-flex p-5 bg-beige rounded-full mb-8">
                {benefit.icon} 
              </div>
              {/* Titre et texte sur fond blanc -> vert foncé */}
              <h3 className="text-2xl font-blatant-bold text-deep-green mb-4">{benefit.title}</h3>
              <p className="text-base text-deep-green/70 font-blatant leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}