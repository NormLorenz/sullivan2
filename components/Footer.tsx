import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Fish, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_LICENSE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sullivan-dark text-white pt-16 pb-8 border-t-4 border-sullivan-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-header text-2xl font-bold uppercase text-sullivan-primary">{COMPANY_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing top-tier excavating and site preparation services for residential, commercial, and municipal projects. Built on a foundation of trust and quality.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sullivan-primary transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sullivan-primary transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sullivan-primary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-header text-lg font-bold uppercase mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-sullivan-primary flex items-center space-x-2 transition-colors">
                    <ArrowRight size={14} />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-header text-lg font-bold uppercase mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Site Preparation</li>
              <li>Septic Install & Repair</li>
              <li>Demolition</li>
              <li>Grading & Drainage</li>
              <li>Driveways</li>
              <li>Utility Trenching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-header text-lg font-bold uppercase mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-sullivan-primary shrink-0 mt-1" size={18} />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-sullivan-primary shrink-0" size={18} />
                <span>{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-sullivan-primary shrink-0" size={18} />
                <span>{COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Fish className="text-sullivan-primary shrink-0" size={18} />
                <span>{COMPANY_LICENSE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
