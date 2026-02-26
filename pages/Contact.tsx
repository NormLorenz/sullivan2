import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Fish } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_HOURS, COMPANY_LICENSE } from '../constants';
import { sendEmail } from '../services/resendService';
import { ContactFormState } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // clear form
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-sullivan-dark text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/phone/1920/1080')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-header text-5xl md:text-6xl font-bold uppercase mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-sullivan-primary mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
             <div>
               <h3 className="font-header text-2xl font-bold text-sullivan-dark uppercase mb-6">Get In Touch</h3>
               <p className="text-gray-600 leading-relaxed mb-8">
                 Ready to break ground? Call us or fill out the form to discuss your next project. We offer free estimates for all services.
               </p>
             </div>

             <div className="space-y-6">
               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Phone</h4>
                   <p className="text-gray-600">{COMPANY_PHONE}</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Email</h4>
                   <p className="text-gray-600">{COMPANY_EMAIL}</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Office</h4>
                   <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">Hours</h4>
                   <p className="text-gray-600">{COMPANY_HOURS}</p>
                 </div>
               </div>

                <div className="flex items-start space-x-4">
                 <div className="bg-sullivan-primary p-3 text-white">
                   <Fish size={24} />
                 </div>
                 <div>
                   <h4 className="font-header font-bold uppercase text-sullivan-dark">License</h4>
                   <p className="text-gray-600">{COMPANY_LICENSE}</p>
                 </div>
               </div>

            </div>

          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-xl border-t-8 border-sullivan-primary">
             <h3 className="font-header text-2xl font-bold text-sullivan-dark uppercase mb-8">Send Us A Message</h3>
             
             {status === 'success' ? (
               <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center">
                 <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                 <p>Thank you for contacting Sullivan's Excavating. We will get back to you shortly.</p>
                 <button onClick={() => setStatus('idle')} className="mt-4 text-sm underline text-green-700 hover:text-green-900">Send another</button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col space-y-2">
                     <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-700">Name</label>
                     <input 
                       type="text" 
                       id="name" 
                       name="name" 
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="p-3 bg-gray-50 border border-gray-200 focus:border-sullivan-primary focus:ring-1 focus:ring-sullivan-primary outline-none transition-colors"
                       placeholder="Your full name"
                     />
                   </div>
                   <div className="flex flex-col space-y-2">
                     <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-gray-700">Phone</label>
                     <input 
                       type="tel" 
                       id="phone" 
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       className="p-3 bg-gray-50 border border-gray-200 focus:border-sullivan-primary focus:ring-1 focus:ring-sullivan-primary outline-none transition-colors"
                       placeholder="(555) 555-5555"
                     />
                   </div>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-700">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="p-3 bg-gray-50 border border-gray-200 focus:border-sullivan-primary focus:ring-1 focus:ring-sullivan-primary outline-none transition-colors"
                     placeholder="you@example.com"
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-700">Message</label>
                   <textarea 
                     id="message" 
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={5}
                     className="p-3 bg-gray-50 border border-gray-200 focus:border-sullivan-primary focus:ring-1 focus:ring-sullivan-primary outline-none transition-colors"
                     placeholder="Tell us about your project..."
                   ></textarea>
                 </div>
                 
                 <Button 
                    type="submit" 
                    fullWidth 
                    disabled={status === 'loading'}
                    className="mt-4"
                  >
                   {status === 'loading' ? 'Sending...' : 'Send Message'}
                 </Button>

                 {status === 'error' && (
                   <div className="text-red-600 text-sm mt-2 text-center">
                     Something went wrong. Please try again or call us directly.
                   </div>
                 )}
               </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
