import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function OrderSuccess() {
  const location = useLocation();
  const { orderId, meal, chef } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Commande confirmée !
          </h1>
          <p className="text-gray-600 mb-6">
            Votre commande #{orderId} a été transmise à {chef.name}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              Vous recevrez un email de confirmation avec les détails de votre commande
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/profile"
              className="block w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Suivre ma commande
            </Link>
            <Link
              to="/catalogue"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Retour au catalogue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 