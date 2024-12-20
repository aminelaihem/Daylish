import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Saveurs d’À Côté</span>
            </div>
            <p className="text-sm text-gray-400">
              Connectez-vous avec des chefs passionnés près de chez vous et découvrez des plats faits maison authentiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogue" className="text-sm hover:text-orange-500 transition-colors">
                  Explorer les plats
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm hover:text-orange-500 transition-colors">
                  Devenir chef
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm hover:text-orange-500 transition-colors">
                  Se connecter
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm hover:text-orange-500 transition-colors">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span>123 rue de la Paix<br />75000 Paris, France</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:contact@cuisineconnect.fr" className="hover:text-orange-500 transition-colors">
                  contact@cuisineconnect.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Saveurs d’À Côté. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                CGV
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 