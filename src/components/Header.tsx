import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronDown, Smile, Sparkles, Activity, Shield, Calendar, MapPin } from 'lucide-react';
import { NavPage } from '../types';
import { LOCATIONS } from '../data';

interface HeaderProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  onOpenBooking: (location?: 'heights' | 'midtown') => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'locations' | null>(null);

  const navItems = [
    { label: 'Home', value: 'home' as NavPage },
    { label: 'Meet the Team', value: 'team' as NavPage },
    {
      label: 'Services',
      value: 'services' as NavPage,
      dropdown: [
        { label: 'Cosmetic Dentistry', value: 'cosmetic' as NavPage, icon: Sparkles, desc: 'Smile transformations & Porcelain Veneers' },
        { label: 'Invisalign Aligners', value: 'invisalign' as NavPage, icon: Smile, desc: 'Preferred SmartTrack clear systems' },
        { label: 'Dental Implants', value: 'implants' as NavPage, icon: Shield, desc: 'Permanent organic tooth placements' },
        { label: 'Emergency Dentistry', value: 'emergency' as NavPage, icon: Activity, desc: 'Same-day urgent pain triage 24/7' },
        { label: 'All Treatments', value: 'services' as NavPage, icon: Sparkles, desc: 'Explore all standard & aesthetic cares' }
      ]
    },
    { label: 'New Patients', value: 'new-patients' as NavPage },
    { label: 'Contact', value: 'contact' as NavPage }
  ];

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-[#1A1A1A]/95 text-white backdrop-blur-md border-b border-[#2C2C2C]">
      {/* Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] py-2 text-center text-xs font-semibold tracking-wider text-[#1A1A1A] uppercase">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          Houston’s Premier Cosmetic Dental Experience — Now Accepting New Patients & Emergencies
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <img 
              src="https://flossdentalhouston.com/wp-content/uploads/2024/11/logo-floss-dental-white.webp" 
              alt="FLOSS Dental Logo" 
              className="h-10 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`flex items-center gap-1 py-2 text-sm font-medium tracking-wide transition-colors ${
                        currentPage === 'services' || currentPage === 'cosmetic' || currentPage === 'invisalign' || currentPage === 'implants' || currentPage === 'emergency'
                          ? 'text-[#54D6B7]' 
                          : 'text-gray-300 hover:text-[#54D6B7]'
                      }`}
                      id={`nav-link-${item.value}`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full w-80 rounded-xl bg-[#222222] border border-[#333333] p-4 shadow-xl grid gap-2"
                        >
                          {item.dropdown.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <button
                                key={subItem.label}
                                onClick={() => handleNavClick(subItem.value)}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#2C2C2C] text-left transition-colors group"
                                id={`subnav-link-${subItem.value}`}
                              >
                                <div className="p-2 rounded-lg bg-[#1A1A1A] text-[#54D6B7] group-hover:bg-[#54D6B7] group-hover:text-[#1A1A1A] transition-colors">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-white group-hover:text-[#54D6B7] transition-colors">{subItem.label}</span>
                                  <span className="text-xs text-gray-400 mt-0.5 leading-normal">{subItem.desc}</span>
                                </div>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-sm font-medium tracking-wide py-2 transition-colors ${
                    currentPage === item.value ? 'text-[#54D6B7]' : 'text-gray-300 hover:text-[#54D6B7]'
                  }`}
                  id={`nav-link-${item.value}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Immediate Pain Relief</span>
              <a 
                href="tel:3462144807" 
                className="flex items-center gap-1.5 text-sm font-bold text-[#54D6B7] hover:text-[#8FF0E4] transition-colors"
                id="header-phone-call"
              >
                <Phone className="h-3.5 w-3.5" />
                (346) 214-4807
              </a>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full overflow-hidden group bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide shadow-md hover:shadow-[#54D6B7]/20 transition-all duration-300 hover:scale-[1.02]"
              id="header-book-btn"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Appointment
            </button>
          </div>

          {/* Tablet & Mobile Menu Trigger & Book */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] text-[#1A1A1A] font-bold text-xs tracking-wide shadow-md"
              id="header-mobile-book-btn"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-[#54D6B7] rounded-lg bg-[#2C2C2C]/50 transition-colors"
              aria-label="Toggle menu"
              id="header-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-[#2C2C2C] bg-[#1A1A1A] py-6 shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-4 grid gap-4">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="border-b border-[#2C2C2C] pb-3">
                      <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-semibold block mb-2">{item.label}</span>
                      <div className="grid gap-2 pl-3">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavClick(subItem.value)}
                            className="text-sm font-medium text-gray-300 hover:text-white py-1.5 text-left flex items-center gap-2"
                            id={`mobile-sub-link-${subItem.value}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#54D6B7]"></span>
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.value)}
                    className="text-base font-semibold text-gray-100 hover:text-[#54D6B7] py-2 border-b border-[#2C2C2C] text-left block w-full"
                    id={`mobile-link-${item.value}`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-[#252525] p-3 text-center border border-[#333333]">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">Call Booking Team</span>
                  <a href="tel:3462144807" className="text-base font-bold text-[#54D6B7] flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    (346) 214-4807
                  </a>
                </div>
                <div className="flex-1 rounded-xl bg-[#252525] p-3 text-center border border-[#333333]">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium mb-1">Clinic Locations</span>
                  <span className="text-xs font-bold text-white flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-[#8FF0E4]" />
                    Heights & Midtown
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
