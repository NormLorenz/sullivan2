import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_PHONE } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-sullivan-dark shadow-xl' : 'bg-transparent'} ${scrolled ? 'py-2' : 'py-4'}`}>
      {/* Top Bar (Hidden on scroll for clean look, visible at top) */}
      <div className={`hidden md:block container mx-auto px-4 mb-2 transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="flex justify-end items-center space-x-6 text-white/80 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-sullivan-primary" />
            <span className="font-bold tracking-wide">{COMPANY_PHONE}</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sullivan-primary transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-sullivan-primary transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-sullivan-primary transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className={`font-header text-2xl md:text-3xl font-bold uppercase tracking-tighter ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-white'} drop-shadow-md`}>
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-sullivan-primary transition-colors duration-300 ${location.pathname === link.path ? 'text-sullivan-primary' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
                <button className="bg-sullivan-primary text-white px-5 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-sullivan-primary transition-all duration-300 transform skew-x-[-12deg]">
                    <span className="block skew-x-[12deg]">Get Quote</span>
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-sullivan-dark/95 backdrop-blur-sm z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{top: '0'}}>
         <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
                <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-2xl font-header font-bold uppercase text-white hover:text-sullivan-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
         </div>
      </div>
    </nav>
  );
};
