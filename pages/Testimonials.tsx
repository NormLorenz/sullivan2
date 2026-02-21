import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/handshake/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">Client Reviews</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
               <div key={test.id} className="bg-white p-10 shadow-lg border-b-4 border-sullivan-primary relative">
                  <Quote className="absolute top-6 left-6 text-sullivan-primary/20" size={64} />
                  <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed text-lg">"{test.content}"</p>
                  <div>
                     <h4 className="font-header text-xl font-bold text-sullivan-dark uppercase">{test.author}</h4>
                     <span className="text-sullivan-primary text-sm font-bold">{test.role}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
      
      <div className="bg-sullivan-primary py-16">
         <div className="container mx-auto px-4 text-center">
            <h3 className="font-header text-3xl font-bold text-white uppercase mb-4">Have you worked with us?</h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">We value your feedback. Let us know how we did on your latest project.</p>
            <a href="/contact" className="inline-block bg-sullivan-dark text-white font-bold uppercase tracking-wider py-3 px-8 hover:bg-white hover:text-sullivan-dark transition-colors">
               Leave a Review
            </a>
         </div>
      </div>
    </div>
  );
};
