import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="py-24 bg-white text-[#1A1A1A] relative" id="patient-testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header blocks */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
            Verified Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 tracking-tight leading-tight">
            Loved & Endorsed by <br />
            <span className="text-[#54D6B7]">Thousands of Houston Patients</span>
          </h2>
          <p className="text-sm text-gray-500 leading-normal max-w-md mx-auto">
            Read authentic stories of real physical smile recoveries, dental root placements, or Invisalign corrections performed at our physical Heights & Midtown clinics.
          </p>
        </div>

        {/* Carousel slide viewport */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12 py-12 rounded-3xl bg-[#FAF9F6] border border-[#EEEDE8] shadow">
          
          <div className="absolute top-6 left-6 text-gray-200">
            <Quote className="h-16 w-16 text-[#54D6B7]/15 fill-[#54D6B7]/5 shrink-0" />
          </div>

          <div className="relative z-10 text-center space-y-6" id="testimonial-slide-body">
            
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4.5 w-4.5 fill-[#54D6B7] text-[#54D6B7]" />
              ))}
            </div>

            {/* Testimonials Review copy */}
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-medium italic max-w-2xl mx-auto">
              "{TESTIMONIALS_DATA[activeIndex]?.text}"
            </p>

            {/* Sub-details */}
            <div className="space-y-1">
              <span className="text-sm font-extrabold text-[#1A1A1A] font-sans block">{TESTIMONIALS_DATA[activeIndex]?.author}</span>
              <span className="text-[10px] uppercase font-bold text-[#54D6B7] tracking-widest block">{TESTIMONIALS_DATA[activeIndex]?.treatment}</span>
              <span className="text-[10px] text-gray-400 font-medium block">{TESTIMONIALS_DATA[activeIndex]?.role} | Verified Houston resident</span>
            </div>

          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white hover:bg-[#1A1A1A] hover:text-white text-gray-600 border border-[#EEEDE8] transition duration-200"
              aria-label="Previous testimonial"
              id="testi-btn-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-gray-400 font-bold font-mono">
              0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white hover:bg-[#1A1A1A] hover:text-white text-gray-600 border border-[#EEEDE8] transition duration-200"
              aria-label="Next testimonial"
              id="testi-btn-next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Highlight row of diagnostic reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#EEEDE8]">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-5 bg-[#FAF9F6] rounded-2xl border border-[#EEEDE8] relative space-y-4 text-left"
            >
              <div className="flex items-center gap-1.5 text-[#54D6B7]">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-medium line-clamp-4">
                "{t.text}"
              </p>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-gray-950 block">{t.author}</span>
                <span className="text-[9px] uppercase tracking-wider text-[#54D6B7] font-extrabold">{t.treatment}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
