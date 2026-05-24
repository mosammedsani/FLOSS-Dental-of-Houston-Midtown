import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn, Eye, Sparkles, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { OFFICE_GALLERY } from '../data';
import { OfficeImage } from '../types';

export default function OfficeTourGallery() {
  const [filter, setFilter] = useState<'all' | 'lobby' | 'treatment' | 'technology'>('all');
  const [activeLightbox, setActiveLightbox] = useState<number | null>(null);

  const filteredImages = OFFICE_GALLERY.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const categories = [
    { label: 'View All', value: 'all' as const },
    { label: 'Lobby Lounge', value: 'lobby' as const },
    { label: 'Care Bays', value: 'treatment' as const },
    { label: 'Modern Tech', value: 'technology' as const }
  ];

  const handleNext = () => {
    if (activeLightbox !== null) {
      setActiveLightbox((activeLightbox + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (activeLightbox !== null) {
      setActiveLightbox((activeLightbox - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-24 bg-[#141414] text-white border-t border-gray-900" id="office-spec-gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Clinical Environments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
              Tour Our Tech-First <br />
              <span className="bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] bg-clip-text text-transparent font-black">Design Studios</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-semibold">
              Explore the clean architectural spaces of FLOSS Dental Houston. We design comfortable clinical spaces, warm atmospheric reception lounges, and painless dental technologies.
            </p>
          </div>

          {/* Action Filters bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                  filter === cat.value
                    ? 'bg-[#54D6B7] text-[#1A1A1A]'
                    : 'bg-[#222222] text-gray-400 hover:text-white border border-[#2D2D2D]'
                }`}
                id={`gal-filter-btn-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry or Compact responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveLightbox(idx)}
              className="group relative aspect-[3/2] bg-[#222222] rounded-2xl overflow-hidden border border-[#2D2D2D] cursor-pointer shadow transform hover:scale-[1.01] hover:-translate-y-1 duration-300 transition"
              id={`office-gallery-item-${img.id}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition grayscale-[15%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                <div className="space-y-1 text-left w-full flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#54D6B7] font-extrabold tracking-widest">{img.category}</span>
                    <h4 className="font-bold text-sm text-white font-sans">{img.title}</h4>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-sm shadow hover:scale-115 transition">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Dialog */}
        <AnimatePresence>
          {activeLightbox !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/95 backdrop-blur-md">
              {/* Close background */}
              <div className="absolute inset-0" onClick={() => setActiveLightbox(null)}></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full flex flex-col justify-center items-center z-10"
                id="gallery-lightbox-overlay"
              >
                {/* Dismiss button */}
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-[#54D6B7] bg-[#1C1C1C] rounded-full border border-gray-800 transition shadow"
                  aria-label="Dismiss zoom"
                  id="lightbox-close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Big image frame */}
                <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-black border border-[#2D2D2D] shadow-2xl">
                  <img
                    src={filteredImages[activeLightbox]?.url}
                    alt={filteredImages[activeLightbox]?.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Left arrow trigger */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1A1A1A]/90 hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white border border-gray-800 transition"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {/* Right arrow trigger */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1A1A1A]/90 hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white border border-gray-800 transition"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Information subtitle */}
                <div className="w-full text-center py-4 space-y-1">
                  <span className="text-[10px] uppercase text-[#54D6B7] font-black tracking-widest">{filteredImages[activeLightbox]?.category} env</span>
                  <h4 className="text-base font-bold text-white font-sans">{filteredImages[activeLightbox]?.title}</h4>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
