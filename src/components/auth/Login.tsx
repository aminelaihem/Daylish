import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ChefHat } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-24 pb-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all">
          {/* Logo et En-tête */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 rounded-full p-3">
                <ChefHat className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bon retour parmi nous !</h1>
            <p className="text-gray-600">Connectez-vous pour accéder à vos plats préférés</p>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600 text-center">{error}</p>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm text-orange-600 text-center">{message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Se souvenir de moi */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>

            {/* Bouton de connexion modifié avec état de chargement */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion en cours...
                </span>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          {/* Lien d'inscription */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <Link 
                to="/register" 
                className="text-orange-600 hover:text-orange-700 font-medium hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}