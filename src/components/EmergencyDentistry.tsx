import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Clock, Zap, MapPin } from 'lucide-react';
import { LOCATIONS } from '../data';

interface EmergencyDentistryProps {
  onOpenBooking: () => void;
}

export default function EmergencyDentistry({ onOpenBooking }: EmergencyDentistryProps) {
  const traumaTriage = [
    { title: 'Excruciating sudden toothaches', advice: 'Rinse with warm saltwater, floss surrounding gums, and avoid chewing near the pain.' },
    { title: 'Broken or cracked crowns/fillings', advice: 'Do not attempt to glue crowns back. Wrap the crown safely and bring it directly.' },
    { title: 'Knocked-out permanent teeth', advice: 'Store the tooth in cold organic milk or inside the gums, and call us within 60 minutes!' },
    { title: 'Sudden bleeding or jaw swelling', advice: 'Apply cold pressure packs to facial structures and triage via clinical advice lines.' }
  ];

  return (
    <section className="bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-black text-white py-24 relative overflow-hidden border-t-2 border-red-500/20" id="emergency-notice-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-red-500/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Urgent header banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6" id="emergency-header-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-500 tracking-wider uppercase">
              <Zap className="h-3.5 w-3.5 animate-bounce shrink-0" />
              Same-day Urgent Triage Availability
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight leading-tight">
              Agonizing Pain or Tooth Injury? <br />
              <span className="text-red-500">We Provide Same-Day Relief.</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed font-semibold">
              Donʼt spend your evening in a general hospital emergency room waiting for hours. FLOSS Dental Houston reserves daily emergency slots to handle extreme toothaches, broken fillings, chipped crowns, and physical mouth trauma. Call our express relief teams immediately for phone diagnosis and fast scheduling Priority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="p-4 rounded-xl bg-white/5 border border-gray-800 flex flex-col justify-between hover:border-red-500/30 transition">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#54D6B7] font-extrabold">{loc.name} Emergency</span>
                    <span className="text-xs text-gray-400 block mt-1.5">{loc.address}</span>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                    className="mt-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow"
                    id={`emergency-dial-${loc.id}`}
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    Dial {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick-action instructions */}
          <div className="lg:col-span-5 bg-[#1C1C1C]/40 border border-gray-800 p-8 rounded-2xl space-y-6" id="emergency-safety-checklist">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4.5 w-4.5 text-red-500 shrink-0" />
              Mouth Trauma Action Guidelines
            </h3>

            <div className="grid gap-4 text-xs">
              {traumaTriage.map((tri, idx) => (
                <div key={idx} className="space-y-1 border-b border-gray-800/60 pb-3 last:border-0 last:pb-0">
                  <span className="font-bold text-white block">{tri.title}</span>
                  <p className="text-gray-400 leading-normal font-medium">{tri.advice}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl bg-[#54D6B7] hover:bg-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide transition text-center"
              id="emergency-book-intent-btn"
            >
              Request Same-day Priority Visit
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
