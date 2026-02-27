import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, HardHat, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES, PROJECTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/excavator-background-2.png"
            alt="Excavator at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sullivan-dark/80 to-sullivan-dark/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-sullivan-primary/90 backdrop-blur-sm px-4 py-1.5 mb-6 rounded-full border border-white/20">
                <span className="block text-white font-semibold uppercase tracking-widest text-xs">Serving the Community Since 1995</span>
            </div>
            <h1 className="font-header text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              Building Foundations <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sullivan-primary to-orange-300">For The Future</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Sullivan’s Excavating delivers precision earthmoving, site preparation, and septic services. We move mountains to make your project a reality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button variant="primary">Get a Free Quote</Button>
              </Link>
              <Link to="/projects">
                <Button variant="white">View Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
           <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-sullivan-primary rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="bg-sullivan-dark py-16 border-t border-white/10">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
                <div className="flex flex-col items-center space-y-4">
                   <div className="w-16 h-16 rounded-2xl bg-sullivan-primary/10 flex items-center justify-center">
                     <Truck size={32} className="text-sullivan-primary" />
                   </div>
                   <h3 className="font-header text-xl font-bold tracking-wide">Modern Fleet</h3>
                   <p className="text-gray-400 max-w-xs text-sm leading-relaxed">Equipped with the latest machinery to handle any terrain efficiently.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                   <div className="w-16 h-16 rounded-2xl bg-sullivan-primary/10 flex items-center justify-center">
                     <HardHat size={32} className="text-sullivan-primary" />
                   </div>
                   <h3 className="font-header text-xl font-bold tracking-wide">Expert Crew</h3>
                   <p className="text-gray-400 max-w-xs text-sm leading-relaxed">Fully licensed and insured operators with decades of combined experience.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                   <div className="w-16 h-16 rounded-2xl bg-sullivan-primary/10 flex items-center justify-center">
                     <ShieldCheck size={32} className="text-sullivan-primary" />
                   </div>
                   <h3 className="font-header text-xl font-bold tracking-wide">Safety First</h3>
                   <p className="text-gray-400 max-w-xs text-sm leading-relaxed">Uncompromising commitment to safety standards on every job site.</p>
                </div>
             </div>
          </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-sullivan-light">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="font-header text-4xl font-bold text-sullivan-dark tracking-tight mb-4">Our Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">We offer comprehensive excavating solutions tailored to your specific needs.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.slice(0, 3).map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sullivan-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group">
                   <h3 className="font-header text-xl font-bold text-sullivan-dark mb-3 group-hover:text-sullivan-primary transition-colors">{service.title}</h3>
                   <p className="text-gray-500 mb-8 leading-relaxed text-sm">{service.description}</p>
                   <Link to="/services" className="inline-flex items-center text-sullivan-primary font-semibold text-sm hover:text-sullivan-secondary transition-colors">
                      Learn More <ArrowRight size={16} className="ml-1" />
                   </Link>
                </div>
              ))}
           </div>
           <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline">View All Services</Button>
              </Link>
           </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <div className="text-sullivan-primary font-semibold tracking-wider text-sm uppercase mb-3">Featured Project</div>
                 <h2 className="font-header text-4xl font-bold text-sullivan-dark tracking-tight mb-6">Hillside Commercial Prep</h2>
                 <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                    We tackled a challenging 45-degree grade for a new commercial complex. By utilizing specialized grading techniques and retaining wall integration, we successfully leveled the 5-acre site ahead of schedule.
                 </p>
                 <ul className="space-y-4 mb-10">
                    {['5-Acre Site Clearing', 'Heavy Grading & Leveling', 'Storm Water Management'].map(item => (
                       <li key={item} className="flex items-center text-sullivan-dark font-medium">
                          <CheckCircle className="text-sullivan-primary mr-3" size={20} />
                          {item}
                       </li>
                    ))}
                 </ul>
                 <Link to="/projects">
                    <Button variant="primary">View Project Gallery</Button>
                 </Link>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img src={PROJECTS[0].imageUrl} alt="Featured Project" className="w-full h-auto object-cover aspect-[4/3]" />
                 </div>
                 {/* Decorative element */}
                 <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                     <span className="font-header text-4xl font-bold text-sullivan-primary block mb-1">100%</span>
                     <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Client Satisfaction</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-sullivan-dark relative overflow-hidden">
         {/* Subtle background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-header text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">Contact Sullivan's Excavating today for a free consultation and estimate. No job is too big or too small.</p>
            <Link to="/contact">
               <Button variant="primary" className="text-base px-8 py-4">Contact Us Now</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};