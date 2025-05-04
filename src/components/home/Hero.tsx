import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative bg-[#FFF9EF] min-h-[80vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-20">
      <div className="relative flex flex-col items-center w-full px-4" style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Conteneur du titre et de l'image */}
        <div className="relative flex flex-col items-center w-full" style={{ marginTop: '4rem' }}>
          <img
            src="/plat-salade.png"
            alt="Plat salade"
            className="absolute left-1/2 -translate-x-1/2 -top-16 object-cover z-10 drop-shadow-xl select-none pointer-events-none"
          />
          <h1 className="font-display text-deep-green text-center text-5xl sm:text-6xl md:text-7xl leading-tight font-normal mb-6 mt-10 relative z-20">
            Saveurs d'ici,<br />cuisinées pour vous
          </h1>
        </div>
        <p className="font-sans text-lg sm:text-xl text-center text-deep-green/90 max-w-2xl mb-10">
          Explorez une variété de plats authentiques, mijotés avec passion par les talents culinaires de votre voisinage.
        </p>
        <div className="w-full flex justify-center">
          <Link
            to="/catalogue"
            className="font-sans font-bold text-deep-green text-lg px-8 py-4 rounded-xl shadow-md border-2 border-yellow bg-white hover:bg-yellow/30 transition-all duration-200 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-yellow/50"
            style={{ boxShadow: '0 4px 24px 0 rgba(255, 194, 85, 0.10)' }}
          >
            <Search className="h-5 w-5" />
            Trouver un plat
          </Link>
        </div>
      </div>
    </section>
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