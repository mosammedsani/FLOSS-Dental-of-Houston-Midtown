import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Snowflake, CalendarDays, Zap, ArrowDownCircle, Sparkles, Smile, Star } from 'lucide-react';
import { NavPage } from '../types';

interface HeroProps {
  onOpenBooking: () => void;
  setCurrentPage: (page: NavPage) => void;
}

export default function Hero({ onOpenBooking, setCurrentPage }: HeroProps) {
  const trustIndicators = [
    { icon: Sparkles, text: 'Cosmetic Smile Makeovers' },
    { icon: Snowflake, text: 'Ultra-Gentle Modern Cares' },
    { icon: Zap, text: 'Same-Day Urgent Care' },
    { icon: Smile, text: 'Preferred Invisalign Experts' }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#141414] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background cinematic image and gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="Luxury Dental Lounge"
          className="w-full h-full object-cover opacity-25 scale-105 filter saturate-50 blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-[#141414]/90"></div>
        
        {/* Subtle glowing blobs representing mint and aqua palette */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#54D6B7]/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8FF0E4]/10 blur-[150px] animate-pulse duration-10000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8" id="hero-left">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-gray-800 text-xs font-semibold text-[#54D6B7] tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-[#54D6B7] animate-ping"></span>
            Houston’s Elite Aesthetic Hub
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
              Modern Dentistry <br />
              <span className="bg-gradient-to-r from-[#54D6B7] via-[#8FF0E4] to-white bg-clip-text text-transparent font-black">
                Designed Around <br /> Your Smile
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Experience the FLOSS difference. No chemical odors, no judgment. Just elite, tech-infused cosmetic smile design, veneers, and Invisalignclear orthodontics tailored within a luxury aesthetic space.
            </p>
          </div>

          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#54D6B7] hover:bg-[#8FF0E4] text-[#141414] font-bold text-base tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-[#54D6B7]/15 text-center cursor-pointer"
              id="hero-book-cta"
            >
              Book Consultation
            </button>
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-[#222222] hover:bg-[#2C2C2C] border border-[#333333] text-white font-bold text-base tracking-wide transition text-center cursor-pointer"
              id="hero-services-cta"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Reviews indicator */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80 w-full sm:w-auto">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
              ].map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="Happy Patient Avatar"
                  className="h-10 w-10 rounded-full border-2 border-[#141414] object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-[#54D6B7] text-[#54D6B7]" />
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Loved by <strong>4,800+</strong> Houston Patients (4.9/5 G-Raves)
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Layered Graphic Composition */}
        <div className="lg:col-span-5 relative flex justify-center items-center" id="hero-right">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[#222222] border border-[#333333] shadow-2xl p-3">
            {/* Main high-quality dentist/smile imagery */}
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=800"
              alt="Happy Smile at FLOSS Dental"
              className="w-full h-full object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 duration-500 transition"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphism tags floating on top */}
            <div className="absolute top-6 -left-6 bg-[#1A1A1A]/85 backdrop-blur-md rounded-xl p-3 border border-gray-800 shadow-xl hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#54D6B7]/10 text-[#54D6B7]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Invisalign® Preferred</span>
                <span className="text-[10px] text-gray-400">Top-Tier Elite Standard Provider</span>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-[#1A1A1A]/85 backdrop-blur-md rounded-xl p-3.5 border border-gray-800 shadow-xl hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#8FF0E4]/10 text-[#8FF0E4]">
                <CalendarDays className="h-5 w-5 animate-bounce" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Same-Day Emergencies</span>
                <span className="text-[10px] text-gray-400">Immediate diagnostic relief</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Grid overlay along the bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#181818] to-transparent py-4 border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustIndicators.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2.5 text-gray-300">
                  <div className="p-1.5 rounded-md bg-[#54D6B7]/5 text-[#54D6B7]">
                    <Icon className="h-4 w-4 shrink-0" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide uppercase text-gray-200">{ind.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
