import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Twitter, Globe, Shield, CreditCard, Check } from 'lucide-react';
import { NavPage } from '../types';
import { LOCATIONS } from '../data';

interface FooterProps {
  setCurrentPage: (page: NavPage) => void;
  onOpenBooking: (location?: 'heights' | 'midtown') => void;
}

export default function Footer({ setCurrentPage, onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks = [
    { label: 'Home Experience', value: 'home' as NavPage },
    { label: 'Our Dental Team', value: 'team' as NavPage },
    { label: 'New Patient Portal', value: 'new-patients' as NavPage },
    { label: 'Contact & Booking', value: 'contact' as NavPage }
  ];

  const serviceLinks = [
    { label: 'Cosmetic Dentistry', value: 'cosmetic' as NavPage },
    { label: 'Invisalign Aligners', value: 'invisalign' as NavPage },
    { label: 'Dental Implants', value: 'implants' as NavPage },
    { label: 'Emergency Dentistry', value: 'emergency' as NavPage },
    { label: 'All Services', value: 'services' as NavPage }
  ];

  const insurancePartners = [
    'Delta Dental', 'Blue Cross BCBS', 'Cigna PPO', 'MetLife Dental', 'Guardian Care', 'Aetna Premium'
  ];

  return (
    <footer className="bg-[#111111] text-gray-300 pt-20 pb-8 border-t border-[#222222]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#222222]">
          
          {/* Brand Presentation */}
          <div className="flex flex-col gap-6" id="footer-col-brand">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src="https://flossdentalhouston.com/wp-content/uploads/2024/11/logo-floss-dental-white.webp" 
                alt="FLOSS Dental Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Redefining oral healthcare into a high-end wellness ritual. Bringing world-class digital smile transformations, porcelain veneers, and Gold Invisalign standard orthodontics to Houston.
            </p>
            
            {/* Social handles */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/flossdental_heights_midtown/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors shadow" aria-label="Instagram">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a href="https://www.facebook.com/FLOSSMidtown/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors shadow" aria-label="Facebook">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="https://twitter.com/flossdental" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors shadow" aria-label="Twitter">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="https://flossdentalhouston.com/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white flex items-center justify-center transition-colors shadow" aria-label="Website">
                <Globe className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links portal */}
          <div className="flex flex-col gap-4" id="footer-col-links">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider text-[#54D6B7]">Explore Practice</h3>
            <ul className="grid gap-3 text-sm">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleNavClick(link.value)}
                    className="hover:text-[#54D6B7] text-gray-400 hover:translate-x-1 duration-200 transition-all text-left"
                    id={`footer-menu-link-${link.value}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service quicklinks */}
          <div className="flex flex-col gap-4" id="footer-col-services">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider text-[#54D6B7]">Aesthetic Cares</h3>
            <ul className="grid gap-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleNavClick(link.value)}
                    className="hover:text-[#54D6B7] text-gray-400 hover:translate-x-1 duration-200 transition-all text-left"
                    id={`footer-service-link-${link.value}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Booking Triage */}
          <div className="flex flex-col gap-5" id="footer-col-newsletter">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider text-[#54D6B7]">Join Wellness Feed</h3>
            <p className="text-xs text-gray-400 leading-normal">
              Subscribe to unlock periodic style guidelines, cosmetic insights, and priority appointment notifications.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1C1C1C] text-sm text-white placeholder-gray-500 rounded-lg px-4 py-2.5 border border-[#333333] focus:border-[#54D6B7] focus:ring-1 focus:ring-[#54D6B7] outline-none"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#54D6B7] hover:bg-[#8FF0E4] hover:scale-[1.01] text-[#1A1A1A] rounded-md flex items-center justify-center transition"
                  aria-label="Subscribe"
                  id="newsletter-submit-btn"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <AnimatePresence>
                {subscribed && (
                  <div className="flex items-center gap-1.5 text-[#54D6B7] text-xs">
                    <Check className="h-3 w-3" />
                    Subscription activated successfully. Thanks!
                  </div>
                )}
              </AnimatePresence>
            </form>
            <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-[#54D6B7]" /> HIPAA Secured</span>
              <span className="flex items-center gap-1"><CreditCard className="h-3 w-3 text-[#8FF0E4]" /> Flexible Spends</span>
            </div>
          </div>

        </div>

        {/* Mid section: Detailed Locations, hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-[#222222]">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-[#161616] rounded-xl p-5 border border-[#222222] flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold block">{loc.name}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#54D6B7] shrink-0" />
                  {loc.address}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#8FF0E4] shrink-0" />
                  {loc.phone}
                </span>
              </div>
              <div className="flex flex-col gap-1 md:text-right md:items-end justify-center border-t md:border-t-0 md:border-l border-[#2c2c2c] pt-2 md:pt-0 md:pl-4">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block mb-1">Hours</span>
                {loc.hours.map((h, idx) => (
                  <span key={idx} className="text-[11px] text-gray-400 block whitespace-nowrap">
                    <strong>{h.days}:</strong> {h.time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom copyright details & insurance logs */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} FLOSS Dental Houston. All Rights Reserved. Fully compliant with ADA, HIPAA, and OSHA design directives.
            </p>
            <p className="text-[10px] text-gray-600 leading-normal">
              Disclaimer: All dental makeovers vary because mouth biological ecosystems differ. Consult Dr. Clint Herzog or Dr. Sharon during smile mappings.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-gray-400 uppercase tracking-wider mr-2">PPO Plans:</span>
            {insurancePartners.map((partner) => (
              <span key={partner} className="text-[10px] text-gray-500 bg-[#161616] px-2.5 py-1 rounded-full border border-[#222222]">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
