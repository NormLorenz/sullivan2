import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gravel/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">About Sullivan's</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <img src="https://picsum.photos/seed/team/800/600" alt="The Crew" className="w-full rounded-sm shadow-xl border-b-4 border-r-4 border-sullivan-primary" />
            </div>
            <div className="md:w-1/2">
               <h2 className="font-header text-3xl font-bold text-sullivan-dark uppercase mb-6">Our Story</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 1995, Sullivan’s Excavating began with a single backhoe and a commitment to honest, hard work. Over the last three decades, we have grown into one of the region's most trusted excavating contractors, known for our precision, safety, and reliability.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  As a family-owned business, we treat every project as if it were on our own property. Whether we are clearing a lot for a new dream home or preparing a commercial site for development, we bring the same level of dedication and expertise to the job.
               </p>
               <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center space-x-3">
                      <Clock className="text-sullivan-primary" size={24} />
                      <span className="font-bold text-sullivan-dark">On-Time Completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <Users className="text-sullivan-primary" size={24} />
                      <span className="font-bold text-sullivan-dark">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <Award className="text-sullivan-primary" size={24} />
                      <span className="font-bold text-sullivan-dark">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <ThumbsUp className="text-sullivan-primary" size={24} />
                      <span className="font-bold text-sullivan-dark">Satisfaction Guaranteed</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-gray-100 py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="font-header text-3xl font-bold text-sullivan-dark uppercase mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-8 shadow-md border-t-4 border-sullivan-primary">
                  <h3 className="font-header text-xl font-bold mb-4">Precision Equipment</h3>
                  <p className="text-gray-600">We utilize modern, laser-guided equipment to ensure grades are accurate within a fraction of an inch.</p>
               </div>
               <div className="bg-white p-8 shadow-md border-t-4 border-sullivan-primary">
                  <h3 className="font-header text-xl font-bold mb-4">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees. We provide detailed estimates upfront so you know exactly what to expect.</p>
               </div>
               <div className="bg-white p-8 shadow-md border-t-4 border-sullivan-primary">
                  <h3 className="font-header text-xl font-bold mb-4">Local Expertise</h3>
                  <p className="text-gray-600">We understand the local soil conditions and regulations better than anyone else.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
