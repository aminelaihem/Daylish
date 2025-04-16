/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Importer le thème par défaut

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#006B60',
        'deep-green-light': '#06D6A0',
        'beige': '#FFEDCB',
        'orange': '#FF7357',
        'yellow': '#FFC255'
      },
      fontFamily: {
        // Remplacer la police sans-serif par défaut par Blatant
        // Inclure les polices système comme fallback
        sans: ['Blatant', ...defaultTheme.fontFamily.sans],
        // Définir une police "display" pour Pique
        display: ['Pique', 'cursive'], // Fallback 'cursive' générique
      },
      // Définition des keyframes et animations (ajoutées précédemment)
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
    },
  },
  plugins: [],
};
