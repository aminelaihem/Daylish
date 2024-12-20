import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CreditCard, Loader, ChefHat, AlertCircle } from 'lucide-react';

export function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { meal, chef, user } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  // Protection contre les accès directs
  if (!meal || !chef || !user) {
    navigate('/catalogue');
    return null;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulation du paiement
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
        {/* Étapes de commande */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-orange-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-medium">1</div>
              <div className="ml-2 text-sm font-medium text-gray-900">Validation</div>
            </div>
            <div className="mx-4 h-1 w-16 bg-orange-600"></div>
            <div className="flex items-center">
              <div className="bg-orange-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-medium">2</div>
              <div className="ml-2 text-sm font-medium text-gray-900">Paiement</div>
            </div>
            <div className="mx-4 h-1 w-16 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-400 font-medium">3</div>
              <div className="ml-2 text-sm font-medium text-gray-400">Confirmation</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* En-tête */}
          <div className="border-b border-gray-200">
            <div className="px-8 py-6">
              <h1 className="text-2xl font-bold text-gray-900">Validation de la commande</h1>
              <p className="mt-1 text-sm text-gray-500">
                Vérifiez les détails de votre commande avant de procéder au paiement
              </p>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-8 space-y-8">
            {/* Résumé de la commande */}
            <div className="flex items-start space-x-6">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{meal.title}</h2>
                <div className="mt-1 flex items-center">
                  <img
                    src={chef.avatar}
                    alt={chef.name}
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">Préparé par {chef.name}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Temps de préparation: {meal.preparationTime} min</span>
                </div>
                {meal.allergens.length > 0 && (
                  <div className="mt-2 flex items-center text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Allergènes: {meal.allergens.join(', ')}</span>
                  </div>
                )}
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{meal.price}€</span>
              </div>
            </div>

            {/* Adresse de retrait */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Adresse de retrait</h3>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-900">123 rue de la Paix</p>
                  <p className="text-gray-600">75001 Paris</p>
                  <p className="text-sm text-gray-500 mt-1">Distance: {meal.distance} km</p>
                </div>
              </div>
            </div>

            {/* Méthodes de paiement */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Moyen de paiement</h3>
              <div className="space-y-3">
                <label className="block">
                  <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-200'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod('card')}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <CreditCard className={`h-5 w-5 ${
                        paymentMethod === 'card' ? 'text-orange-500' : 'text-gray-400'
                      }`} />
                      <span className="ml-3 font-medium text-gray-900">Carte bancaire</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Récapitulatif des prix */}
            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="text-gray-900">{meal.price}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Frais de service</span>
                  <span className="text-gray-900">0.99€</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4">
                  <span>Total</span>
                  <span>{(meal.price + 0.99).toFixed(2)}€</span>
                </div>
              </div>
            </div>

            {/* Bouton de paiement */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl font-medium
                hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
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

            <p className="text-xs text-center text-gray-500">
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