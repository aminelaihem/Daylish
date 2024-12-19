import React from 'react';
import { Menu, User, ChefHat } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et Menu Mobile */}
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Cuisine<span className="text-orange-500">Connect</span>
              </Link>
            </div>
          </div>

          {/* Navigation principale - cachée sur mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/catalogue" className="text-gray-700 hover:text-orange-600">
              Catalogue des plats
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-orange-600">
              Comment ça marche
            </Link>
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/become-chef')}
              className="hidden sm:block px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-full"
            >
              Devenir cuisinier
            </button>
            <div className="flex items-center space-x-2">
              <Link 
                to="/login"
                className="px-4 py-2 text-gray-600 hover:text-orange-600"
              >
                Connexion
              </Link>
              <Link 
                to="/register"
                className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}