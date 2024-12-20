import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, ChefHat, Clock, MapPin } from 'lucide-react';

export function OrderSuccess() {
  const location = useLocation();
  const { orderId, meal, chef } = location.state || {};

  // Protection contre les accès directs
  if (!orderId || !meal || !chef) {
    return <Navigate to="/catalogue" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* En-tête avec animation */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
            <div className="mb-4 animate-bounce">
              <CheckCircle className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Commande confirmée !</h1>
            <p className="text-green-100">
              Votre commande #{orderId} a été transmise à {chef.name}
            </p>
          </div>

          {/* Détails de la commande */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Résumé de la commande */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{meal.title}</h3>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Préparation: {meal.preparationTime} min</span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-900">
                    {meal.price}€
                  </div>
                </div>
              </div>

              {/* Informations du chef */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">
                  Préparé par
                </h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={chef.avatar}
                    alt={chef.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{chef.name}</p>
                    <div className="flex items-center mt-1">
                      <ChefHat className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="text-sm text-gray-500">Chef vérifié</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adresse de retrait */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">
                  Adresse de retrait
                </h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900">123 rue de la Paix</p>
                    <p className="text-gray-600">75001 Paris</p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-medium text-blue-900 mb-2">
                  Prochaines étapes
                </h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Vous recevrez un email de confirmation</li>
                  <li>• Le chef vous contactera quand le plat sera prêt</li>
                  <li>• Présentez-vous à l'adresse indiquée</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  to="/profile"
                  className="block w-full bg-orange-600 text-white text-center py-3 px-4 rounded-xl font-medium hover:bg-orange-700 transition-colors"
                >
                  Suivre ma commande
                </Link>
                <Link
                  to="/catalogue"
                  className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Retour au catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 