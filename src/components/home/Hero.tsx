import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative bg-[#FFF9EF] min-h-screen flex flex-col items-center overflow-hidden pt-24">
      <div className="flex-1 flex flex-col justify-center items-center w-full px-4 mt-24" style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Conteneur du titre et de l'image */}
        <div className="relative flex flex-col items-center w-full">
          <img
            src="/plat-salade.png"
            alt="Plat salade"
            className="absolute left-1/2 -translate-x-1/2 -top-16 object-cover z-10 drop-shadow-xl select-none pointer-events-none"
          />
          <h1 className="font-display text-center text-5xl sm:text-6xl md:text-7xl leading-tight font-normal mb-6 mt-10 relative z-20" style={{ color: '#053126' }}>
            Des plats faits maison,<br />
            tout près de vous
          </h1>
        </div>
        <p className="font-sans text-lg sm:text-xl text-center max-w-2xl mb-4" style={{ color: '#053126' }}>
          Sur Daylish, des cuisiniers passionnés de votre quartier partagent leurs meilleures recettes.<br />
          Commandez en quelques clics et savourez des plats authentiques, préparés avec soin et proximité.
        </p>
        <div className="w-full flex justify-center mt-8">
          <Link
            to="/catalogue"
            style={{
              border: '2px solid transparent',
              background: 'linear-gradient(#f9f6f1, #f9f6f1) padding-box, linear-gradient(to right, #F4B73E, #A1B864, #00795F) border-box',
              paddingLeft: '100px',
              paddingRight: '100px',
              paddingTop: '12px',
              paddingBottom: '12px'
            }}
            className="inline-flex items-center rounded-[12px] text-[#053126] font-blatant font-bold transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#f5a623]/20 hover:bg-[#f5a623] active:scale-[0.98] gap-3 focus:outline-none"
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