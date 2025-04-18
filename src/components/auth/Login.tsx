import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ChefHat, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulation d'un délai d'appel API
    setTimeout(() => {
      // Simuler un utilisateur connecté
      const fakeUser = {
        id: '1',
        name: 'Jean Dupont',
        email: form.email,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: 'consumer'
      };

      // Stocker les infos utilisateur dans localStorage
      localStorage.setItem('user', JSON.stringify(fakeUser));
      localStorage.setItem('isLoggedIn', 'true');

      // Vérifier s'il y avait une tentative de commande
      const lastAttemptedOrder = localStorage.getItem('lastAttemptedOrder');
      if (lastAttemptedOrder) {
        const { mealId } = JSON.parse(lastAttemptedOrder);
        localStorage.removeItem('lastAttemptedOrder');
        navigate(`/order/${mealId}`);
      } else {
        navigate('/profile');
      }

      setIsLoading(false);
    }, 1000); // Délai d'une seconde pour simuler le chargement
  };

  // Afficher le message de redirection si présent
  const message = location.state?.message;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl"
        >
          {/* Logo et En-tête */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-r from-yellow to-orange-400 rounded-full p-3 shadow-lg">
                <ChefHat className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Bon retour parmi nous !</h1>
            <p className="text-gray-600">Connectez-vous pour accéder à vos plats préférés</p>
          </motion.div>

          {/* Messages */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <p className="text-sm text-red-600 text-center">{error}</p>
              </motion.div>
            )}

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-xl"
              >
                <p className="text-sm text-orange-600 text-center">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </motion.div>

            {/* Mot de passe */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-orange-600 hover:text-orange-700 hover:underline transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </motion.div>

            {/* Se souvenir de moi */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded transition-colors"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </motion.div>

            {/* Bouton de connexion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green py-4 px-6 rounded-xl hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Connexion en cours...
                  </span>
                ) : (
                  'Se connecter'
                )}
              </button>
            </motion.div>
          </form>

          {/* Lien d'inscription */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-sm text-gray-500 px-4">ou</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-gradient-to-r from-yellow to-orange-400 text-deep-green hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98] font-medium"
              >
                Créer un compte
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}