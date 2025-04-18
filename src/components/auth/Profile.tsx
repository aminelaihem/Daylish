import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, ShoppingBag, Heart, Edit, MapPin, Bell, Lock, Star } from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'settings' | 'notifications' | 'security'>('orders');
  const [isEditing, setIsEditing] = useState(false);

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

  const tabs = [
    { id: 'orders', label: 'Mes commandes', icon: ShoppingBag },
    { id: 'favorites', label: 'Favoris', icon: Heart },
    { id: 'settings', label: 'Paramètres', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
        >
          <div className="relative h-32 bg-gradient-to-r from-yellow to-orange-400">
            {/* Photo de profil */}
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow to-orange-400 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 px-8 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-deep-green">
                  {user.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  {user.email}
                </p>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Paris, France</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Déconnexion</span>
              </button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Commandes', value: '12', icon: ShoppingBag },
                { label: 'Favoris', value: '8', icon: Heart },
                { label: 'Évaluations', value: '4.8', icon: Star },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl font-bold text-deep-green">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation et Contenu */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu latéral */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <nav className="flex flex-col">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                      activeTab === tab.id
                        ? 'bg-yellow text-deep-green'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="md:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-xl font-bold text-deep-green mb-6">Historique des commandes</h2>
                    <div className="space-y-4">
                      {/* Ici, vous pouvez ajouter la liste des commandes */}
                      <div className="text-center text-gray-500">
                        Aucune commande récente
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'favorites' && (
                  <div>
                    <h2 className="text-xl font-bold text-deep-green mb-6">Vos plats favoris</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Ici, vous pouvez ajouter la liste des plats favoris */}
                      <div className="text-center text-gray-500">
                        Aucun plat favori pour le moment
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-deep-green">Paramètres du compte</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                        <input
                          type="tel"
                          className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Adresse</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                        />
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Enregistrer les modifications
                    </motion.button>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-xl font-bold text-deep-green mb-6">Préférences de notification</h2>
                    <div className="space-y-4">
                      {[
                        { label: 'Notifications par email', description: 'Recevoir des mises à jour par email' },
                        { label: 'Notifications push', description: 'Recevoir des notifications sur votre appareil' },
                        { label: 'Offres spéciales', description: 'Être informé des offres spéciales' },
                      ].map((pref, index) => (
                        <motion.div
                          key={pref.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                        >
                          <div>
                            <h3 className="font-medium text-deep-green">{pref.label}</h3>
                            <p className="text-sm text-gray-600">{pref.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow"></div>
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-xl font-bold text-deep-green mb-6">Sécurité du compte</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-deep-green mb-2">Changer le mot de passe</h3>
                        <div className="space-y-4">
                          <input
                            type="password"
                            placeholder="Ancien mot de passe"
                            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                          />
                          <input
                            type="password"
                            placeholder="Nouveau mot de passe"
                            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                          />
                          <input
                            type="password"
                            placeholder="Confirmer le nouveau mot de passe"
                            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow"
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        Mettre à jour le mot de passe
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}