import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: 'chef' | 'consumer';
    avatar: string;
    location: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "Grâce à Saveurs d’À Côté, j'ai pu transformer ma passion pour la cuisine en une activité rémunératrice. Les retours positifs de mes clients sont ma plus belle récompense !",
    author: {
      name: "Sophie Martin",
      role: "chef",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      location: "Lyon"
    },
    rating: 5
  },
  {
    id: '2',
    content: "Je trouve enfin des plats faits maison délicieux près de chez moi. C'est pratique et les prix sont raisonnables. Une super alternative aux restaurants !",
    author: {
      name: "Pierre Dubois",
      role: "consumer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      location: "Paris"
    },
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ce qu'en pensent nos utilisateurs</h2>
          <p className="mt-4 text-lg text-gray-600">Découvrez les expériences de notre communauté</p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : 'stroke-current fill-none'}`}
                  />
                ))}
              </div>
              
              <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
              
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.author.role === 'chef' ? 'Cuisinier' : 'Client'} · {testimonial.author.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}