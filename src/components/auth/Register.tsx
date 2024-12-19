import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import type { Location } from '../../types';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: File | null;
  idDocument: File | null;
  location: Location;
}

export function Register() {
  const [form, setForm] = useState<RegisterForm>({
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
    }
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'idDocument') => {
    const file = event.target.files?.[0];
    if (file) {
      setForm(prev => ({ ...prev, [type]: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validation et envoi au serveur
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Créer un compte consommateur</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations de base */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Informations personnelles</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                value={form.name}
                onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={form.password}
                  onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={form.confirmPassword}
                  onChange={e => setForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Adresse</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Adresse complète</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                value={form.location.address}
                onChange={e => setForm(prev => ({ 
                  ...prev, 
                  location: { ...prev.location, address: e.target.value }
                }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={form.location.city}
                  onChange={e => setForm(prev => ({ 
                    ...prev, 
                    location: { ...prev.location, city: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Code postal</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={form.location.postalCode}
                  onChange={e => setForm(prev => ({ 
                    ...prev, 
                    location: { ...prev.location, postalCode: e.target.value }
                  }))}
                />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Documents requis</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Photo de profil</label>
              <div className="mt-1 flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  required
                  className="hidden"
                  id="avatar-upload"
                  onChange={e => handleFileUpload(e, 'avatar')}
                />
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-orange-500"
                >
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      {form.avatar ? form.avatar.name : "Cliquez pour télécharger votre photo"}
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pièce d'identité</label>
              <div className="mt-1 flex items-center">
                <input
                  type="file"
                  accept=".pdf,image/*"
                  required
                  className="hidden"
                  id="id-upload"
                  onChange={e => handleFileUpload(e, 'idDocument')}
                />
                <label
                  htmlFor="id-upload"
                  className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-orange-500"
                >
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      {form.idDocument ? form.idDocument.name : "Cliquez pour télécharger votre pièce d'identité"}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white rounded-full py-3 px-4 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}