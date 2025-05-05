import { useState, useEffect } from 'react';
import { User, ChefHat, Upload, X, ArrowLeft, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Location } from '../../types/index';

interface RegisterForm {
  userType: 'consumer' | 'chef' | null;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: File | null;
  idDocument: File | null;
  location: Location;
  // Champs spécifiques pour les chefs
  bio?: string;
  specialties?: string[];
  experience?: string;
}

export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<RegisterForm>({
    userType: null,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: null,
    idDocument: null,
    location: {
      latitude: 0,
      longitude: 0,
      address: '',
      city: '',
      postalCode: ''
    },
    bio: '',
    specialties: [],
    experience: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'un délai d'appel API
    setTimeout(() => {
      // Simuler un utilisateur inscrit
      const newUser = {
        id: '1',
        name: form.name,
        email: form.email,
        avatar: form.avatar ? URL.createObjectURL(form.avatar) : 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: form.userType
      };

      // Stocker les infos utilisateur dans localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('isLoggedIn', 'true');

      // Vérifier s'il y avait une tentative de commande
      const lastAttemptedOrder = localStorage.getItem('lastAttemptedOrder');
      if (lastAttemptedOrder) {
        const { mealId, meal, chef } = JSON.parse(lastAttemptedOrder);
        localStorage.removeItem('lastAttemptedOrder');
        navigate(`/order/${mealId}`, { state: { meal, chef } });
      } else {
        navigate('/profile');
      }

      setIsLoading(false);
    }, 1000);
  };

  // Étape 1 : Choix du type d'utilisateur
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-12">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl"
          >
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.div>
                <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow to-orange-400"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
            </div>

            <motion.h1 
              className="text-4xl font-bold text-gray-900 text-center mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bienvenue !
            </motion.h1>
            <motion.p 
              className="text-center text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Commençons par choisir votre profil
            </motion.p>
            
            <div className="space-y-4">
              <motion.button
                onClick={() => {
                  setForm(prev => ({ ...prev, userType: 'consumer' }));
                  setStep(2);
                }}
                className="w-full p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow/10 to-orange-400/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center space-x-4 relative">
                  <div className="bg-orange-100 rounded-lg p-3 group-hover:bg-orange-200 transition-colors">
                    <User className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Consommateur</h3>
                    <p className="text-sm text-gray-600">
                      Découvrez et commandez des plats faits maison près de chez vous
                    </p>
                  </div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => {
                  setForm(prev => ({ ...prev, userType: 'chef' }));
                  setStep(2);
                }}
                className="w-full p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow/10 to-orange-400/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center space-x-4 relative">
                  <div className="bg-orange-100 rounded-lg p-3 group-hover:bg-orange-200 transition-colors">
                    <ChefHat className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Cuisinier</h3>
                    <p className="text-sm text-gray-600">
                      Partagez votre passion et vendez vos créations culinaires
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>

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
              <p className="text-sm text-gray-600">
                Déjà membre ?{' '}
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-gradient-to-r from-yellow to-orange-400 text-deep-green hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98] font-medium"
                >
                  Se connecter
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Étape 2 : Informations de base
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl"
          >
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow to-orange-400 rounded-full"></div>
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.div>
                <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => setStep(1)}
              className="mb-6 text-gray-500 hover:text-gray-700 flex items-center space-x-2 transition-colors"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </motion.button>

            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {form.userType === 'consumer' ? 'Créez votre compte' : 'Rejoignez nos chefs'}
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {form.userType === 'consumer' 
                ? 'Pour commander vos plats préférés'
                : 'Pour partager votre passion culinaire'
              }
            </motion.p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={form.password}
                    onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={form.confirmPassword}
                    onChange={(e) => setForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </motion.div>
              </div>

              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green py-4 px-6 rounded-xl hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98]"
                >
                  Continuer
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  // Étape 3 : Vérification d'identité et informations complémentaires
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:shadow-2xl"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Check className="w-5 h-5" />
              </motion.div>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow to-orange-400 rounded-full"></div>
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Check className="w-5 h-5" />
              </motion.div>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow to-orange-400 rounded-full"></div>
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow to-orange-400 text-white flex items-center justify-center font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                3
              </motion.div>
            </div>
          </div>

          <motion.button
            onClick={() => setStep(2)}
            className="mb-6 text-gray-500 hover:text-gray-700 flex items-center space-x-2 transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </motion.button>

          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {form.userType === 'consumer' ? 'Presque terminé !' : 'Dernière étape !'}
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {form.userType === 'consumer' 
              ? 'Ajoutez votre photo de profil'
              : 'Complétez votre profil de chef'
            }
          </motion.p>

          <form className="space-y-6">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Avatar */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    {form.avatar ? (
                      <img
                        src={URL.createObjectURL(form.avatar)}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  <motion.button
                    type="button"
                    className="absolute bottom-0 right-0 bg-gradient-to-r from-yellow to-orange-400 text-white p-2 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Upload className="w-5 h-5" />
                  </motion.button>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Ajoutez une photo de profil pour que les autres utilisateurs puissent vous reconnaître
                </p>
              </div>

              {form.userType === 'chef' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">Biographie</label>
                    <textarea
                      placeholder="Parlez-nous de votre passion pour la cuisine..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
                      value={form.bio}
                      onChange={(e) => setForm(prev => ({ ...prev, bio: e.target.value }))}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">Spécialités</label>
                    <input
                      type="text"
                      placeholder="Ex: Cuisine française, Pâtisserie, Végétarien..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      value={form.specialties?.join(', ')}
                      onChange={(e) => setForm(prev => ({ ...prev, specialties: e.target.value.split(', ') }))}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expérience</label>
                    <input
                      type="text"
                      placeholder="Ex: 5 ans d'expérience en restauration..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      value={form.experience}
                      onChange={(e) => setForm(prev => ({ ...prev, experience: e.target.value }))}
                    />
                  </motion.div>
                </>
              )}
            </motion.div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green py-4 px-6 rounded-xl hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-green focus:ring-yellow/50 active:scale-[0.98]"
              >
                Terminer l'inscription
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}