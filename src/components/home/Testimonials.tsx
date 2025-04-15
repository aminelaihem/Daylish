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
    content: "Grâce à Daylish, j'ai transformé ma passion pour la cuisine en une activité qui me plaît et me rapporte. Les sourires de mes voisins gourmands sont ma meilleure motivation !",
    author: {
      name: "Sophie L.",
      role: "chef",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      location: "Lyon 3ème"
    },
    rating: 5
  },
  {
    id: '2',
    content: "Enfin des plats faits maison, variés et délicieux, livrés juste à côté ! Daylish a simplifié mes dîners de semaine. Je recommande vivement.",
    author: {
      name: "Marc D.",
      role: "consumer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      location: "Paris 15ème"
    },
    rating: 5
  },
  {
    id: '3',
    content: "Une plateforme intuitive et une communauté bienveillante. C'est un plaisir de partager mes recettes et de rencontrer des gens sympas dans mon quartier.",
    author: {
      name: "Amina K.",
      role: "chef",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      location: "Marseille 8ème"
    },
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-deep-green">Ils partagent leur expérience</h2>
          <p className="mt-4 text-xl text-deep-green/80 font-blatant max-w-3xl mx-auto">
            La communauté Daylish témoigne.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card p-8 flex flex-col relative border-t-4 ${ index === 1 ? 'border-deep-green-light' : 'border-yellow' }`}
            >
              <p className="text-lg text-deep-green font-blatant italic mb-6 flex-grow relative">
                 <span className="absolute -top-4 -left-4 text-6xl text-deep-green/10 font-serif">“</span>
                 {testimonial.content}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center space-x-1 text-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow' : 'stroke-yellow fill-none'}`}
                      strokeWidth={1.5} 
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-beige"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-blatant-bold text-deep-green">{testimonial.author.name}</h4>
                    <p className="text-sm text-deep-green/70 font-blatant">
                      {testimonial.author.role === 'chef' ? 'Chef Partenaire' : 'Client Gourmand'} · {testimonial.author.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}