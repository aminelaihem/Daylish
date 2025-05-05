import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Catalogue } from './components/layout/Catalogue';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Profile } from './components/auth/Profile';
import { OrderConfirmation } from './components/order/OrderConfirmation';
import { OrderSuccess } from './components/order/OrderSuccess';
import { Home } from './components/home/Home';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFF9EF] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            
            {/* Routes d'authentification */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* Routes de commande */}
            <Route path="/order/:id" element={<OrderConfirmation />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;