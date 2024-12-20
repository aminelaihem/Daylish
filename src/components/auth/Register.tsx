import { useState } from 'react';
import { User, ChefHat, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  const [step, setStep] = useState(1);
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

  // Étape 1 : Choix du type d'utilisateur (reste identique mais avec des animations)
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-md mx-auto">
          {/* Indicateur de progression */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">1</div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">2</div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">3</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Bienvenue !</h1>
            <p className="text-center text-gray-600 mb-8">Commençons par choisir votre profil</p>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  setForm(prev => ({ ...prev, userType: 'consumer' }));
                  setStep(2);
                }}
                className="w-full p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
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
              </button>

              <button
                onClick={() => {
                  setForm(prev => ({ ...prev, userType: 'chef' }));
                  setStep(2);
                }}
                className="w-full p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
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
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Déjà membre ?{' '}
                <Link to="/login" className="text-orange-600 hover:text-orange-500 font-medium">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Étape 2 : Informations de base
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Indicateur de progression mis à jour */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">✓</div>
              <div className="w-16 h-1 bg-orange-500"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">2</div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">3</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <button
              onClick={() => setStep(1)}
              className="mb-6 text-gray-500 hover:text-gray-700 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {form.userType === 'consumer' ? 'Créez votre compte' : 'Rejoignez nos chefs'}
            </h1>
            <p className="text-gray-600 mb-8">
              {form.userType === 'consumer' 
                ? 'Pour commander vos plats préférés'
                : 'Pour partager votre passion culinaire'
              }
            </p>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.password}
                    onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.confirmPassword}
                    onChange={(e) => setForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                  Continuer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Étape 3 : Vérification d'identité et informations complémentaires
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto">
        {/* Indicateur de progression final */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">✓</div>
            <div className="w-16 h-1 bg-green-500"></div>
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">✓</div>
            <div className="w-16 h-1 bg-orange-500"></div>
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">3</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <button
            onClick={() => setStep(2)}
            className="mb-6 text-gray-500 hover:text-gray-700 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour</span>
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dernière étape !</h1>
          <p className="text-gray-600 mb-8">
            Ajoutez une photo et vérifiez votre identité pour finaliser votre inscription
          </p>

          <form className="space-y-8" onSubmit={(e) => {
            e.preventDefault();
            // TODO: Soumettre le formulaire
          }}>
            {/* Photo de profil */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Photo de profil
                <span className="text-xs text-gray-500 ml-2">(Facultatif)</span>
              </label>
              <div className="flex items-center space-x-6">
                <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative group">
                  {form.avatar ? (
                    <>
                      <img
                        src={URL.createObjectURL(form.avatar)}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, avatar: null }))}
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-8 w-8 text-white" />
                      </button>
                    </>
                  ) : (
                    <User className="h-16 w-16 text-gray-400" />
                  )}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="inline-flex items-center px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors">
                    <Upload className="h-5 w-5 mr-2" />
                    <span>Choisir une photo</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setForm(prev => ({ ...prev, avatar: file }));
                      }}
                    />
                  </label>
                  <p className="text-xs text-gray-500">
                    JPG ou PNG, max 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Document d'identité */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Document d'identité
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-orange-500 transition-colors">
                <div className="space-y-1 text-center">
                  {form.idDocument ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-orange-600">
                        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">
                        {form.idDocument.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, idDocument: null }))}
                        className="text-sm text-red-600 hover:text-red-500"
                      >
                        Supprimer
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500">
                          <span>Télécharger un fichier</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*,.pdf"
                            required
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) setForm(prev => ({ ...prev, idDocument: file }));
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        CNI, Passeport ou Permis de conduire (PDF, JPG ou PNG)
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Votre adresse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse complète
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123 rue de la Paix"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.location.address}
                    onChange={(e) => setForm(prev => ({
                      ...prev,
                      location: { ...prev.location, address: e.target.value }
                    }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Paris"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.location.city}
                    onChange={(e) => setForm(prev => ({
                      ...prev,
                      location: { ...prev.location, city: e.target.value }
                    }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="75000"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={form.location.postalCode}
                    onChange={(e) => setForm(prev => ({
                      ...prev,
                      location: { ...prev.location, postalCode: e.target.value }
                    }))}
                  />
                </div>
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Finaliser l'inscription
              </button>
              <p className="mt-4 text-sm text-gray-500 text-center">
                En vous inscrivant, vous acceptez nos{' '}
                <a href="#" className="text-orange-600 hover:text-orange-500">
                  conditions d'utilisation
                </a>{' '}
                et notre{' '}
                <a href="#" className="text-orange-600 hover:text-orange-500">
                  politique de confidentialité
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
