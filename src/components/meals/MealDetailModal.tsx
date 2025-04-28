import React, { useState } from 'react';
import { Dialog, Tab } from '@headlessui/react';
import { X, ChefHat, Star, Clock, MapPin, ShoppingBag, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import type { Meal } from '@/types/meal';
import type { Chef } from '@/types/chef';

interface MealDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  meal: Meal;
  chef: Chef;
  handleOrderClick: (e: React.MouseEvent) => void;
}

// Images de test pour le carrousel (à remplacer par les vraies images plus tard)
const sampleImages = [
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800',
];

export function MealDetailModal({ isOpen, onClose, meal, chef, handleOrderClick }: MealDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = [meal.image, ...sampleImages]; // Combiner l'image principale avec les images supplémentaires

  const paginate = (newIndex: number) => {
    setDirection(newIndex > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(newIndex);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -50 && currentImageIndex < images.length - 1) {
      setDirection(1);
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (info.offset.x > 50 && currentImageIndex > 0) {
      setDirection(-1);
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.4, 0.2, 0.2, 1] }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.25 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Overlay */}
            <div className="fixed inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
            </div>

            {/* Contenu Modal */}
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden"
            >
              {/* Bouton Fermer */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Carrousel */}
              <div className="relative aspect-[16/9] bg-gray-100">
                <div className="absolute inset-0 overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={meal.title}
                      className="w-full h-full object-cover"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={currentImageIndex === 0 || currentImageIndex === images.length - 1 ? 0.2 : 0.5}
                      onDragEnd={handleDragEnd}
                      style={{ cursor: 'grab', touchAction: 'pan-y' }}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  </AnimatePresence>
                </div>
                
                {/* Navigation Carrousel */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index
                          ? 'bg-white w-6'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* En-tête avec infos principales */}
                <div className="mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{meal.title}</h2>
                      <p className="text-gray-600">{meal.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-deep-green-light">{meal.price}€</div>
                      <div className="text-sm text-gray-500">par portion</div>
                    </div>
                  </div>

                  {/* Badges d'information */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                      <Clock className="w-4 h-4 mr-1.5 text-deep-green-light" />
                      {meal.preparationTime} min
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                      <MapPin className="w-4 h-4 mr-1.5 text-deep-green-light" />
                      {meal.distance} km
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                      <ShoppingBag className="w-4 h-4 mr-1.5 text-deep-green-light" />
                      {meal.availablePortions} portions dispo.
                    </span>
                  </div>
                </div>

                {/* Onglets */}
                <Tab.Group>
                  <Tab.List className="flex space-x-4 border-b border-gray-200">
                    <Tab className={({ selected }) =>
                      `pb-3 text-sm font-medium border-b-2 transition-colors outline-none ${
                        selected
                          ? 'border-deep-green-light text-deep-green-light'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                    }>
                      Détails
                    </Tab>
                    <Tab className={({ selected }) =>
                      `pb-3 text-sm font-medium border-b-2 transition-colors outline-none ${
                        selected
                          ? 'border-deep-green-light text-deep-green-light'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                    }>
                      Chef
                    </Tab>
                    <Tab className={({ selected }) =>
                      `pb-3 text-sm font-medium border-b-2 transition-colors outline-none ${
                        selected
                          ? 'border-deep-green-light text-deep-green-light'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                    }>
                      Avis
                    </Tab>
                  </Tab.List>

                  <Tab.Panels className="mt-6">
                    {/* Panel Détails */}
                    <Tab.Panel>
                      <div className="space-y-6">
                        {/* Ingrédients */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 mb-2">Ingrédients</h3>
                          <div className="flex flex-wrap gap-2">
                            {meal.ingredients.map((ingredient, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 rounded-full text-sm bg-beige/30 text-deep-green"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Allergènes */}
                        {meal.allergens.length > 0 && (
                          <div className="bg-orange-50 rounded-lg p-4">
                            <div className="flex items-center text-orange-800 mb-2">
                              <AlertCircle className="h-5 w-5 mr-2" />
                              <h3 className="text-sm font-medium">Allergènes</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {meal.allergens.map((allergen, index) => (
                                <span
                                  key={index}
                                  className="px-2.5 py-1 rounded-full text-sm bg-white text-orange-800"
                                >
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Tab.Panel>

                    {/* Panel Chef */}
                    <Tab.Panel>
                      <div className="flex items-start space-x-4">
                        <img
                          src={chef.avatar}
                          alt={chef.name}
                          className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-200"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            {chef.name}
                            {chef.isVerified && (
                              <span className="ml-2 text-deep-green-light">
                                <ChefHat className="h-5 w-5" />
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <Star className="h-4 w-4 text-yellow fill-current" />
                            <span className="ml-1 font-medium">{chef.rating}</span>
                            <span className="mx-1">•</span>
                            <span>{chef.reviewCount} avis</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Passionné de cuisine depuis toujours, je partage avec vous mes meilleures recettes faites maison.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>

                    {/* Panel Avis */}
                    <Tab.Panel>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-yellow fill-current" />
                            <span className="text-lg font-medium">4.8</span>
                            <span className="text-gray-500">(12 avis)</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                          Les avis seront bientôt disponibles...
                        </p>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                {/* Bouton Commander */}
                <div className="mt-8">
                  <button 
                    onClick={handleOrderClick}
                    className="w-full bg-gradient-to-r from-yellow to-orange-400 text-deep-green py-3 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:brightness-105 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Commander maintenant
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
} 