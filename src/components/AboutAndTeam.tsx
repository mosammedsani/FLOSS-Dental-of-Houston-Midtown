import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Quote, Users, Sparkles, Pin, CheckCircle } from 'lucide-react';
import { TEAM_DATA } from '../data';
import { TeamMember } from '../types';

export default function AboutAndTeam() {
  const [selectedClinician, setSelectedClinician] = useState<TeamMember | null>(null);

  const stats = [
    { label: 'Houston Smiles Perfected', value: '4,800+' },
    { label: 'Years of Combined Practice', value: '40+' },
    { label: 'Elite Studio Locations', value: '2' },
    { label: 'Preferred Invisalign Rank', value: 'Gold Provider' }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1A1A1A]" id="about-us-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Practice Story (Split layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6" id="about-story-text">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Philosophy & Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Changing the Vibe <br />
              <span className="text-gray-500 font-bold">of Dentistry Forever</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              FLOSS Dental was created because the founders believed that high-quality, professional oral care didn’t have to feel like a high-stress medical visit. Our philosophy combines premium, warm architectural design, gentle non-invasive therapies, and elite cosmetic dental specialists within two design-forward studios in Houston Heights and Midtown.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We focus heavily on digital diagnostics, preventative strategies, and custom ceramic enhancements that let our clients smile with uninhibited, glowing poise. We respect your physical sensitivities and scheduling blocks, designing workflows that honor your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {[
                'Meticulous aesthetic natural shade customization',
                'Zero-sensiting, safe clinical bleaching',
                'Advanced iTero digital dental mapping',
                'Sedation options for complete comfort'
              ].map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <CheckCircle className="h-4 w-4 text-[#54D6B7] shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative" id="about-story-visuals">
            {/* Layered collage */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white p-2.5 bg-white">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="FLOSS Practice Interior"
                className="w-full h-full object-cover rounded-xl grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent"></div>
            </div>
            {/* Overlap card */}
            <div className="absolute -bottom-10 -left-6 bg-[#1A1A1A] text-white p-6 rounded-2xl border border-gray-800 shadow-2xl max-w-xs invisible sm:block">
              <span className="text-[10px] uppercase text-[#54D6B7] tracking-widest font-bold">Specialized Edge</span>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                "Our cosmetic makeovers aren\'t standardized blocks. We handcraft porcelain layouts to balance with your cheek structures, lip curvature, and natural micro-tones."
              </p>
              <span className="text-[10px] text-gray-500 block mt-3 font-semibold">— Dr. Sharon, D.D.S.</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#1A1A1A] text-white p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#54D6B7] block font-mono">{stat.value}</span>
              <span className="text-xs text-gray-400 block tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Doctor Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3 py-1 rounded-full">
              Meet the Doctors
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-gray-900">
              Masters of Aesthetic Medicine & Biological Health
            </h3>
            <p className="text-gray-500 text-sm">
              Our clinicians are renowned dental artists active in international academy boards, mixing professional engineering with comfortable patient empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_DATA.map((dr) => (
              <div
                key={dr.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white hover:shadow-2xl border border-[#ECEBE8] hover:border-[#54D6B7]/30 transition-all duration-300 transform hover:-translate-y-1"
                id={`team-card-${dr.id}`}
              >
                {/* Photo frame */}
                <div className="aspect-[4/5] overflow-hidden bg-[#EAE8E4] relative">
                  <img
                    src={dr.image}
                    alt={dr.name}
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle shader */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  {/* Floating quick bio peek on hover */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/95 text-white p-3.5 rounded-xl border border-gray-800 backdrop-blur-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    <span className="text-[10px] uppercase text-[#54D6B7] tracking-widest font-bold">Daily Specialty</span>
                    <p className="text-xs text-gray-300 font-medium mt-1">{dr.specialty}</p>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-lg text-gray-950 font-sans">{dr.name}</h4>
                    <p className="text-xs font-bold text-[#54D6B7] uppercase tracking-wide">{dr.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed pt-2 line-clamp-3">{dr.bio}</p>
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => setSelectedClinician(dr)}
                    className="w-full py-2.5 rounded-xl bg-[#FAF9F6] border border-[#ECEBE8] text-xs font-bold hover:bg-[#1A1A1A] hover:text-white transition duration-200 uppercase tracking-widest text-center block"
                    id={`btn-dr-expand-${dr.id}`}
                  >
                    View Doctor Portfolio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Details Modal */}
        <AnimatePresence>
          {selectedClinician && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-2xl relative text-gray-800"
                id="doctor-detail-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedClinician(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1A1A1A] text-white hover:bg-[#54D6B7] hover:text-[#1A1A1A] transition"
                  aria-label="Close"
                  id="modal-close-dr"
                >
                  &times;
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Photo pane */}
                  <div className="md:col-span-5 aspect-[4/5] md:aspect-auto md:h-full bg-gray-100 relative">
                    <img
                      src={selectedClinician.image}
                      alt={selectedClinician.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glowing aesthetic border overlay */}
                    <div className="absolute inset-0 border-r border-[#FAF9F6] hidden md:block"></div>
                  </div>

                  {/* Text Details pane */}
                  <div className="md:col-span-7 p-8 md:p-10 space-y-6 overflow-y-auto max-h-[85vh]">
                    <div className="space-y-1">
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950 font-sans leading-none">{selectedClinician.name}</h4>
                      <p className="text-sm font-bold text-[#54D6B7] uppercase tracking-wide">{selectedClinician.title}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-1">Focus Domain</span>
                      <p className="text-sm font-semibold text-gray-800">{selectedClinician.specialty}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{selectedClinician.bio}</p>
                    </div>

                    {selectedClinician.quote && (
                      <div className="p-4 bg-[#FAF9F6] rounded-xl border-l-4 border-[#54D6B7] flex gap-3 italic text-gray-600 text-xs">
                        <Quote className="h-5 w-5 text-[#54D6B7] shrink-0 fill-[#54D6B7]/10" />
                        <div>"{selectedClinician.quote}"</div>
                      </div>
                    )}

                    {/* Academics & Accreditations (2-col) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1.5 mb-2">
                          <Award className="h-4 w-4 text-[#54D6B7]" />
                          Accreditations
                        </span>
                        <ul className="text-xs space-y-1.5 text-gray-600 list-disc list-inside">
                          {selectedClinician.credentials.map((cred, i) => (
                            <li key={i}>{cred}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-1.5 mb-2">
                          <GraduationCap className="h-4 w-4 text-[#8FF0E4]" />
                          Alumni Academics
                        </span>
                        <ul className="text-xs space-y-1.5 text-gray-600 list-disc list-inside">
                          {selectedClinician.education.map((edu, i) => (
                            <li key={i}>{edu}</li>
                          ))}
                        </ul>
                      </div>
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
