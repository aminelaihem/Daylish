import React from 'react';
import { ChefHat, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-deep-green to-deep-green/90 pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Éléments décoratifs (optionnels) */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-deep-green-light/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-vogue tracking-tight text-beige sm:text-6xl md:text-7xl leading-tight">
            <span className="block">Saveurs d'ici,</span>
            <span className="block text-deep-green-light mt-2">cuisinées pour vous</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-beige/90 font-blatant sm:text-xl md:mt-8 md:text-2xl">
            Explorez une variété de plats authentiques, mijotés avec passion par les talents culinaires de votre voisinage.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-lg font-blatant-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ChefHat className="mr-2 h-6 w-6" />
              Devenir Chef Partenaire
            </Link>
            <Link
              to="/catalogue"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg font-blatant-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 bg-beige text-deep-green hover:bg-beige/90"
            >
              <Search className="mr-2 h-6 w-6" />
              Trouver un plat
            </Link>
          </div>
        </div>
      </div>
      
      {/* Transition douce vers la suite */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige to-transparent"></div>
    </div>
  );
}