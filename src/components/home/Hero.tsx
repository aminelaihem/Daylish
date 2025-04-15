import React from 'react';
import { ChefHat, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-deep-green pt-48 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-deep-green-light/5 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-yellow/5 rounded-full blur-3xl opacity-40" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Utilisation de font-vogue pour le titre principal */}
          <h1 className="text-6xl font-vogue tracking-tight text-beige sm:text-7xl md:text-8xl leading-none">
            <span className="block">Saveurs d'ici,</span>
            <span className="block text-deep-green-light mt-1">cuisinées pour vous</span>
          </h1>
          {/* Texte d'intro avec police Blatant, plus lisible */}
          <p className="mt-8 max-w-xl mx-auto text-xl text-beige/90 font-blatant sm:text-2xl md:mt-10">
            Explorez une variété de plats authentiques, mijotés avec passion par les talents culinaires de votre voisinage.
          </p>
          {/* Boutons avec plus d'espace */}
          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/catalogue"
              // Ajout des classes transform, transition, active, shadow etc. pour la cohérence
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-blatant-bold rounded-lg shadow-md bg-yellow text-deep-green hover:bg-yellow/90 focus:ring-yellow/50 transform hover:scale-105 active:scale-[0.98] transition-all duration-200 focus:ring-offset-deep-green"
            >
              <Search className="mr-3 h-5 w-5" />
              Trouver un plat
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-blatant-bold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 bg-beige text-deep-green hover:bg-beige/90 border border-deep-green/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige focus:ring-offset-deep-green active:scale-[0.98]"
            >
              <ChefHat className="mr-3 h-5 w-5" />
              Devenir Chef Partenaire
            </Link>
          </div>
        </div>
      </div>
      
      {/* Transition douce améliorée */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-beige via-beige/80 to-transparent" aria-hidden="true"></div>
    </div>
  );
}