import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Check, Layers, UserCheck } from 'lucide-react';

interface DentalImplantsGuideProps {
  onOpenBooking: () => void;
}

export default function DentalImplantsGuide({ onOpenBooking }: DentalImplantsGuideProps) {
  const steps = [
    {
      num: '01',
      phase: 'Comprehensive Diagnosis',
      title: 'Smile & Jawline Mapping',
      desc: 'Using low-radiation digital 3D CBCT scanners, we fully map your jawbone densities and surrounding nerves—ensuring absolute surgical safety and strategic precision before any alignment is begun.'
    },
    {
      num: '02',
      phase: 'Structural placement',
      title: 'Biocompatible Titanium Anchor',
      desc: 'Our expert oral surgeon Dr. Michael Munilla places a medical grade biocompatible titanium foundation right into the bone socket. Over a brief period, this merges with your jaw, acting as an organic tooth root.'
    },
    {
      num: '03',
      phase: 'Aesthetic capping',
      title: 'Handcrafted Zirconia Crown',
      desc: 'Our ceramic design labs hand-carve a custom zirconia crown that mimics natural enamel transparency. This matches the shade, size, and form of your surrounding teeth—bonding seamlessly into your bite cycle.'
    }
  ];

  const highlights = [
    'Halts biological bone attrition & preserves young facial contour structures',
    'Guarantees 100% original chewing and biting force—enjoy apples and steaks again',
    'Secures adjacent teeth from drifting and misaligning raw bone spaces',
    'Designed to comfortably endure an entire lifetime of standard use'
  ];

  return (
    <section className="py-24 bg-[#141414] text-white overflow-hidden relative border-t border-gray-900" id="implants-journey">
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#54D6B7]/5 blur-[180px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" id="implants-header">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Restorative Masterworks
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight">
              Advanced Dental Implants. <br />
              <span className="bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] bg-clip-text text-transparent font-black">
                The Gold Standard of Tooth Replacement.
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
              Losing teeth compromised your physical biting comfort, tooth alignment, and facial framework. Our surgical team uses clinically proven titanium and monolithic dental anchors that biological fuse with your socket, creating permanent, worry-free support that feels just like your original natural teeth.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#54D6B7] hover:bg-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide transition shadow-md hover:shadow-[#54D6B7]/15"
              id="implants-consult-btn"
            >
              Book Implant Assessment
            </button>
          </div>
        </div>

        {/* Informative Step-by-Step cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#1C1C1C] rounded-2xl p-8 border border-[#2D2D2D] relative space-y-6 flex flex-col justify-between"
              id={`implant-step-${idx}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#54D6B7] uppercase tracking-widest bg-[#252525] px-2.5 py-1 rounded-md border border-[#2d2d2d] font-mono select-none">
                    Phase {step.num}
                  </span>
                  <span className="text-3xl font-extrabold text-gray-700/60 font-serif select-none">{step.num}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">{step.phase}</span>
                  <h4 className="font-extrabold text-base text-white font-sans">{step.title}</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1C1C1C] text-[#54D6B7] border border-[#2D2D2D] z-10 shadow">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassuring Patient-Focused block & highlight grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-[#1C1C1C] to-[#161616] rounded-2xl p-8 md:p-10 border border-[#2D2D2D]">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs text-[#54D6B7] font-bold uppercase tracking-wider block">Reassuring Clinical Excellence</span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans">Restore Your Bite Force Safely</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Under Dr. Munilla’s strict surgical directives, our implants enjoy a proven 98.2% integration rate. We operate under rigorous clinical sterile conditions and offer multiple sedation strategies (oral or nitrious options) to guarantee a completely comfortable and painless visit from start to finish.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((hlt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-medium">
                  <div className="p-1 rounded-full bg-[#54D6B7]/10 text-[#54D6B7] shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{hlt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
