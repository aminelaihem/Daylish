/** @type {import('tailwindcss').Config} */
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
        // Assurez-vous que les noms ici correspondent EXACTEMENT aux `font-family` définis dans @font-face
        'vogue': ['Vogue', 'cursive'], // Police pour titres très stylés
        'blatant-bold': ['Blatant Bold', 'sans-serif'], // Police pour titres/sous-titres
        'blatant': ['Blatant Regular', 'sans-serif'] // Police pour le corps de texte
      }
    },
  },
  plugins: [],
};
