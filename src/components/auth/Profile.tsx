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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du profil */}
        <div className="relative mb-8">
          {/* Bannière */}
          <div className="h-40 sm:h-56 rounded-2xl overflow-hidden relative bg-gradient-to-r from-yellow to-orange-400">
            <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] bg-repeat opacity-20"></div>
            <div className="absolute inset-x-0 -bottom-px h-12 bg-gradient-to-t from-white"></div>
          </div>

          {/* Carte de profil */}
          <div className="relative -mt-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-orange-100/30">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                  {/* Avatar et badges */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="relative">
                      <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-gradient-to-r from-yellow to-orange-400 p-1 shadow-lg">
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden">
                          <User className="w-12 h-12 sm:w-14 sm:h-14 text-deep-green" />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow/10 to-orange-400/10"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </div>
                      {/* Badge en ligne */}
                      <div className="absolute -right-1 -top-1">
                        <div className="bg-green-400 w-4 h-4 sm:w-5 sm:h-5 rounded-lg border-2 sm:border-3 border-white shadow-md"></div>
                      </div>
                    </div>
                  </div>

                  {/* Informations utilisateur */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:gap-4 mb-2">
                          <h1 className="text-2xl sm:text-3xl font-bold text-deep-green">
                            {user.name}
                          </h1>
                          <span className="mt-1 sm:mt-0 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-yellow/10 to-orange-400/10 text-deep-green border border-orange-100/30">
                            Premium
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-gray-600 text-sm">
                          <p>{user.email}</p>
                          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1.5" />
                            <span>Paris, France</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {['Foodie', 'Gourmet', 'Amateur de cuisine'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg text-xs sm:text-sm text-deep-green bg-gradient-to-r from-yellow/5 to-orange-400/5 border border-orange-100/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bouton de déconnexion */}
                  <div className="flex-shrink-0 flex justify-center sm:justify-end mt-4 sm:mt-0">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogout}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-red-500 bg-red-50 hover:bg-red-100 transition-colors text-sm font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Déconnexion</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
            {[
              { label: 'Commandes', value: '12', icon: ShoppingBag },
              { label: 'Favoris', value: '8', icon: Heart },
              { label: 'Évaluations', value: '4.8', icon: Star },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all border border-orange-100/30"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow to-orange-400 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-lg sm:text-2xl font-bold text-deep-green text-center">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-600 text-center mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation et Contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Menu latéral */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border border-orange-100/30 overflow-hidden">
                <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-yellow/10 to-orange-400/10 text-deep-green font-medium'
                          : 'text-gray-600 hover:bg-orange-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">{tab.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-8 border border-orange-100/30"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}