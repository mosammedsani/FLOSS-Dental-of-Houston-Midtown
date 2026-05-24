import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Smile, Layers, Shield, Activity, Heart, Sun, Flame, CheckCircle, Clock, Zap, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesShowcaseProps {
  onOpenBooking: () => void;
  selectedDefaultId?: string;
}

// Icon Mapping helper
const mapIcon = (name: string) => {
  switch (name) {
    case 'Sparkles': return Sparkles;
    case 'Smile': return Smile;
    case 'Layers': return Layers;
    case 'Shield': return Shield;
    case 'Activity': return Activity;
    case 'HeartCheck': return Heart;
    case 'Sun': return Sun;
    default: return Sparkles;
  }
};

export default function ServicesShowcase({ onOpenBooking, selectedDefaultId }: ServicesShowcaseProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'cosmetic' | 'restorative' | 'general' | 'preventive'>('all');

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (categoryFilter === 'all') return true;
    return srv.category === categoryFilter;
  });

  const categories = [
    { label: 'All Treatments', value: 'all' as const },
    { label: 'Cosmetic Dentistry', value: 'cosmetic' as const },
    { label: 'Restorative & Implants', value: 'restorative' as const },
    { label: 'Routine Prev Cares', value: 'preventive' as const },
  ];

  return (
    <section className="py-24 bg-[#141414] text-white border-t border-gray-900" id="services-grid-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" id="services-header">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Designed to Rebuild, Illuminate, <br />
              <span className="bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] bg-clip-text text-transparent font-black">
                & Align Your Perfect Smile
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              From gold-standard Invisalign aligners to hand-crafted porcelain composites, we perform comprehensive dental surgeries and preventive cleanings using elite high-precision tech.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                  categoryFilter === cat.value
                    ? 'bg-[#54D6B7] text-[#1A1A1A]'
                    : 'bg-[#222222] text-gray-400 hover:text-white border border-[#2D2D2D]'
                }`}
                id={`filter-btn-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => {
            const IconComponent = mapIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between bg-[#1C1C1C] rounded-2xl p-6 border border-[#2D2D2D] hover:border-[#54D6B7]/30 transition duration-300 transform hover:-translate-y-1"
                id={`srv-card-${srv.id}`}
              >
                <div className="space-y-6">
                  {/* Category, Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#252525] text-[#54D6B7] group-hover:bg-[#54D6B7] group-hover:text-[#1A1A1A] transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold bg-[#141414] px-2 py-0.5 rounded-md border border-[#222]">
                      {srv.category}
                    </span>
                  </div>

                  {/* Text copies */}
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-base text-white group-hover:text-[#54D6B7] transition-colors font-sans">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                      {srv.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#252525] flex items-center justify-between text-xs font-bold text-[#54D6B7]">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="flex items-center gap-1 group-hover:text-[#8FF0E4] hover:underline"
                    id={`srv-btn-expand-${srv.id}`}
                  >
                    Learn More Action
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  {srv.duration && (
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {srv.duration}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Slid-In Drawer / Modal Dialog */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-3xl bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#2C2C2C] text-white shadow-2xl relative"
                id="treatment-detail-modal"
              >
                {/* Dismiss X */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#252525] text-gray-400 hover:text-white transition"
                  aria-label="Close detail modal"
                  id="modal-srv-close"
                >
                  &times;
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Photo part */}
                  <div className="md:col-span-5 h-48 md:h-full relative overflow-hidden bg-gray-900 border-b md:border-b-0 md:border-r border-[#2C2C2C]">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#1C1C1C]"></div>
                  </div>

                  {/* Detail details part */}
                  <div className="md:col-span-7 p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                    <div className="space-y-1">
                      <h4 className="text-2xl font-extrabold font-sans text-white">{selectedService.title}</h4>
                      <span className="text-xs text-[#54D6B7] uppercase font-bold tracking-widest block">{selectedService.category} dental care</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {selectedService.longDescription}
                    </p>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-2">Patient Benefits & Expectations</span>
                      <div className="grid gap-2.5">
                        {selectedService.benefits.map((ben, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                            <CheckCircle className="h-4 w-4 text-[#54D6B7] shrink-0 mt-0.5" />
                            <span>{ben}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-3 bg-[#222222] rounded-xl text-xs border border-[#2D2D2D]">
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold mb-0.5">ESTIMATED TIMELINE</span>
                        <span className="text-white font-bold">{selectedService.duration || 'Flexible'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold mb-0.5">RECOVERY STATUS</span>
                        <span className="text-[#8FF0E4] font-bold">{selectedService.recovery || 'Zero Down Time'}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          onOpenBooking();
                        }}
                        className="flex-1 py-3 rounded-xl bg-[#54D6B7] hover:bg-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide transition text-center"
                        id="srv-detail-book-btn"
                      >
                        Request Eligibility Check
                      </button>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="flex-1 py-3 rounded-xl bg-[#252525] hover:bg-[#2C2C2C] border border-[#2D2D2D] font-bold text-sm text-gray-300 transition text-center"
                      >
                        Back to All Care
                      </button>
                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
