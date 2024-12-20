import React, { useState, useEffect } from 'react';
import { MapPin, Settings, LogOut, ShoppingBag, Heart, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'settings'>('orders');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête du profil */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="relative group mb-4 md:mb-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-32 w-32 rounded-full object-cover border-4 border-orange-100 group-hover:border-orange-200 transition-colors"
                />
                <button className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Client fidèle
                  </span>
                  <span className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-6 md:mt-0 flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Se déconnecter
            </button>
          </div>
        </div>

        {/* Navigation et Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu latéral */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <nav className="flex flex-col">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Mes commandes</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Favoris</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Paramètres</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes commandes</h2>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Vous n'avez pas encore de commande</p>
                      <button
                        onClick={() => navigate('/catalogue')}
                        className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        Explorer le catalogue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes plats favoris</h2>
                  <div className="text-center py-8">
                    <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Vous n'avez pas encore de favoris</p>
                    <button
                      onClick={() => navigate('/catalogue')}
                      className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Découvrir des plats
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres du compte</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Informations personnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                          <input
                            type="text"
                            value={user.name}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={user.email}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                        Sauvegarder les modifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}