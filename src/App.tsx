import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Benefits } from './components/home/Benefits';
import { Testimonials } from './components/home/Testimonials';
import { MealFilters } from './components/meals/MealFilters';
import { MealGrid } from './components/meals/MealGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <MealFilters />
        <MealGrid />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;