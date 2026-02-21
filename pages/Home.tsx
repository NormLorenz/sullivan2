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
            src="/assets/images/excavator-1936799_1920.jpg"
            alt="Excavator at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sullivan-dark/80 to-sullivan-dark/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-sullivan-primary px-4 py-1 mb-6 skew-x-[-12deg]">
                <span className="block skew-x-[12deg] text-white font-bold uppercase tracking-wider text-sm">Serving the Community Since 1995</span>
            </div>
            <h1 className="font-header text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6 drop-shadow-lg">
              Building Foundations <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sullivan-primary to-orange-400">For The Future</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Sullivan’s Excavating delivers precision earthmoving, site preparation, and septic services. We move mountains to make your project a reality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button variant="primary">Get a Free Quote</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">View Our Work</Button>
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
      <section className="bg-sullivan-primary py-12">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
                <div className="flex flex-col items-center space-y-3">
                   <Truck size={48} className="text-sullivan-dark" />
                   <h3 className="font-header text-2xl font-bold uppercase">Modern Fleet</h3>
                   <p className="opacity-90 max-w-xs">Equipped with the latest machinery to handle any terrain efficiently.</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                   <HardHat size={48} className="text-sullivan-dark" />
                   <h3 className="font-header text-2xl font-bold uppercase">Expert Crew</h3>
                   <p className="opacity-90 max-w-xs">Fully licensed and insured operators with decades of combined experience.</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                   <ShieldCheck size={48} className="text-sullivan-dark" />
                   <h3 className="font-header text-2xl font-bold uppercase">Safety First</h3>
                   <p className="opacity-90 max-w-xs">Uncompromising commitment to safety standards on every job site.</p>
                </div>
             </div>
          </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="font-header text-4xl font-bold text-sullivan-dark uppercase mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-sullivan-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">We offer comprehensive excavating solutions tailored to your specific needs.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.slice(0, 3).map((service) => (
                <div key={service.id} className="bg-gray-50 p-8 border-b-4 border-transparent hover:border-sullivan-primary transition-all duration-300 shadow-sm hover:shadow-xl group">
                   <h3 className="font-header text-2xl font-bold text-sullivan-dark mb-4 group-hover:text-sullivan-primary transition-colors">{service.title}</h3>
                   <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                   <Link to="/services" className="inline-flex items-center text-sullivan-primary font-bold uppercase tracking-wider text-sm hover:text-sullivan-dark transition-colors">
                      Learn More <ArrowRight size={16} className="ml-2" />
                   </Link>
                </div>
              ))}
           </div>
           <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" className="border-sullivan-dark text-sullivan-dark hover:bg-sullivan-dark hover:text-white">View All Services</Button>
              </Link>
           </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-sullivan-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sullivan-gray/10 skew-x-[-20deg] translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <h2 className="font-header text-4xl font-bold text-white uppercase mb-6">Featured Project: <br/><span className="text-sullivan-primary">Hillside Commercial Prep</span></h2>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    We tackled a challenging 45-degree grade for a new commercial complex. By utilizing specialized grading techniques and retaining wall integration, we successfully leveled the 5-acre site ahead of schedule.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {['5-Acre Site Clearing', 'Heavy Grading & Leveling', 'Storm Water Management'].map(item => (
                       <li key={item} className="flex items-center text-white font-bold">
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
                 <div className="border-4 border-sullivan-primary p-2">
                    <img src={PROJECTS[0].imageUrl} alt="Featured Project" className="w-full h-auto shadow-2xl" />
                 </div>
                 {/* Decorative element */}
                 <div className="absolute -bottom-6 -left-6 bg-sullivan-dark p-6 shadow-xl hidden md:block">
                     <span className="font-header text-4xl font-bold text-sullivan-primary block">100%</span>
                     <span className="text-white text-sm uppercase tracking-wider">Client Satisfaction</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[url('https://picsum.photos/seed/mud/1920/600')] bg-cover bg-center bg-fixed relative">
         <div className="absolute inset-0 bg-sullivan-primary/90"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase mb-8">Ready to Start Your Project?</h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">Contact Sullivan's Excavating today for a free consultation and estimate. No job is too big or too small.</p>
            <Link to="/contact">
               <Button variant="white" className="text-lg px-10 py-4">Contact Us Now</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};
