import React, { useState, useEffect } from 'react';
import { User, MapPin, Star, Clock, Settings, LogOut } from 'lucide-react';
import type { Consumer, Order } from '../../types';

export function Profile() {
  const [user, setUser] = useState<Consumer | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'settings'>('orders');

  // TODO: Charger les données de l'utilisateur et ses commandes
  useEffect(() => {
    // fetchUserData();
    // fetchOrders();
  }, []);

  const handleLogout = () => {
    // TODO: Implémenter la déconnexion
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du profil */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{user?.location.city}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5 mr-1" />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex divide-x divide-gray-200">
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'orders' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'
              }`}
            >
              <Clock className="h-5 w-5 mx-auto mb-1" />
              Commandes
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'favorites' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'
              }`}
            >
              <Star className="h-5 w-5 mx-auto mb-1" />
              Favoris
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'settings' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'
              }`}
            >
              <Settings className="h-5 w-5 mx-auto mb-1" />
              Paramètres
            </button>
          </nav>
        </div>

        {/* Contenu principal */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Mes commandes</h2>
              {orders.length === 0 ? (
                <p className="text-gray-500">Aucune commande pour le moment</p>
              ) : (
                <div className="space-y-4">
                  {orders.map(order => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{order.mealId}</h3>
                          <p className="text-sm text-gray-500">
                            Commandé le {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-xl font-semibold">Mes plats favoris</h2>
              {/* TODO: Implémenter l'affichage des favoris */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Paramètres du compte</h2>
              {/* TODO: Implémenter les paramètres du compte */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}