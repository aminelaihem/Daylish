import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChefHat, ShoppingBag, User, LogOut } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">CuisineConnect</span>
          </Link>

          {/* Navigation centrale */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/catalogue"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/catalogue'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Catalogue des Plats
            </Link>
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-3">
            {/* Bouton "Devenez chef" */}
            {(!isLoggedIn || (isLoggedIn && user.role !== 'chef')) && (
              <Link
                to="/register"
                className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
              >
                <ChefHat className="h-5 w-5 mr-2" />
                Devenez chef
              </Link>
            )}

            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </button>

                {/* Menu déroulant */}
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-1">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">Mon profil</span>
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm font-medium">Se déconnecter</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Se connecter
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}