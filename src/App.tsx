import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  ChevronDown, 
  ChevronUp,
  X, 
  Sparkles, 
  Clock, 
  User, 
  CheckCircle,
  HelpCircle,
  Trash2
} from 'lucide-react';
import { NavPage, AppointmentRequest } from './types';
import { FAQ_DATA, LOCATIONS } from './data';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import InvisalignExperience from './components/InvisalignExperience';
import DentalImplantsGuide from './components/DentalImplantsGuide';
import EmergencyDentistry from './components/EmergencyDentistry';
import AboutAndTeam from './components/AboutAndTeam';
import Testimonials from './components/Testimonials';
import NewPatientOnboarding from './components/NewPatientOnboarding';
import OfficeTourGallery from './components/OfficeTourGallery';
import ContactSection from './components/ContactSection';
import BookingWizard from './components/BookingWizard';
import InsurancePage from './components/InsurancePage';
import FinancingPlansPage from './components/FinancingPlansPage';
import BlogPage from './components/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingLocation, setBookingLocation] = useState<'heights' | 'midtown' | undefined>(undefined);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<AppointmentRequest[]>([]);

  // Load existing persistent appointments on mount
  useEffect(() => {
    const saved = localStorage.getItem('floss_booked_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved appointments', e);
      }
    }
  }, []);

  const handleOpenBooking = (location?: 'heights' | 'midtown') => {
    setBookingLocation(location);
    setIsBookingOpen(true);
  };

  const handleAddAppointment = (appt: AppointmentRequest) => {
    const updated = [...appointments, appt];
    setAppointments(updated);
    localStorage.setItem('floss_booked_appointments', JSON.stringify(updated));
  };

  const handleDeleteAppointment = (index: number) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem('floss_booked_appointments', JSON.stringify(updated));
  };

  const handlePageChange = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800 flex flex-col justify-between selection:bg-[#54D6B7]/20 selection:text-[#1A1A1A]">
      <div id="hero-top"></div>
      
      {/* Sticky Top Header Navigation */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        
        {/* Floating schedule bar if appointments exist */}
        <AnimatePresence>
          {appointments.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-[#1A1A1A] to-[#252525] border-b border-[#333] text-white py-3.5 px-4 sm:px-6 lg:px-8"
              id="active-appointments-bar"
            >
              <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#54D6B7] animate-ping shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Your Booked Consultations ({appointments.length})
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {appointments.map((appt, idx) => (
                    <div 
                      key={idx} 
                      className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs"
                    >
                      <Calendar className="h-3.5 w-3.5 text-[#54D6B7]" />
                      <span>
                        FLOSS <strong>{appt.location === 'heights' ? 'Heights' : 'Midtown'}</strong>: {appt.preferredDate} ({appt.preferredTime})
                      </span>
                      <button
                        onClick={() => handleDeleteAppointment(idx)}
                        className="p-1 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-md transition"
                        title="Cancel request"
                        id={`cancel-appt-${idx}`}
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Hero 
                onOpenBooking={() => handleOpenBooking()} 
                setCurrentPage={handlePageChange} 
              />
              <ServicesShowcase 
                onOpenBooking={() => handleOpenBooking()} 
              />
              <Testimonials />
              <OfficeTourGallery />
              
              {/* Structured FAQ assembly */}
              <section className="py-24 bg-[#141414] text-white border-t border-gray-900" id="faq-assembly">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center space-y-4">
                    <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3 py-1.5 rounded-full">
                      Common Inquiries
                    </span>
                    <h3 className="text-3xl font-extrabold tracking-tight font-sans text-white">
                      Everything You Deserve To Know
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Learn how we accept dental insurance, handle same-day pain emergencies, and structure our cosmetic appointments.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {FAQ_DATA.map((faq) => {
                      const isOpen = activeFaq === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className="bg-[#1C1C1C] rounded-2xl border border-[#2D2D2D] overflow-hidden transition duration-200"
                          id={`faq-item-${faq.id}`}
                        >
                          <button
                            onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                            className="w-full p-5 flex items-center justify-between text-left hover:bg-[#222222] transition duration-150"
                          >
                            <span className="text-xs sm:text-sm font-bold text-white font-sans pr-4 flex items-center gap-2">
                              <HelpCircle className="h-4.5 w-4.5 text-[#54D6B7] shrink-0" />
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="h-4 w-4 text-[#54D6B7]" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                            )}
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t border-[#2D2D2D] bg-[#1C1C1C] p-5 text-xs text-gray-300 leading-relaxed font-semibold font-medium text-left"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              <ContactSection />
            </motion.div>
          )}

          {(currentPage === 'about' || currentPage === 'team') && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <AboutAndTeam />
            </motion.div>
          )}

          {(currentPage === 'services' || currentPage === 'cosmetic') && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <ServicesShowcase 
                onOpenBooking={() => handleOpenBooking()} 
                selectedDefaultId={currentPage === 'cosmetic' ? 'cosmetic' : undefined}
              />
            </motion.div>
          )}

          {currentPage === 'invisalign' && (
            <motion.div
              key="invisalign-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <InvisalignExperience onOpenBooking={() => handleOpenBooking()} />
            </motion.div>
          )}

          {currentPage === 'implants' && (
            <motion.div
              key="implants-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <DentalImplantsGuide onOpenBooking={() => handleOpenBooking()} />
            </motion.div>
          )}

          {currentPage === 'emergency' && (
            <motion.div
              key="emergency-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <EmergencyDentistry onOpenBooking={() => handleOpenBooking()} />
            </motion.div>
          )}

          {currentPage === 'new-patients' && (
            <motion.div
              key="patients-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <NewPatientOnboarding />
            </motion.div>
          )}

          {currentPage === 'insurance' && (
            <motion.div
              key="insurance-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <InsurancePage onOpenBooking={() => handleOpenBooking()} />
            </motion.div>
          )}

          {currentPage === 'financing' && (
            <motion.div
              key="financing-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <FinancingPlansPage onOpenBooking={() => handleOpenBooking()} />
            </motion.div>
          )}

          {currentPage === 'blog' && (
            <motion.div
              key="blog-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <BlogPage />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Luxury multi-column dark footer */}
      <Footer 
        setCurrentPage={handlePageChange} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Sticky Mobile/Tablet Booking CTA floating on bottom left/right screen corner */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] hover:scale-105 duration-300 shadow-2xl shadow-[#54D6B7]/30 text-[#1A1A1A] border-2 border-white/20"
          aria-label="Secure Booking Wizard"
          id="sticky-mobile-book-action"
        >
          <Calendar className="h-6 w-6 animate-pulse" />
        </button>
      </div>

      {/* Appointment Booking Wizard overlay */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingWizard 
            onClose={() => setIsBookingOpen(false)}
            initialLocation={bookingLocation}
            onAddAppointment={handleAddAppointment}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
