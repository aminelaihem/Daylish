import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Benefits } from './components/home/Benefits';
import { Testimonials } from './components/home/Testimonials';
import { MealFilters } from './components/meals/MealFilters';
import { MealGrid } from './components/meals/MealGrid';
import { Catalogue } from './components/layout/Catalogue';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Profile } from './components/auth/Profile';
import { OrderConfirmation } from './components/order/OrderConfirmation';
import { OrderSuccess } from './components/order/OrderSuccess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={
            <main>
              <Hero />
              <Benefits />
              <Testimonials />
            </main>
          } />
          
          {/* Page Catalogue */}
          <Route path="/catalogue" element={<Catalogue />} />
          
          {/* Routes d'authentification */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* Routes de commande */}
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;