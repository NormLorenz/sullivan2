import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/construct/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">Our Projects</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
               <div key={project.id} className="group relative overflow-hidden shadow-lg cursor-pointer">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-sullivan-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                     <span className="text-sullivan-primary text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                     <h3 className="font-header text-2xl font-bold text-white uppercase">{project.title}</h3>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};
