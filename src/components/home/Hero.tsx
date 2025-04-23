import React from 'react';
import { ChefHat, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    // Padding vertical et marges ajustés pour mobile (dernier ajustement pb)
    <div className="relative isolate bg-gradient-to-b from-deep-green to-beige/10 pt-28 sm:pt-32 lg:pt-48 pb-10 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Éléments décoratifs animés subtilement */}
      <div 
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a8ffc8] to-[#3f8f6e] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow-soft"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Titre - Taille 6xl par défaut */}
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-display tracking-tight text-beige leading-tight animate-fade-in-up duration-1000 ease-out"
          >
            <span className="block">Saveurs d'ici,</span>
            <span className="block text-deep-green-light mt-1">cuisinées pour vous</span>
          </h1>
          {/* Paragraphe - Taille xl et marge mt-6 par défaut */}
          <p 
            className="mt-6 md:mt-8 lg:mt-10 max-w-2xl mx-auto text-xl sm:text-2xl text-beige/90 leading-relaxed animate-fade-in-up duration-1000 delay-200 ease-out"
          >
            Explorez une variété de plats authentiques, mijotés avec passion par les talents culinaires de votre voisinage.
          </p>
          {/* Boutons - Marge mt-10 par défaut */}
          <div className="mt-10 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up duration-1000 delay-400 ease-out">
            <Link
              to="/catalogue"
              className="btn-primary group inline-flex items-center justify-center px-8 py-3 sm:py-4 text-lg font-bold rounded-xl shadow-lg bg-gradient-to-r from-yellow to-orange-400 text-deep-green hover:shadow-xl hover:brightness-110 focus:ring-yellow/50 transform transition-all duration-300 ease-out hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green active:scale-[0.98]"
            >
              <Search className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-[-12deg]" />
              Trouver un plat
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 sm:py-4 text-lg font-bold rounded-xl shadow-md transform transition-all duration-300 ease-out bg-beige text-deep-green hover:bg-opacity-90 hover:shadow-lg border border-transparent hover:border-deep-green/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige focus:ring-offset-deep-green active:scale-[0.98] hover:scale-[1.03]"
            >
              <ChefHat className="mr-3 h-5 w-5" />
              Devenir Chef Partenaire
            </Link>
          </div>
        </div>
      </div>
      
      {/* Element décoratif inférieur pour la transition */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fff5e0] to-[#f0e4c8] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow-soft"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </div>
  );
}

// Note: Les animations `animate-fade-in-up` et `animate-pulse-slow-soft` 
// nécessitent une définition dans tailwind.config.js ou un fichier CSS global.
// Exemple pour tailwind.config.js:
/*
theme: {
  extend: {
    keyframes: {
      'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'pulse-slow-soft': {
        '0%, 100%': { opacity: '0.15' },
        '50%': { opacity: '0.25' },
      }
    },
    animation: {
      'fade-in-up': 'fade-in-up 1s ease-out forwards',
      'pulse-slow-soft': 'pulse-slow-soft 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  }
}
*/