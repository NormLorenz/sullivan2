import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/dirt/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SERVICES.map((service) => {
            // Dynamically get icon
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Shovel;

            return (
              <div key={service.id} className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-sullivan-primary flex items-center justify-center text-white shadow-lg rounded-full">
                    <IconComponent size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="font-header text-2xl font-bold text-sullivan-dark uppercase mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-sullivan-gray py-20 text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="font-header text-3xl font-bold uppercase mb-4">Our Process</h2>
             <p className="text-gray-300">How we ensure every job is done right.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'We assess your site and discuss your goals.' },
                { step: '02', title: 'Planning', desc: 'We create a detailed plan and obtain necessary permits.' },
                { step: '03', title: 'Execution', desc: 'Our team works efficiently to complete the project.' },
                { step: '04', title: 'Completion', desc: 'Final walkthrough to ensure total satisfaction.' }
              ].map((item) => (
                <div key={item.step} className="relative p-6 border border-gray-600 hover:border-sullivan-primary transition-colors">
                   <span className="absolute -top-5 left-6 bg-sullivan-gray px-2 font-header text-4xl font-bold text-sullivan-primary">{item.step}</span>
                   <h3 className="font-header text-xl font-bold mt-6 mb-3 uppercase">{item.title}</h3>
                   <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
