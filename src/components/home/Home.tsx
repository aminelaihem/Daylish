import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, Star, Clock, Shield } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des plats faits maison,<br />près de chez vous
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Découvrez et commandez des plats authentiques préparés par des chefs passionnés de votre quartier
            </p>
            <Link
              to="/catalogue"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Explorer les plats
            </Link>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trouvez</h3>
              <p className="text-gray-600">
                Parcourez notre sélection de plats faits maison près de chez vous
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choisissez</h3>
              <p className="text-gray-600">
                Sélectionnez vos plats préférés parmi nos chefs talentueux
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Récupérez</h3>
              <p className="text-gray-600">
                Retirez votre commande directement auprès de votre chef local
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Devenez chef - Section améliorée */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-12 text-white">
                <div className="flex items-center mb-6">
                  <ChefHat className="h-10 w-10 mr-3" />
                  <h2 className="text-4xl font-bold">
                    Devenez chef
                  </h2>
                </div>
                
                <p className="text-xl text-orange-100 mb-8">
                  Transformez votre passion pour la cuisine en une activité rémunératrice
                </p>

                {/* Avantages */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Flexibilité totale</h3>
                      <p className="text-orange-100 text-sm">
                        Gérez vos horaires et votre menu comme vous le souhaitez
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Revenus attractifs</h3>
                      <p className="text-orange-100 text-sm">
                        Des prix abordables pour vos clients et une rémunération équitable pour vous
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Communauté active</h3>
                      <p className="text-orange-100 text-sm">
                        Rejoignez un réseau de chefs passionnés
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all transform hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg duration-200"
                >
                  Commencer l'aventure
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="md:w-1/2 relative">
                <div className="aspect-w-4 aspect-h-3 md:aspect-h-full">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2850"
                    alt="Chef préparant un plat"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent md:bg-gradient-to-r md:from-orange-600/20 md:to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 