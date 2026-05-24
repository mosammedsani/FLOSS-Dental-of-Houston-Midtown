import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Smile, ShieldCheck, Check, Layers, ChevronRight } from 'lucide-react';

interface InvisalignExperienceProps {
  onOpenBooking: () => void;
}

export default function InvisalignExperience({ onOpenBooking }: InvisalignExperienceProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Digital 3D Smile Prep',
      desc: 'Our clinicians scan your teeth in 60 seconds with our high-definition iTero tool—generating an instant virtual progression blueprint.',
      graphic: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      title: 'Custom smart-track crafting',
      desc: 'Invisalign models are custom-pressed using proprietary surgical SmartTrack polymer compounds, designed to fit comfortably around your gums.',
      graphic: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      title: 'Safe gradual alignments',
      desc: 'Every week you transition to your next custom aligner slate. Watch your teeth comfortably align without irritating wires.',
      graphic: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400&h=300'
    }
  ];

  const benefits = [
    { title: 'Removability', text: 'Remove your aligners to enjoy steaks, popcorn, and carbonated beverages with zero fear of bracket damage.' },
    { title: 'Painless hygiene', text: 'Brush and floss comfortably since you donʼt need to thread wires or navigate metal bounds.' },
    { title: 'Subtle presence', text: 'Proprietary ultra-clear medical polymers reflect natural light, making aligners fully invisible.' },
    { title: 'Accelerated pacing', text: 'SmartTrack micro-triggers push roots from multiple coordinates, shortening overall timelines.' }
  ];

  return (
    <section className="py-24 bg-white text-[#1a1a1a] relative overflow-hidden" id="invisalign-experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6" id="invisalign-text">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Orthodontics Redesigned
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-gray-900 leading-tight">
              Invisalign® Clear Aligners. <br />
              <span className="text-[#54D6B7]">The Invisible Secret.</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Why bind your professional or social life with distracting metal brackets and biological wire tearing? FLOSS is an elite Preferred provider of Invisalignclear aligner technology in Houston. We replace painful wire alignments with smooth, tissue-friendly, and custom-designed polymers that align dental roots comfortably and fully invisibly.
            </p>

            {/* Micro-comparison metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAF9F6] rounded-2xl border border-[#EEEDE8] text-xs">
              <div className="space-y-1">
                <span className="text-[#54D6B7] font-bold block text-sm">FLOSS SmartAlign®</span>
                <p className="text-gray-500 font-medium">98% customer satisfaction. Painless, hygienic, and removable.</p>
              </div>
              <div className="space-y-1 border-l border-[#EEEDE8] pl-4">
                <span className="text-gray-400 font-bold block text-sm">Traditional Braces</span>
                <p className="text-gray-500 font-medium">Severe dietary limits, periodic painful tightening, wire trauma.</p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white font-bold text-sm tracking-wide transition shadow-lg hover:shadow-[#54D6B7]/10"
              id="invisalign-start-btn"
            >
              Start Your Invisalign Journey
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-6 relative flex flex-col justify-center" id="invisalign-visual">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 p-2.5 shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Smiling woman checks clear Invisalign aligners"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute top-4 -right-4 bg-white border border-[#EEEDE8] shadow-2xl p-4 rounded-2xl max-w-xs flex items-center gap-3">
              <div className="p-2.5 bg-[#54D6B7]/10 text-[#54D6B7] rounded-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block leading-normal">Smart-Track Polymers</span>
                <span className="text-[10px] text-gray-500 font-medium block mt-0.5">Custom, safe medical grade</span>
              </div>
            </div>
          </div>

        </div>

        {/* Aligner Steps Progression */}
        <div className="space-y-8 pt-8 border-t border-[#EEEDE8]">
          <div className="text-center max-w-lg mx-auto">
            <h3 className="text-2xl font-bold font-sans text-gray-900">Your Orthodontic Journey in 3 Steps</h3>
            <p className="text-xs text-gray-400 mt-1">Explore our comfortable technological workflow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-[#1A1A1A] text-white border-[#1a1a1a] shadow-xl'
                    : 'bg-[#FAF9F6] text-[#1a1a1a] border-[#ECEBE8] hover:border-gray-500'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs font-mono select-none ${
                    activeStep === idx ? 'bg-[#54D6B7] text-[#1A1A1A]' : 'bg-gray-200 text-gray-700'
                  }`}>
                    0{idx + 1}
                  </span>
                  {activeStep === idx && <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#54D6B7]">active pathway</span>}
                </div>
                <h4 className="font-extrabold text-sm mb-2 uppercase tracking-wide font-sans">{st.title}</h4>
                <p className="text-xs leading-relaxed text-gray-400 font-medium">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#EEEDE8]">
          {benefits.map((b, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#EEEDE8] space-y-2">
              <div className="h-6 w-6 rounded-full bg-[#54D6B7]/10 flex items-center justify-center text-[#54D6B7]">
                <Check className="h-4 w-4" />
              </div>
              <h5 className="font-extrabold text-xs text-gray-900 uppercase font-sans tracking-wide">{b.title}</h5>
              <p className="text-xs text-gray-500 leading-normal font-medium">{b.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
