import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, MapPin, CreditCard, Loader, ChefHat, AlertCircle, ArrowLeft, Plus, Minus, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mocks (remplacer par vos types réels si différents)
interface Meal { id: string; title: string; image: string; price: number; preparationTime: number; allergens: string[]; distance?: number; }
interface Chef { id: string; name: string; avatar: string; rating: number; reviewCount: number; }

// Sous-composants pour la clarté

const OrderStep = ({ step, title, isActive, isCompleted }: { step: number, title: string, isActive?: boolean, isCompleted?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * step }}
    className="flex items-center"
  >
    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isActive ? 'border-yellow bg-yellow text-deep-green' : isCompleted ? 'border-deep-green bg-deep-green text-white' : 'border-gray-300 bg-white text-gray-400'} transition-all duration-300`}>
      <span className="font-bold text-sm">{isCompleted ? '✓' : step}</span>
    </div>
    <span className={`ml-3 text-sm font-medium ${isActive ? 'text-deep-green' : isCompleted ? 'text-deep-green' : 'text-gray-500'} transition-colors duration-300`}>{title}</span>
  </motion.div>
);

const Stepper = ({ currentStep }: { currentStep: number }) => (
  <div className="flex items-center justify-center space-x-2 mb-12">
    <OrderStep step={1} title="Panier" isActive={currentStep === 1} isCompleted={currentStep > 1} />
    <div className="flex-1 h-0.5 bg-gradient-to-r from-deep-green via-gray-300 to-gray-300 rounded-full" />
    <OrderStep step={2} title="Paiement" isActive={currentStep === 2} isCompleted={currentStep > 2} />
    <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 rounded-full" />
    <OrderStep step={3} title="Confirmation" isActive={currentStep === 3} isCompleted={currentStep > 3} />
  </div>
);

const MealSummary = ({ meal, chef }: { meal: Meal, chef: Chef }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
  >
    <img
      src={meal.image}
      alt={meal.title}
      className="w-36 h-36 rounded-xl object-cover shadow-md flex-shrink-0"
    />
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-deep-green mb-2 leading-tight">{meal.title}</h2>
      <div className="flex items-center text-sm text-deep-green/80 mb-3">
        <img
          src={chef.avatar}
          alt={chef.name}
          className="h-6 w-6 rounded-full mr-2 border border-gray-200"
        />
        <span>Par <span className="font-semibold">{chef.name}</span> ({chef.rating}★)</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <Clock className="h-4 w-4 mr-1.5 text-orange" />
        <span>Prêt en {meal.preparationTime} min</span>
      </div>
      {meal.distance && (
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1.5 text-orange" />
          <span>Retrait à {meal.distance} km (Adresse fictive)</span>
        </div>
      )}
       {meal.allergens.length > 0 && (
        <div className="mt-2 flex items-start text-xs text-orange bg-orange-50 p-2 rounded-lg border border-orange-100">
          <AlertCircle className="h-4 w-4 mr-1.5 text-orange flex-shrink-0 mt-px" />
          <div>
            <span className="font-medium">Allergènes:</span>
            <span className="ml-1">{meal.allergens.join(', ')}</span>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const QuantitySelector = ({ quantity, setQuantity }: { quantity: number, setQuantity: (q: number) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
>
    <span className="text-base font-medium text-deep-green">Quantité</span>
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
        className="p-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="text-lg font-bold text-deep-green w-8 text-center">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="p-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  </motion.div>
);

const PriceBreakdown = ({ meal, price, quantity }: { meal: Meal, price: number, quantity: number }) => {
  const subtotal = price * quantity;
  const serviceFee = 0.99; // Exemple
  const total = subtotal + serviceFee;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-6 bg-gradient-to-br from-beige/10 to-white rounded-2xl shadow-sm border border-gray-100 space-y-3"
  >
      <h3 className="text-lg font-semibold text-deep-green mb-4">Récapitulatif</h3>
      <div className="flex justify-between text-sm text-deep-green/80">
        <span>{meal.title} x {quantity}</span>
        <span>{subtotal.toFixed(2)}€</span>
      </div>
      <div className="flex justify-between text-sm text-deep-green/80">
        <span>Frais de service</span>
        <span className="flex items-center" title="Inclut les frais de plateforme et de transaction">
           {serviceFee.toFixed(2)}€
          <Info className="h-3.5 w-3.5 ml-1 text-gray-400 cursor-help" />
        </span>
      </div>
      <div className="border-t border-deep-green/10 pt-4 mt-4 flex justify-between text-xl font-bold text-deep-green">
        <span>Total à payer</span>
        <span>{total.toFixed(2)}€</span>
      </div>
    </motion.div>
  );
};

const PaymentSection = ({ isProcessing, handlePayment }: { isProcessing: boolean, handlePayment: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="mt-8"
  >
    {/* Placeholder pour la sélection et la saisie des infos de paiement */}
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
       <h3 className="text-lg font-semibold text-deep-green mb-4">Paiement par Carte Bancaire</h3>
       <div className="space-y-4">
          {/* Simuler des champs de carte */}
          <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="flex gap-4">
            <div className="flex-1 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="flex-1 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 flex items-center">
             <CreditCard className="h-4 w-4 mr-1.5 text-gray-400" /> Paiement sécurisé via Stripe (simulation).
           </p>
       </div>
    </div>

    <motion.button
      onClick={handlePayment}
      disabled={isProcessing}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isProcessing ? (
        <span className="flex items-center justify-center">
          <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
          Paiement en cours...
        </span>
      ) : (
        'Confirmer et Payer'
      )}
    </motion.button>
     <p className="text-xs text-center text-gray-500 mt-4">
      En confirmant, vous acceptez les <a href="#" className="text-deep-green hover:underline">CGV</a>.
    </p>
  </motion.div>
);

// --- Composant Principal --- 

export function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Utiliser des types plus robustes et des valeurs par défaut
  const { meal, chef } = (location.state as { meal: Meal, chef: Chef }) || {};
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const currentStep = 2; // Fixé à l'étape Paiement pour cette page

  // Sécurité: Rediriger si données manquantes
  if (!meal || !chef) {
    console.error("Données de commande manquantes, redirection...");
    // Idéalement, afficher un message à l'utilisateur avant de rediriger
    useEffect(() => { navigate('/catalogue'); }, [navigate]);
    return null; 
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulation
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success', {
        state: {
          orderId: Math.random().toString(36).substring(2, 9).toUpperCase(),
          meal,
          chef,
          quantity,
          total: (meal.price * quantity + 0.99) // Recalculer le total ici
        }
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/20 via-white to-beige/10 pt-24 pb-16 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <motion.button
          onClick={() => navigate(-1)} // Retour page précédente
          className="flex items-center text-sm text-deep-green hover:text-deep-green-light mb-6 group"
          whileHover={{ x: -3 }}
        >
          <ArrowLeft className="h-4 w-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
          Retour au plat
        </motion.button>
        
        <Stepper currentStep={currentStep} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Colonne Gauche: Détails */}
          <div className="space-y-6">
            <MealSummary meal={meal} chef={chef} />
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>

          {/* Colonne Droite: Paiement */}
          <div className="space-y-6">
            <PriceBreakdown meal={meal} price={meal.price} quantity={quantity} />
            <PaymentSection isProcessing={isProcessing} handlePayment={handlePayment} />
          </div>
        </div>
      </div>
    </div>
  );
} 