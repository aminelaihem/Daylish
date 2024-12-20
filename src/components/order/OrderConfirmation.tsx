import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CreditCard, Loader } from 'lucide-react';

export function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { meal, chef, user } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);

  // Si pas de données, rediriger vers le catalogue
  if (!meal || !chef || !user) {
    navigate('/catalogue');
    return null;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simuler un paiement
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success', {
        state: {
          orderId: Math.random().toString(36).substring(7),
          meal,
          chef
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* En-tête */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Validation de la commande</h1>

          {/* Résumé de la commande */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Résumé</h2>
            <div className="flex items-start space-x-4">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{meal.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Par {chef.name}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Préparation: {meal.preparationTime} min</span>
                </div>
              </div>
              <div className="ml-auto">
                <span className="text-xl font-bold text-gray-900">{meal.price}€</span>
              </div>
            </div>
          </div>

          {/* Adresse de livraison */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Adresse de retrait</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-gray-900">123 rue de la Paix</p>
                <p className="text-gray-600">75001 Paris</p>
              </div>
            </div>
          </div>

          {/* Paiement */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Paiement</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    checked
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                  />
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-gray-900">Carte bancaire</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Total et validation */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium text-gray-900">{meal.price}€</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Frais de service</span>
              <span className="font-medium text-gray-900">0.99€</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>{(meal.price + 0.99).toFixed(2)}€</span>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Traitement en cours...
                </span>
              ) : (
                `Payer ${(meal.price + 0.99).toFixed(2)}€`
              )}
            </button>

            <p className="mt-4 text-sm text-gray-500 text-center">
              En validant votre commande, vous acceptez nos{' '}
              <a href="#" className="text-orange-600 hover:text-orange-500">
                conditions générales
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 